# FPJ Next.js App (Storytelling + Student Partner Onboarding)

This directory contains the production Next.js (App Router, TypeScript) implementation for FirstPharmaJob, including the refactored Student Partner earning-focused onboarding funnel.

## Stack
- Next.js 14
- React 18
- TypeScript
- Tailwind CSS (dark mode via class)

## Scripts
```
npm install
npm run dev
npm run build
```

## Structure
```
next-app/
  src/app/
    layout.tsx    # Root layout with Theme + Navigation + Footer
    page.tsx      # Placeholder home page
  src/components/ # LogoMark, Navigation, ThemeProvider, Footer
  src/lib/        # inline theme script
  src/styles/     # globals.css with variables and Tailwind base
```

## Progress Overview

Completed (Core):
1. Scaffold (layout, theming, Tailwind, dark mode)
2. Storytelling experience on `/`
3. Student Partner onboarding page (hero, icon benefits, levels with payouts, steps, enhanced form, FAQ accordion, footer CTA)
4. Earnings estimator & motivation word tracker (client-side UX)
5. Referral capture middleware (`?ref=code` -> cookie) – retained (currently not auto-populating form)
6. Partner application API (POST + GET metrics) with in-memory fallback and optional Supabase persistence
7. Extended fields: phone, course, instagram, linkedin
8. Security: honeypot, basic IP rate limiting, admin bearer endpoint
9. Logging & metrics instrumentation
10. SEO: sitemap, robots, structured data (FAQ JSON-LD planned), canonical handling
11. Automated healthcheck script
12. ESLint configuration & type-safe build

Pending / Optional Enhancements:
- Deployment cutover & DNS (Vercel)
- Referral attribution events + ledger (payout tracking)
- Partner codes issuance & dashboard
- Email notifications (acceptance / moderation)
- Analytics & gamification (badges, tiers progression charts)
- Framer Motion advanced transitions

## Referral Tracking (Current State)
Edge middleware (`middleware.ts`) stores `?ref=CODE` in a `fpj_ref` cookie (30 days). The current onboarding form does not auto-insert it yet—future enhancement: display and confirm referral at submission time.

## Partner Applications API
Endpoint: `POST /api/partner-applications`

Request JSON body example:
```json
{
  "name": "Jane Doe",
  "email": "jane@example.com",
  "institution": "XYZ College of Pharmacy",
  "year": "3rd Year B.Pharm",
  "motivation": "(>= 40 chars) I have organized study groups and want to help peers understand clinical development.",
  "referrals": "PharmaSoc club",
  "referralCode": "campusA01"
}
```

Response (success):
```json
{ "ok": true, "id": "<uuid>" }
```

Response (validation error):
```json
{ "error": "Missing field: name" }
```

Temporary Storage: In-memory array (lost on redeploy) if Supabase env vars are not configured.

Additional Accepted Fields (optional):
```
phone, course, instagram, linkedin
```
These are persisted when Supabase is active.

## Database Schema (Supabase)
Table: `partner_applications`

| Column        | Type        | Notes |
|---------------|-------------|-------|
| id            | uuid (pk)   | default gen_random_uuid() |
| name          | text        | not null |
| email         | text        | index (optional uniqueness) |
| institution   | text        |  |
| year          | text        |  |
| motivation    | text        |  |
| referrals     | text        | nullable |
| referral_code | text        | index for attribution |
| phone         | text        | nullable |
| course        | text        | nullable |
| instagram     | text        | nullable |
| linkedin      | text        | nullable |
| created_at    | timestamptz | default now() |

Migration script: `migrations/20251002_add_extended_fields.sql`

Add RLS policies only if exposing SELECT to client queries (not required now).

## Environment Variables
Example file: `.env.example`

Required for persistence:
```
SUPABASE_URL=
SUPABASE_SERVICE_ROLE_KEY=
```

Admin endpoint security:
```
ADMIN_BEARER_TOKEN=
```

Optional / operational:
```
NEXT_PUBLIC_SITE_URL=
NEXT_TELEMETRY_DISABLED=1
HEALTHCHECK_BASE_URL=
HEALTHCHECK_TIMEOUT=7000
HEALTHCHECK_POST=false
```

## Deployment Checklist (Vercel)
1. Create new Vercel project targeting `next-app` directory or deploy from root pointing to `next-app`.
2. Add environment variables (Production + Preview) as per `.env.example`.
3. Run SQL migration in Supabase: `migrations/20251002_add_extended_fields.sql`.
4. Trigger build (Vercel auto-detects Next.js) – verify build output has no errors.
5. Visit preview URL: verify `/`, `/student-partner`, `/api/partner-applications` (GET returns metrics), `/sitemap.xml`, `/robots.txt`.
6. Submit a real form (with `HEALTHCHECK_POST=false` locally if you want to avoid synthetic noise) – confirm row in Supabase.
7. Add custom domain and assign to production environment.
8. Re-run local healthcheck pointing to production: `npm run health -- --json` with `HEALTHCHECK_BASE_URL=https://your-domain`.
9. Test Rich Results (FAQ) via Google Rich Results Test once FAQ JSON-LD added.
10. Monitor logs & metrics for first 24h (rate limiting & spam counters).

## Future Enhancements
- Referral ledger & payout scheduling
- Code issuance & partner dashboards
- Email notifications (application received / accepted)
- Recaptcha/hCaptcha (scale-triggered)
- Event ingestion + analytics dashboard
- Gamification (badges, tier progression progress bars)
- OpenTelemetry tracing + centralized log shipping

## Health Check
Automated script to verify core endpoints and the application API route.

Run locally against dev (ensure `npm run dev` or `npm start` in production build):
```
npm run health
```

Environment variables (optional):
```
HEALTHCHECK_BASE_URL=https://your-deployed-domain
HEALTHCHECK_TIMEOUT=7000
HEALTHCHECK_POST=false   # Skip POST probe if you don't want synthetic submissions
```

Machine readable output:
```
npm run health -- --json
```

Exit codes:
- 0: All mandatory checks passed
- 1: One or more mandatory checks failed
## Running
From repo root:
```
cd next-app
npm install
npm run dev
```
Visit http://localhost:3000

## Deployment
Will target Vercel (recommended) once core pages and partner program are ready.
