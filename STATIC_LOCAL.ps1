<#!
STATIC_LOCAL.ps1
Serve the already-built Next.js static HTML (from .next/server/app) on http://127.0.0.1:3000 without running the Next dev runtime.
This helps when dev / prod Next servers exit immediately.
#>
param(
  [int]$Port = 3000,
  [string]$BindHost = '127.0.0.1',
  [switch]$VerboseLog,
  [switch]$TryAll
)

$ErrorActionPreference = 'Stop'
$root = Split-Path -Parent $MyInvocation.MyCommand.Path
$nextApp = Join-Path $root 'fpj-storytelling/next-app'
$staticDir = Join-Path $nextApp '.next/server/app'

if (!(Test-Path $staticDir)) { Write-Error "Static directory not found: $staticDir. Run PREVIEW_STATIC.ps1 first." }

Write-Host "[STATIC] Static dir: $staticDir" -ForegroundColor Cyan
Write-Host "[STATIC] Target: http://$BindHost:$Port" -ForegroundColor Cyan
Write-Host "[STATIC] Press Ctrl+C to stop." -ForegroundColor DarkGray

Add-Type -AssemblyName System.Net.Http
Add-Type -AssemblyName System.Web

$listener = New-Object System.Net.HttpListener

function Start-Listener($host,$port) {
  $prefix = "http://$host:$port/"
  $listener.Prefixes.Clear()
  $listener.Prefixes.Add($prefix)
  try {
    $listener.Start()
    Write-Host "[STATIC] Listening on $prefix" -ForegroundColor Green
    return $true
  } catch {
    Write-Warning "[STATIC] Failed binding $prefix : $_"
    return $false
  }
}

if (-not (Start-Listener $BindHost $Port)) {
  if ($BindHost -ne '0.0.0.0') {
    Write-Host '[STATIC] Retrying on 0.0.0.0 (all interfaces)...' -ForegroundColor Yellow
    if (-not (Start-Listener '0.0.0.0' $Port)) {
      Write-Error 'Could not bind on specified host nor 0.0.0.0. Exiting.'
    }
  } else {
    Write-Error 'Could not bind on 0.0.0.0. Exiting.'
  }
}

if ($VerboseLog) {
  Write-Host '[STATIC] Verbose logging enabled.' -ForegroundColor DarkCyan
}

# Auto open main pages after a brief delay (non-blocking)
Start-Job -ScriptBlock {
  Start-Sleep -Milliseconds 900
  $base = 'http://127.0.0.1:3000'
  foreach ($p in @('/', '/journey', '/services')) { try { Start-Process ($base + $p) } catch {} ; Start-Sleep -Milliseconds 350 }
} | Out-Null

function Get-ContentType($path) {
  switch -Regex ($path) {
    '\\.html$' { return 'text/html; charset=utf-8' }
    '\\.css$'  { return 'text/css' }
    '\\.js$'   { return 'application/javascript' }
    '\\.svg$'  { return 'image/svg+xml' }
    '\\.png$'  { return 'image/png' }
    '\\.jpg$'  { return 'image/jpeg' }
    '\\.jpeg$' { return 'image/jpeg' }
    '\\.ico$'  { return 'image/x-icon' }
    '\\.json$' { return 'application/json' }
    default     { return 'application/octet-stream' }
  }
}

# Map clean routes -> underlying html file
function Resolve-PathForRequest($rawPath) {
  if ([string]::IsNullOrWhiteSpace($rawPath) -or $rawPath -eq '/') { return Join-Path $staticDir 'index.html' }
  $trim = $rawPath.TrimStart('/')
  # Remove any query string part handled later by ignoring
  if ($trim.Contains('?')) { $trim = $trim.Split('?')[0] }

  # If request ends with '/', map to folder/index.html pattern not used here => fallback
  # Known pages with their html names (page.html pattern):
  $candidateHtml = Join-Path $staticDir ($trim + '.html')
  if (Test-Path $candidateHtml) { return $candidateHtml }

  # Journey subfolder is journey/journey.html pattern
  if (Test-Path (Join-Path (Join-Path $staticDir $trim) ($trim.Split('/')[-1] + '.html'))) {
    return Join-Path (Join-Path $staticDir $trim) ($trim.Split('/')[-1] + '.html')
  }

  # If folder exists with same name and contains <folder>.html
  $folder = Join-Path $staticDir $trim
  if (Test-Path $folder) {
    $leaf = Split-Path $folder -Leaf
    $leafHtml = Join-Path $folder ($leaf + '.html')
    if (Test-Path $leafHtml) { return $leafHtml }
  }

  return $null
}

while ($true) {
  try {
    $ctx = $listener.GetContext()
    $req = $ctx.Request
    $res = $ctx.Response
    $path = $req.Url.AbsolutePath

    if ($VerboseLog) { Write-Host "[REQ] $($req.HttpMethod) $path" -ForegroundColor DarkGray }

    $filePath = Resolve-PathForRequest $path

    if (-not $filePath) {
      $res.StatusCode = 404
      $bytes = [System.Text.Encoding]::UTF8.GetBytes('<h1>404</h1>')
      $res.OutputStream.Write($bytes,0,$bytes.Length)
      $res.Close()
      continue
    }

    try {
      $bytes = [System.IO.File]::ReadAllBytes($filePath)
      $res.StatusCode = 200
      $res.ContentType = Get-ContentType $filePath
      $res.ContentLength64 = $bytes.Length
      $res.OutputStream.Write($bytes,0,$bytes.Length)
      if ($VerboseLog) { Write-Host "[200] $filePath ($($bytes.Length) bytes)" -ForegroundColor Green }
    } catch {
      $res.StatusCode = 500
      $errBytes = [System.Text.Encoding]::UTF8.GetBytes('<h1>500</h1>')
      $res.OutputStream.Write($errBytes,0,$errBytes.Length)
      if ($VerboseLog) { Write-Warning "[500] $filePath $_" }
    } finally {
      $res.Close()
    }
  } catch {
    if ($VerboseLog) { Write-Warning $_ }
    Start-Sleep -Milliseconds 200
  }
}
