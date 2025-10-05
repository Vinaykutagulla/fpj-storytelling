import { NextRequest, NextResponse } from 'next/server';

// Capture ?ref=CODE and persist to cookie for later form prefill / attribution
export function middleware(req: NextRequest) {
  const url = req.nextUrl;
  const ref = url.searchParams.get('ref');
  if (ref) {
    const res = NextResponse.next();
    // Set cookie for 30 days
    res.cookies.set('fpj_ref', ref, { path: '/', maxAge: 60 * 60 * 24 * 30, sameSite: 'lax' });
    return res;
  }
  return NextResponse.next();
}

// Apply to all pages; could narrow with config.matcher if needed
export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico).*)']
};
