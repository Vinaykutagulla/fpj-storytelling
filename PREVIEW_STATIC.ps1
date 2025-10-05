<#!
Creates a static preview (no server needed) you can open in your browser.
Result folder: fpj-storytelling/next-app/out
#>
$ErrorActionPreference = 'Stop'
$root = Split-Path -Parent $MyInvocation.MyCommand.Path
$nextApp = Join-Path $root 'fpj-storytelling/next-app'
Write-Host "[FPJ] Static preview build starting..." -ForegroundColor Cyan
Push-Location $nextApp
$env:STATIC_PREVIEW = '1'
if(!(Test-Path 'node_modules')) { Write-Host '[FPJ] Installing dependencies...' -ForegroundColor Yellow; npm install }
Write-Host '[FPJ] Running next build (export mode)...' -ForegroundColor Green
npx next build
Write-Host '[FPJ] Exporting...' -ForegroundColor Green
npx next export
Pop-Location
Write-Host "[FPJ] Done. Open this file in your browser:" -ForegroundColor Cyan
Write-Host "     $nextApp/out/index.html" -ForegroundColor Yellow
Write-Host "     And for journey page: $nextApp/out/journey/index.html" -ForegroundColor Yellow
