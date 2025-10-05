import { NextResponse } from 'next/server';
import { logger } from '@/lib/logger';
import { sendContactEmail } from '@/lib/email';

export async function POST(req: Request) {
  try {
    const data = await req.json();
    // Basic validation
    if (!data.name || !data.email) {
      return NextResponse.json({ ok: false, error: 'Missing fields' }, { status: 400 });
    }
    // Honeypot (spam) field: if filled, pretend success without processing
    if (data.hp) {
      logger.warn('contact spam blocked', { name: data.name, email: data.email });
      return NextResponse.json({ ok: true });
    }
    // Placeholder: log for now (could integrate with email provider / queue)
    const meta = {
      name: data.name,
      email: data.email,
      service: data.service,
      phone: data.phone || null,
      len: (data.message || '').length,
      ts: Date.now()
    };
    logger.info('contact submission', meta);
    try {
      await sendContactEmail({
        name: data.name,
        email: data.email,
        phone: data.phone,
        service: data.service,
        experience: data.experience,
        message: data.message,
        ua: req.headers.get('user-agent') || undefined
      });
    } catch (err: any) {
      logger.error('contact email send failed', { error: err?.message });
    }
    return NextResponse.json({ ok: true });
  } catch (e: any) {
    return NextResponse.json({ ok: false, error: 'Invalid JSON' }, { status: 400 });
  }
}
