<#!
VIEW_LOCAL.ps1

Goal: Let you see the FULL website at http://127.0.0.1:<port> with one double‑click.
It tries development mode first. If that process exits immediately (your earlier problem),
it falls back to a production build + start. Then it opens your browser.

Usage (default port 3000):
  powershell -ExecutionPolicy Bypass -File .\VIEW_LOCAL.ps1
Custom port (e.g. 4000):
  powershell -ExecutionPolicy Bypass -File .\VIEW_LOCAL.ps1 -Port 4000
Force prod directly:
  powershell -ExecutionPolicy Bypass -File .\VIEW_LOCAL.ps1 -Prod
#>
param(
  [int]$Port = 3000,
  [switch]$Prod,
  [string]$BindHost = '127.0.0.1'
)

$ErrorActionPreference = 'Stop'
$root = Split-Path -Parent $MyInvocation.MyCommand.Path
$nextApp = Join-Path $root 'fpj-storytelling/next-app'
Write-Host "[VIEW] Root: $root" -ForegroundColor Cyan
Write-Host "[VIEW] Next app dir: $nextApp" -ForegroundColor Cyan

if (!(Test-Path $nextApp)) { throw "Cannot find next-app folder at $nextApp" }
Push-Location $nextApp

if (!(Test-Path 'node_modules')) { Write-Host '[VIEW] Installing dependencies...' -ForegroundColor Yellow; npm install }

# Kill port if occupied
try { npx kill-port $Port | Out-Null } catch { }

function Wait-ForServer($Url, [int]$Attempts = 30) {
  for ($i=1; $i -le $Attempts; $i++) {
    try {
      $resp = Invoke-WebRequest -Uri $Url -UseBasicParsing -TimeoutSec 2 -ErrorAction Stop
      if ($resp.StatusCode -ge 200 -and $resp.StatusCode -lt 500) { return $true }
    } catch { }
    Start-Sleep -Milliseconds 750
  }
  return $false
}

function Start-Dev() {
  Write-Host "[VIEW] Starting DEV server on http://$BindHost:$Port" -ForegroundColor Green
  $env:HOST = $BindHost; $env:PORT = $Port
  $ps = Start-Process -FilePath "powershell" -ArgumentList @('-NoLogo','-NoProfile','-Command', "cd `"$nextApp`"; npx next dev -H $BindHost -p $Port") -PassThru -WindowStyle Normal
  return $ps
}

function Start-Prod() {
  Write-Host '[VIEW] Building production bundle...' -ForegroundColor Yellow
  npx next build
  Write-Host "[VIEW] Starting PROD server on http://$BindHost:$Port" -ForegroundColor Green
  $env:HOST = $BindHost; $env:PORT = $Port
  $ps = Start-Process -FilePath "powershell" -ArgumentList @('-NoLogo','-NoProfile','-Command', "cd `"$nextApp`"; npx next start -H $BindHost -p $Port") -PassThru -WindowStyle Normal
  return $ps
}

$baseUrl = "http://$BindHost:$Port"

if ($Prod) {
  $proc = Start-Prod
  if (Wait-ForServer "$baseUrl") { goto OpenBrowser }
  Write-Warning '[VIEW] Production server did not respond in time.'
  goto Done
}

$devProc = Start-Dev
Write-Host '[VIEW] Waiting for dev server...' -ForegroundColor DarkCyan

if (!(Wait-ForServer "$baseUrl")) {
  Write-Warning '[VIEW] Dev server not detected. Falling back to production build.'
  try { if ($devProc -and !$devProc.HasExited) { $devProc.Kill() } } catch { }
  $prodProc = Start-Prod
  if (!(Wait-ForServer "$baseUrl")) {
    Write-Error 'Neither dev nor prod server responded. Aborting.'
    goto Done
  }
}

:OpenBrowser
Write-Host "[VIEW] Opening browser..." -ForegroundColor Green
Start-Process $baseUrl
Start-Sleep -Milliseconds 600
Start-Process "$baseUrl/journey"
Start-Sleep -Milliseconds 600
Start-Process "$baseUrl/services"
Write-Host '[VIEW] Home, Journey, Services opened.' -ForegroundColor Green

:Done
Pop-Location
