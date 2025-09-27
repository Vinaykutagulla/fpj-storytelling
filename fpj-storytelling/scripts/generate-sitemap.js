#!/usr/bin/env node
/* Simple sitemap generator. Adjust routes array as app grows. */
const fs = require('fs');
const path = require('path');

const BASE_URL = 'https://firstpharmajob.com';
const routes = ['/', '/about', '/services', '/contact'];

const utc = new Date().toISOString();

const xml = `<?xml version="1.0" encoding="UTF-8"?>\n` +
`<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n` +
routes.map(r => `  <url>\n    <loc>${BASE_URL}${r}</loc>\n    <lastmod>${utc}</lastmod>\n    <changefreq>weekly</changefreq>\n    <priority>${r === '/' ? '1.0' : '0.7'}</priority>\n  </url>`).join('\n') +
`\n</urlset>\n`;

const outPath = path.join(__dirname, '..', 'public', 'sitemap.xml');
fs.writeFileSync(outPath, xml, 'utf8');
console.log('Sitemap written to', outPath);
