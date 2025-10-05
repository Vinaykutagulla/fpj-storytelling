# Startup Troubleshooting (Next.js App)

Use this guide if `npm run dev` or the site is not reachable on http://localhost:3000.

## Quick Commands
- Dev (direct): `npm run next:dev`
- Prod preview: `npm run next:start`
- Fresh build: `npm run next:build`
- Clear cache: `npm run clean:cache`
- Full rebuild: `npm run rebuild:fresh`
- Dependency reinstall: `npm run reinstall:next`
- Doctor info: `npm run doctor:next`

## Common Issues & Fixes
### 1. Port Shows Ready but Browser Fails to Connect
Symptom: Terminal logs `Ready ... http://localhost:3000` yet requests fail / nothing listens.
Fixes:
1. Kill stale listeners: `npx kill-port 3000 3001`
2. Bind host explicitly: `npm run next:dev -- -H 127.0.0.1 -p 3000`
3. Try alternate port: `npx next dev -H 127.0.0.1 -p 4000`
4. Disable VPN / firewall temporarily to test.

### 2. Dev Server Exits Instantly
Symptoms: Node process disappears; no errors printed.
Causes: PowerShell extension / integrated terminal auto-kill, mis-parented process after nested cd.
Fix: Use `DEV_START.ps1` script: `./DEV_START.ps1`.

### 3. Cache Corruption / Strange Build Artifacts
Fix: `npm run clean:cache` then `npm run next:dev`.
If still broken: `npm run rebuild:fresh`.

### 4. Dependency Mismatch
Run: `npm run doctor:next` to list versions. If React or Next not found, reinstall: `npm run reinstall:next`.

### 5. Watch Limit / Resource Constraints
On low-resource machines Node may silently exit.
Mitigation: Close other heavy processes; ensure at least 1GB free RAM.

### 6. Security Software Blocking Port
Temporarily disable or add allow rule for `node.exe`. Re-test with: `node -e "require('http').createServer(()=>{}).listen(3000)"`.

## Verification
After start, test:
`node -e "require('http').get('http://127.0.0.1:3000',r=>{console.log('Status',r.statusCode);r.resume();})"`

## Production Preview Flow
```
npm run next:build
npm run next:start
```
Visit: http://127.0.0.1:3000

## PowerShell Script
Use `DEV_START.ps1` for robust dev / prod start with options:
```
./DEV_START.ps1 -Port 4000 -ClearCache
./DEV_START.ps1 -Prod
```

## Still Stuck?
Collect:
- Output of `npm run doctor:next`
- First 40 lines of `.next/trace`
- Any Windows Event Viewer Application errors for node.exe
Then escalate / share logs.
