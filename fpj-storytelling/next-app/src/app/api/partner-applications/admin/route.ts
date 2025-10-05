import { NextResponse } from 'next/server';
import { supabaseAdmin, hasSupabase } from '@/lib/supabaseAdmin';
import { headers } from 'next/headers';

// NOTE: For production move to stricter auth (JWT, Clerk, etc.)

const generateReferralCode = (name: string, email: string): string => {
  // Generate unique referral code: FPJ + initials + random 4 digits
  const initials = name.split(' ').map(n => n[0]).join('').toUpperCase();
  const emailCode = email.split('@')[0].slice(0, 2).toUpperCase();
  const randomNum = Math.floor(1000 + Math.random() * 9000);
  return `FPJ${initials}${emailCode}${randomNum}`;
};

const validateAuth = () => {
  const h = headers();
  const authHeader = h.get('authorization') || '';
  const expected = process.env.ADMIN_BEARER_TOKEN;
  return expected && authHeader === `Bearer ${expected}`;
};

export async function GET() {
  if (!validateAuth()) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  if (hasSupabase && supabaseAdmin) {
    const { data, error } = await supabaseAdmin
      .from('partner_applications')
      .select('*')
      .order('created_at', { ascending: false })
      .limit(200);
    if (error) return NextResponse.json({ error: 'DB error' }, { status: 500 });
    return NextResponse.json({ source: 'supabase', count: data?.length || 0, items: data });
  }
  return NextResponse.json({ source: 'memory', note: 'In-memory store not exposed in admin endpoint without Supabase.' });
}

export async function POST(req: Request) {
  if (!validateAuth()) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    const { action, applicationId, reason } = await req.json();

    if (!hasSupabase || !supabaseAdmin) {
      return NextResponse.json({ error: 'Database not available' }, { status: 500 });
    }

    if (action === 'approve') {
      // Get application details
      const { data: app, error: fetchError } = await supabaseAdmin
        .from('partner_applications')
        .select('name, email')
        .eq('id', applicationId)
        .single();

      if (fetchError || !app) {
        return NextResponse.json({ error: 'Application not found' }, { status: 404 });
      }

      // Generate referral code
      const referralCode = generateReferralCode(app.name, app.email);

      // Update application status
      const { error: updateError } = await supabaseAdmin
        .from('partner_applications')
        .update({
          status: 'approved',
          referral_code: referralCode,
          approval_date: new Date().toISOString(),
          admin_notes: 'Approved and referral code generated'
        })
        .eq('id', applicationId);

      if (updateError) {
        return NextResponse.json({ error: 'Failed to update application' }, { status: 500 });
      }

      // TODO: Send approval email with referral code
      // await sendApprovalEmail(app.email, app.name, referralCode);

      return NextResponse.json({ 
        success: true, 
        referralCode,
        message: 'Application approved and referral code generated'
      });
    }

    if (action === 'reject') {
      const { error: updateError } = await supabaseAdmin
        .from('partner_applications')
        .update({
          status: 'rejected',
          admin_notes: reason || 'Application rejected',
          rejection_date: new Date().toISOString()
        })
        .eq('id', applicationId);

      if (updateError) {
        return NextResponse.json({ error: 'Failed to update application' }, { status: 500 });
      }

      // TODO: Send rejection email
      // await sendRejectionEmail(app.email, app.name, reason);

      return NextResponse.json({ 
        success: true,
        message: 'Application rejected'
      });
    }

    return NextResponse.json({ error: 'Invalid action' }, { status: 400 });

  } catch (error) {
    console.error('Admin action error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
