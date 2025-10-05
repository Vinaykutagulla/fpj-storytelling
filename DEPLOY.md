# Quick Deploy (Vercel)

Follow these minimal steps to get a real live URL.

## 1. Sign In / Create Account
Go to https://vercel.com and sign in with GitHub (recommended) or email.

## 2. Import Project
1. Click "Add New" → "Project".
2. Select the GitHub repository `Vinaykutagulla/fpj-storytelling` (if not yet on GitHub, push code first).
3. Root directory: leave default (repository root).
4. Build Command (override): `cd fpj-storytelling/next-app && npx next build`
5. Output Directory: `.next` (Vercel auto-detects; our vercel.json points at nested .next path).
6. Environment Variables (optional now): none required for static view.
7. Click Deploy.

## 3. Wait & Open
- Build finishes (few minutes first time).
- You receive a URL like: https://your-project-name.vercel.app

## 4. Set Production Domain (Optional)
- In the project settings → Domains → Add custom domain later if desired.

## Troubleshooting
| Issue | Fix |
|-------|-----|
| Cannot find next.config.js | Confirm root has `fpj-storytelling/next-app/next.config.js` |
| Build fails on admin API route | Non-critical; ensure diagnostics route not forced dynamic when exporting (we patched). |
| 404 on pages | Clean browser cache; ensure pages exist under `src/app/` |

## Alternative: Manual Deploy (Vercel CLI)
```
npm i -g vercel
vercel login
vercel --prod
```
Answer prompts:
- Set root directory? yes → `.`
- Build command? `cd fpj-storytelling/next-app && npx next build`
- Output dir? `.next`

Done: copy the provided URL.

---
Need help? Ask: "finish deploy for me" and list any errors you see.
