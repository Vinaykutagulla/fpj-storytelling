import { NextResponse } from 'next/server';
import { supabaseAdmin, hasSupabase } from '@/lib/supabaseAdmin';
import { logger } from '@/lib/logger';
import { memoryStore, metrics, type ApplicationRecord } from '@/lib/applicationStore';

// Rate limiting (very basic, in-memory): key = ip, value = timestamps
const requestLog: Record<string, number[]> = {};
const WINDOW_MS = 60_000; // 1 minute
const MAX_REQ = 5; // max submissions per minute per IP

export async function POST(req: Request) {
  try {
    const ip = (req.headers.get('x-forwarded-for') || '').split(',')[0].trim() || 'unknown';
    const now = Date.now();
    requestLog[ip] = (requestLog[ip] || []).filter(ts => now - ts < WINDOW_MS);
    if (requestLog[ip].length >= MAX_REQ) {
      metrics.rateLimited++;
      logger.warn('rate_limited', { ip });
      return NextResponse.json({ error: 'Rate limit exceeded. Try again later.' }, { status: 429 });
    }
    requestLog[ip].push(now);
    const data = await req.json();
    // Honeypot detection
    if (data.website) {
      metrics.spam++;
      logger.warn('spam_detected', { ip });
      return NextResponse.json({ ok: true, id: 'ignored', spam: true }, { status: 200 });
    }
    const required = ['name','email','institution','year'];
    for (const k of required) {
      if (!data[k] || String(data[k]).trim() === '') {
        return NextResponse.json({ error: `Missing field: ${k}` }, { status: 400 });
      }
    }
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(data.email)) {
      return NextResponse.json({ error: 'Invalid email' }, { status: 400 });
    }
    const record: ApplicationRecord = {
      id: crypto.randomUUID(),
      name: data.name.trim(),
      email: data.email.trim(),
      institution: data.institution.trim(),
      year: data.year.trim(),
      motivation: 'Application submitted via streamlined form', // Default value
      phone: data.phone?.trim() || undefined,
      course: data.course?.trim() || undefined,
      instagram: data.instagram?.trim() || undefined,
      linkedin: data.linkedin?.trim() || undefined,
      referrals: data.referrals?.trim() || undefined,
      referralCode: data.referralCode?.trim() || undefined,
      createdAt: new Date().toISOString()
    };
    metrics.total++;
    if (hasSupabase && supabaseAdmin) {
      const { error } = await supabaseAdmin
        .from('partner_applications')
        .insert({
          id: record.id,
          name: record.name,
          email: record.email,
          institution: record.institution,
          year: record.year,
          motivation: record.motivation, // Will use default value
          phone: record.phone,
          course: record.course,
          instagram: record.instagram,
          linkedin: record.linkedin,
          referrals: record.referrals,
          referral_code: record.referralCode
        });
      if (error) {
        console.error('Supabase insert error', error);
        // Fallback to memory so application not lost
        memoryStore.push(record);
        metrics.fallback++;
        logger.error('supabase_insert_failed', { id: record.id, error: error.message });
        return NextResponse.json({ ok: true, id: record.id, persisted: false, fallback: 'memory' });
      }
      metrics.persisted++;
      logger.info('application_created', { id: record.id, persisted: true, referral: record.referralCode });
      return NextResponse.json({ ok: true, id: record.id, persisted: true });
    } else {
      memoryStore.push(record);
      logger.info('application_created', { id: record.id, persisted: false, referral: record.referralCode });
      return NextResponse.json({ ok: true, id: record.id, persisted: false });
    }
  } catch (e: any) {
    return NextResponse.json({ error: 'Invalid JSON' }, { status: 400 });
  }
}

export async function GET() {
  return NextResponse.json({ count: memoryStore.length, metrics });
}
