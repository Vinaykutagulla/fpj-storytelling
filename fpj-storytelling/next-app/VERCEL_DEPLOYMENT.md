# Vercel Deployment Guide - Step by Step

## 1. Create Vercel Account (FREE)
1. Go to https://vercel.com
2. Click "Sign Up"
3. Choose "Continue with GitHub" (recommended)
4. Authorize Vercel to access your repositories

## 2. Import Your Project
1. Click "Add New..." → "Project"
2. Import from your GitHub: `Vinaykutagulla/fpj-storytelling`
3. **IMPORTANT**: Set these configurations:
   - **Framework Preset**: Next.js
   - **Root Directory**: `fpj-storytelling/next-app`
   - **Build Command**: `npm run build` (auto-detected)
   - **Output Directory**: `.next` (auto-detected)

## 3. Configure Environment Variables
Before deploying, add these in Vercel dashboard:

**Go to your project → Settings → Environment Variables**

Add these variables:
```
NEXT_PUBLIC_SITE_URL = https://your-domain.vercel.app
SUPABASE_URL = your-supabase-url-from-above
SUPABASE_SERVICE_ROLE_KEY = your-service-role-key-from-above
ADMIN_BEARER_TOKEN = fpj-admin-2025-secure-token
```

## 4. Deploy
1. Click "Deploy"
2. Wait 2-3 minutes for build
3. Your site will be live at: `https://fpj-storytelling.vercel.app`

## 5. Test Your Deployment
After deployment, test:
- ✅ Homepage loads properly
- ✅ Student partner form works
- ✅ Admin dashboard login works
- ✅ All pages responsive

## 6. Custom Domain (Optional)
If you want to use your existing domain:
1. Go to Project Settings → Domains
2. Add your domain
3. Update DNS records as shown
4. Vercel will handle SSL automatically

## 7. Automatic Deployments
Now every time you push to GitHub main branch:
- Vercel automatically builds and deploys
- No manual deployment needed
- Preview deployments for other branches

Your FPJ Storytelling site will be live! 🎉