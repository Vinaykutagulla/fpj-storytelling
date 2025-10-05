#!/usr/bin/env node
/**
 * Minimal health check script.
 *
 * Goals:
 * 1. Verify public endpoints respond (/, /sitemap.xml, /robots.txt)
 * 2. Verify application API route responds with expected shape
 * 3. Support a --json flag for machine readable CI output
 * 4. Exit non-zero on any hard failure; soft-warn on optional checks
 * 5. Fast (<2s) and dependency-light (Node fetch)
 */

const endpoints = [
  { path: '/', expect: 200, type: 'page' },
  { path: '/sitemap.xml', expect: 200, type: 'sitemap', mustInclude: '<urlset' },
  { path: '/robots.txt', expect: 200, type: 'robots', mustInclude: 'User-agent' },
  { path: '/api/partner-applications', method: 'GET', expect: 200, type: 'api-list' }
];

const API_POST_SAMPLE = {
  name: 'Health Bot',
  email: 'health-bot@example.com',
  university: 'HealthCheckU',
  message: 'Automated probe',
  referral: 'health',
  website: '' // honeypot empty
};

const baseURL = process.env.HEALTHCHECK_BASE_URL || 'http://localhost:3000';
const timeoutMs = Number(process.env.HEALTHCHECK_TIMEOUT || 5000);
const doPostProbe = process.env.HEALTHCHECK_POST !== 'false';
const jsonMode = process.argv.includes('--json');

function timeout(ms) { return new Promise((_, r) => setTimeout(() => r(new Error('Timeout')), ms)); }

async function fetchWithTimeout(url, opts) {
  return Promise.race([
    fetch(url, opts),
    timeout(timeoutMs)
  ]);
}

async function checkEndpoint(ep) {
  const method = ep.method || 'GET';
  const url = baseURL.replace(/\/$/, '') + ep.path;
  const started = Date.now();
  try {
    const res = await fetchWithTimeout(url, { method, headers: { 'User-Agent': 'fpj-healthcheck/1.0' } });
    const duration = Date.now() - started;
    const bodyText = await res.text();
    const ok = res.status === ep.expect && (!ep.mustInclude || bodyText.includes(ep.mustInclude));
    return { path: ep.path, type: ep.type, status: res.status, ok, duration, note: ok ? undefined : 'Unexpected status or content snippet missing' };
  } catch (e) {
    return { path: ep.path, type: ep.type, status: 0, ok: false, duration: Date.now() - started, error: e.message };
  }
}

async function postProbe() {
  const url = baseURL.replace(/\/$/, '') + '/api/partner-applications';
  const started = Date.now();
  try {
    const res = await fetchWithTimeout(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'User-Agent': 'fpj-healthcheck/1.0' },
      body: JSON.stringify(API_POST_SAMPLE)
    });
    const duration = Date.now() - started;
    let json = null;
    try { json = await res.json(); } catch {}
    const ok = res.status === 200 && json && typeof json.id !== 'undefined';
    return { path: '/api/partner-applications (POST)', type: 'api-create', status: res.status, ok, duration, note: ok ? undefined : 'Unexpected response shape' };
  } catch (e) {
    return { path: '/api/partner-applications (POST)', type: 'api-create', status: 0, ok: false, duration: Date.now() - started, error: e.message };
  }
}

(async () => {
  const results = [];
  for (const ep of endpoints) {
    results.push(await checkEndpoint(ep));
  }
  if (doPostProbe) {
    results.push(await postProbe());
  }

  const hardFails = results.filter(r => !r.ok);

  if (jsonMode) {
    console.log(JSON.stringify({ baseURL, results, passed: hardFails.length === 0 }, null, 2));
  } else {
    console.log(`Health Check @ ${baseURL}`);
    for (const r of results) {
      const statusTxt = r.ok ? 'OK' : 'FAIL';
      console.log(`${statusTxt.padEnd(4)} ${r.type.padEnd(12)} ${r.path.padEnd(40)} ${String(r.status).padEnd(4)} ${r.duration}ms${r.note ? ' - ' + r.note : ''}${r.error ? ' - ' + r.error : ''}`);
    }
    console.log(`Summary: ${results.length - hardFails.length}/${results.length} passed`);
  }

  process.exit(hardFails.length === 0 ? 0 : 1);
})();
