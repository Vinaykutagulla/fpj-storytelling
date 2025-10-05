import { NextResponse } from 'next/server';

// Minimal placeholder metrics (extend with real shared module if needed)
// Since partner-applications metrics live inside that module, this endpoint can evolve later to aggregate.

export async function GET() {
  return NextResponse.json({ ok: true, note: 'Extend this endpoint by importing counters from feature modules.' });
}
