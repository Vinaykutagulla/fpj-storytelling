<#!
FPJ Storytelling Unified Start Script

Usage examples:
  ./DEV_START.ps1              # start next-app on default port 3000
  ./DEV_START.ps1 -Port 4000   # custom port
  ./DEV_START.ps1 -Prod        # build (if needed) then start production server
  ./DEV_START.ps1 -ClearCache  # wipe .next cache before starting

This script adds reliability vs nested npm run cd chains.
#>
param(
  [int]$Port = 3000,
  [switch]$Prod,
  [switch]$ClearCache,
  [string]$BindHost = '127.0.0.1'
)

$ErrorActionPreference = 'Stop'
$root = Split-Path -Parent $MyInvocation.MyCommand.Path
$nextApp = Join-Path $root 'fpj-storytelling/next-app'
Write-Host "[FPJ] Root: $root" -ForegroundColor Cyan
Write-Host "[FPJ] Next app: $nextApp" -ForegroundColor Cyan

if (!(Test-Path $nextApp)) {
  Write-Error "Cannot locate next-app folder at $nextApp"
}

Push-Location $nextApp

if ($ClearCache) {
  if (Test-Path '.next') { Write-Host '[FPJ] Clearing .next cache...' -ForegroundColor Yellow; Remove-Item -Recurse -Force '.next' }
}

if (!(Test-Path 'node_modules')) {
  Write-Host '[FPJ] Installing dependencies (missing node_modules)...' -ForegroundColor Yellow
  npm install
}

# Kill any existing process on desired port
try {
  npx kill-port $Port | Out-Null
} catch { }

$mode = if ($Prod) { 'production (next start)' } else { 'development (next dev)' }
# Escape colon to avoid variable parsing ambiguity in some shells
Write-Host ("[FPJ] Launching {0} on http://{1}:{2}" -f $mode,$BindHost,$Port) -ForegroundColor Green

# Start process
if ($Prod) {
  if (!(Test-Path '.next')) { Write-Host '[FPJ] No build found. Running next build first...' -ForegroundColor Yellow; npx next build }
  $env:HOST = $BindHost
  $env:PORT = $Port
  npx next start -H $BindHost -p $Port
} else {
  $env:HOST = $BindHost
  $env:PORT = $Port
  npx next dev -H $BindHost -p $Port
}

Pop-Location
