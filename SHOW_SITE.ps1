<#!
SHOW_SITE.ps1
Opens every static pre-rendered page directly in your browser (file URLs) without any server.
#>
$ErrorActionPreference = 'Stop'
$root = Split-Path -Parent $MyInvocation.MyCommand.Path
$base = Join-Path $root 'fpj-storytelling/next-app/.next/server/app'
if (!(Test-Path $base)) { Write-Error "Static directory missing. Run PREVIEW_STATIC.ps1 first." }

$pages = @(
  'index.html',
  'journey/journey.html',
  'about/about.html',
  'services/services.html',
  'contact/contact.html',
  'student-partner/student-partner.html'
)

Write-Host "Opening pages..." -ForegroundColor Cyan
foreach ($p in $pages) {
  $full = Join-Path $base $p
  if (Test-Path $full) {
    Write-Host " -> $p" -ForegroundColor Green
    Start-Process $full
    Start-Sleep -Milliseconds 450
  } else {
    Write-Warning "Missing: $p"
  }
}

Write-Host 'Done. If a page shows blank styling, that is because relative asset paths are resolved differently without a server.' -ForegroundColor Yellow
