Set-Location "C:\Users\lenovo\Documents\fpj-storytelling\fpj-storytelling"
Write-Host "Current directory: $(Get-Location)"
Write-Host "Package.json exists: $(Test-Path package.json)"
Write-Host "Starting React development server..."
npm start