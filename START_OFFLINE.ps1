<#!
START_OFFLINE.ps1
Runs the offline bundle creator then opens the offline index.
#>
$ErrorActionPreference = 'Stop'
$root = Split-Path -Parent $MyInvocation.MyCommand.Path
$offlineBuild = Join-Path $root 'OFFLINE_BUILD.ps1'
if (!(Test-Path $offlineBuild)) { Write-Error 'Missing OFFLINE_BUILD.ps1' }

Write-Host '[OFFLINE] Generating bundle...' -ForegroundColor Cyan
powershell -ExecutionPolicy Bypass -File $offlineBuild

$index = Join-Path $root 'offline-bundle/index.html'
if (Test-Path $index) {
  Write-Host '[OFFLINE] Opening offline site...' -ForegroundColor Green
  Start-Process $index
} else {
  Write-Error 'Offline index not created.'
}
