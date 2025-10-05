import { NextResponse } from 'next/server';

// In static preview mode we allow this to be statically generated so that
// `next export` does not fail. Otherwise we keep it dynamic for live diagnostics.
// (The STATIC_PREVIEW env var is only set by PREVIEW_STATIC.ps1.)
export const dynamic = process.env.STATIC_PREVIEW ? undefined : 'force-dynamic';

export async function GET() {
  const hasSupabase = !!(process.env.SUPABASE_URL && process.env.SUPABASE_SERVICE_ROLE_KEY);
  return NextResponse.json({
    ok: true,
    mode: process.env.STATIC_PREVIEW ? 'static-preview' : 'runtime',
    runtime: 'edge-or-node',
    hasSupabase,
    env: {
      NEXT_PUBLIC_SITE_URL: process.env.NEXT_PUBLIC_SITE_URL ? 'set' : 'unset',
      ADMIN_BEARER_TOKEN: process.env.ADMIN_BEARER_TOKEN ? 'set' : 'unset'
    },
    timestamp: new Date().toISOString()
  });
}
