# 📧 Email Setup Guide (FREE with Resend)

## Quick Setup Steps:

### 1. **Sign up for Resend (Free)**
- Go to: https://resend.com
- Sign up for free account
- Get 3,000 emails/month free forever

### 2. **Get API Key**
- Go to: https://resend.com/api-keys
- Create new API key
- Copy the key (starts with `re_`)

### 3. **Add to Environment Variables**

#### For Vercel Production:
1. Go to your Vercel dashboard
2. Select your project
3. Go to Settings → Environment Variables
4. Add: `RESEND_API_KEY` = `your_api_key_here`
5. Redeploy

#### For Local Development:
1. Create `.env.local` file in your project root
2. Add: `RESEND_API_KEY=your_api_key_here`

### 4. **Domain Setup (Optional for better deliverability)**
- Add your domain in Resend dashboard
- Verify DNS records
- Use `onboarding@yourdomain.com` as sender

### 5. **Test**
- Submit a new application
- Check email inbox
- Check Vercel logs for confirmation

## 🎯 Current Behavior:
- ✅ **Without API Key**: Emails logged to console
- ✅ **With API Key**: Real emails sent via Resend
- ✅ **Beautiful HTML emails** with referral codes
- ✅ **Professional styling** and branding

## 💰 Cost:
- **Free tier**: 3,000 emails/month
- **Paid plans**: Start at $20/month for 50,000 emails
- **Perfect for startup**: Free tier covers most needs

## 🚀 Ready to Go:
The code is already implemented and ready - just add your API key!