<#!
OFFLINE_BUILD.ps1
Builds an offline single-file style bundle (no server) combining key pages into one HTML with client-side navigation.
#>
$ErrorActionPreference = 'Stop'
$root = Split-Path -Parent $MyInvocation.MyCommand.Path
$nextApp = Join-Path $root 'fpj-storytelling/next-app'
if (!(Test-Path $nextApp)) { Write-Error "Cannot find next-app at $nextApp" }
Push-Location $nextApp

Write-Host '[OFFLINE] Building Next production output...' -ForegroundColor Cyan
if (!(Test-Path 'node_modules')) { npm install }
npx next build | Out-Null

$serverApp = Join-Path $nextApp '.next/server/app'
if (!(Test-Path $serverApp)) { Write-Error 'Expected build output missing (.next/server/app)' }

$pages = @(
  @{ key='home'; file='index.html' },
  @{ key='about'; file='about.html' },
  @{ key='services'; file='services.html' },
  @{ key='contact'; file='contact.html' },
  @{ key='student-partner'; file='student-partner.html' }
)

$templates = @()
$homeBody = ''
foreach ($p in $pages) {
  $full = Join-Path $serverApp $p.file
  if (!(Test-Path $full)) { Write-Warning "[OFFLINE] Missing page file: $($p.file)"; continue }
  $raw = Get-Content -Raw $full
  # Prefer extracting the <main> content for a clean offline render; fallback to full <body>
  $mMain = [regex]::Match($raw,'<main[\s\S]*?>([\s\S]*?)</main>','IgnoreCase')
  if ($mMain.Success) {
    $body = $mMain.Groups[1].Value
  } else {
    $mBody = [regex]::Match($raw,'<body[^>]*>([\s\S]*?)</body>','IgnoreCase')
    if (!$mBody.Success) { Write-Warning "[OFFLINE] Could not extract content for $($p.key)"; continue }
    $body = $mBody.Groups[1].Value
  }
  # Strip any runtime scripts/links embedded in the pre-rendered fragment
  $body = [regex]::Replace($body,'<script[\s\S]*?</script>','', 'IgnoreCase')
  $body = [regex]::Replace($body,'<link[^>]*?>','', 'IgnoreCase')
  # Basic path fix for root-relative asset src attributes
  $body = $body -replace 'src="/','src="./'
  # Convert internal anchors to hash to keep navigation inside the offline bundle
  $body = $body -replace 'href="/','href="#'
  $templates += ('<template id="tpl-{0}">{1}</template>' -f $($p.key), $body)
  if ($p.key -eq 'home') { $homeBody = $body }
}

$outDir = Join-Path $root 'offline-bundle'
if (Test-Path $outDir) { Remove-Item -Recurse -Force $outDir }
New-Item -ItemType Directory -Path $outDir | Out-Null

# Inline multiple CSS files to improve visual fidelity across pages
$cssContent = ''
$cssFiles = @()
if (Test-Path '.next/static/css') { $cssFiles += (Get-ChildItem -Path '.next/static/css' -Recurse -Filter '*.css' | Select-Object -First 5) }
if (Test-Path '.next/static/chunks') { $cssFiles += (Get-ChildItem -Path '.next/static/chunks' -Recurse -Filter '*.css' | Select-Object -First 5) }
foreach ($cf in $cssFiles) {
  try {
    $cssContent += "`n/* " + $cf.Name + " */`n" + (Get-Content -Raw $cf.FullName)
  } catch {
    # ignore
  }
}

# Build index.html
$indexPath = Join-Path $outDir 'index.html'
$nav = @'
<nav class="nav-bar">
  <button data-page="home">Home</button>
  <button data-page="about">About</button>
  <button data-page="services">Services</button>
  <button data-page="contact">Contact</button>
  <button data-page="student-partner">Student Partner</button>
</nav>
'@

$html = @"
<!DOCTYPE html>
<html lang=\"en\">
<head>
<meta charset=\"UTF-8\" />
<title>FPJ Offline Bundle</title>
<meta name=\"viewport\" content=\"width=device-width,initial-scale=1\" />
<style>
body { margin:0; font-family: system-ui,Segoe UI,Arial,sans-serif; background:#0d1117; color:#e6e6e6; }
.nav-bar { display:flex; flex-wrap:wrap; gap:.5rem; padding:.75rem 1rem; background:#161b22; position:sticky; top:0; z-index:50; }
.nav-bar button { background:#262f39; border:1px solid #303b46; color:#cfd9e3; cursor:pointer; padding:.45rem .9rem; border-radius:6px; font-size:.85rem; }
.nav-bar button:hover { background:#303b46; }
#app { padding:0; }
.fade-enter { opacity:0; transform:translateY(6px); }
.fade-enter-active { transition:all .28s ease; opacity:1; transform:translateY(0); }
/* Force show content extracted from pre-render (bypass initial animation hidden states) */
.force-visible, .force-visible * { opacity: 1 !important; transform: none !important; }
$cssContent
</style>
</head>
<body>
$nav
<div id=\"app\">$homeBody</div>
<!-- Page Templates -->
$([string]::Join("`n",$templates))
<script>
window.addEventListener('DOMContentLoaded', function(){
  const app = document.getElementById('app');
  function show(pg){
    const tpl = document.getElementById('tpl-'+pg);
    if(!tpl){ app.innerHTML = '<h2 style=\\'padding:2rem\\'>Missing page</h2>'; return; }
    const frag = tpl.innerHTML;
  const wrap = document.createElement('div');
  wrap.className='fade-enter force-visible';
    wrap.innerHTML = frag;
    app.innerHTML='';
    app.appendChild(wrap);
    requestAnimationFrame(()=> wrap.classList.add('fade-enter-active'));
    location.hash = pg;
    highlight(pg);
  }
  function highlight(pg){
    document.querySelectorAll('nav button').forEach(b=>{ b.style.outline = b.dataset.page===pg? '2px solid #58a6ff':'none'; });
  }
  function routeFromPath(path){
    if(!path || path==='/' ) return 'home';
    const clean = path.replace(/^\/+|\/+$/g,'');
    const map = { 'about':'about','services':'services','contact':'contact','student-partner':'student-partner' };
    return map[clean] || 'home';
  }
  // Intercept internal links like /journey so we stay inside the offline preview
  document.addEventListener('click', (e)=>{
    const a = e.target.closest('a');
    if(!a) return;
    const href = a.getAttribute('href')||'';
    if(href.startsWith('#')){
      const pg = href.replace('#','');
      if(pg){ e.preventDefault(); show(pg); }
    } else if(/^\//.test(href)){
      e.preventDefault();
      const pg = routeFromPath(href);
      show(pg);
    }
  }, true);
  document.querySelectorAll('nav button').forEach(btn=>{
    btn.addEventListener('click', ()=> show(btn.dataset.page));
  });
  const firstHash = (location.hash||'').replace('#','');
  if(firstHash){
    show(firstHash);
  } else {
    // initial Home content already injected; just highlight nav
    highlight('home');
  }
});
</script>
</body>
</html>
"@

Set-Content -Path $indexPath -Value $html -Encoding UTF8
Write-Host "[OFFLINE] Created offline bundle at $indexPath" -ForegroundColor Green
Pop-Location
