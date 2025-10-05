# Migration Notice

The legacy Create React App implementation in `fpj-storytelling/` (outside of `next-app/`) has been archived. The active codebase is **`fpj-storytelling/next-app/`** (Next.js 14 App Router + TypeScript).

## What Changed
- All development scripts now point exclusively to Next.js (`npm run dev`, `npm run build`, `npm start`).
- The old CRA start script was removed to prevent accidental launches.
- `README.md` inside the legacy directory now contains an archive banner.

## Safe Removal
After you confirm no assets (images/audio not already copied) are only present in the legacy tree, you can remove the deprecated files:
```
rm -rf fpj-storytelling/node_modules
rm -rf fpj-storytelling/src
rm -rf fpj-storytelling/public
rm -rf fpj-storytelling/build
rm fpj-storytelling/package.json
```
(Adapt commands for PowerShell: use `Remove-Item -Recurse -Force`.) Keep `next-app/`.

## Verify You Are on Next.js
1. Run `npm run dev` from repo root.
2. Open http://localhost:3000/diagnostics → JSON response.
3. Navigation shows: Home | About | Services | Contact | Student Partner.

If all above are true, production deployment should be done from `next-app`.

## Next Steps
- Deploy to Vercel (set required env vars from `.env.example`).
- Run DB migration: `next-app/migrations/20251002_add_extended_fields.sql` in Supabase.
- Test application submission on `/student-partner`.

-- End of Notice
