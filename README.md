# FPJ Storytelling

Production React single-page application deployed to Netlify.

## Local Dev
```
npm start
```
(Uses root script to enter subfolder.)

## Build
```
npm run build
```
Outputs to `fpj-storytelling/build`.

## Netlify Settings
- Branch: main
- Base directory: fpj-storytelling
- Build command: npm run build
- Publish directory: fpj-storytelling/build

`netlify.toml` (root) also sets:
- NODE_VERSION 18.20.3
- CI=false to avoid warning-failures
- Basic security headers
- SPA redirect

## Manual Deploy (fallback)
1. cd fpj-storytelling
2. npm install
3. npm run build
4. Drag `fpj-storytelling/build` into Netlify manual deploy.

## Contact Form
Form submissions appear under Netlify > Forms.

## Next Ideas
- Add Content-Security-Policy after auditing external assets.
- Add image optimization / code splitting if bundle grows.
