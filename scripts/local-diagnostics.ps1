<#!
.SYNOPSIS
  Collects local Next.js dev environment diagnostics (port, process, /diagnostics response, basic HTTP headers) to help debug visibility issues.

.DESCRIPTION
  Run this while the dev server (npm run dev) is active in another terminal. The script will:
    1. Detect listening node processes on common Next.js ports (3000-3005)
    2. Query each candidate: GET /diagnostics (if exists) and root /
    3. Summarize response status codes and key headers
    4. Attempt to identify if content looks like legacy CRA (index.html with <div id="root">) vs Next.js (app router markup)
    5. Emit a final summary block you can paste back to your assistant

.NOTES
  PowerShell 5.1 compatible. Uses only built-in commands.

.EXAMPLE
  powershell -ExecutionPolicy Bypass -File scripts/local-diagnostics.ps1
#>

$ErrorActionPreference = 'SilentlyContinue'
Write-Host '== FPJ Local Diagnostics =='

# Candidate ports
$ports = 3000..3005

$findings = @()
foreach ($p in $ports) {
  $net = netstat -ano | Select-String ":$p" | Select-Object -First 1
  if (-not $net) { continue }
  $pid = ($net.ToString() -split '\s+')[-1]
  $task = (tasklist | Select-String $pid | Select-Object -First 1)
  $isNode = $false
  if ($task -and $task.ToString().ToLower().Contains('node')) { $isNode = $true }

  $diagUrl = "http://localhost:$p/diagnostics"
  $rootUrl = "http://localhost:$p/"
  $diagResp = $null
  $rootResp = $null
  try { $diagResp = Invoke-WebRequest -Uri $diagUrl -UseBasicParsing -TimeoutSec 5 } catch {}
  try { $rootResp = Invoke-WebRequest -Uri $rootUrl -UseBasicParsing -TimeoutSec 5 } catch {}

  $contentSample = ''
  if ($rootResp -and $rootResp.Content) { $contentSample = $rootResp.Content.Substring(0, [Math]::Min(400, $rootResp.Content.Length)) }

  $mode = if ($contentSample -match '<div id="root"') { 'Possibly CRA legacy' } elseif ($contentSample -match '__NEXT_DATA__') { 'Next.js (pages router)' } elseif ($contentSample -match '<html' -and $contentSample -match 'next-data') { 'Next.js (app router)' } else { 'Unknown/blank' }

  $findings += [PSCustomObject]@{
    Port = $p
    NodeProcess = $isNode
    PID = $pid
    DiagnosticsStatus = if ($diagResp) { $diagResp.StatusCode } else { 'n/a' }
    RootStatus = if ($rootResp) { $rootResp.StatusCode } else { 'n/a' }
    ModeGuess = $mode
  }
}

if (-not $findings) {
  Write-Host 'No listening ports 3000-3005 found. Start dev server with: npm run dev' -ForegroundColor Yellow
  exit 1
}

Write-Host '\n-- Summary Table --'
$findings | Format-Table -AutoSize

Write-Host '\n-- Raw Details --'
$findings | ConvertTo-Json -Depth 3

Write-Host '\nCopy the JSON above and send it back if you need more help.'
Write-Host '== End =='
