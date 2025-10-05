# Supabase Database Setup Guide

## 1. Create Supabase Account (FREE)
1. Go to https://supabase.com
2. Click "Start your project"
3. Sign up with GitHub (recommended) or email
4. Create new organization (use your name)

## 2. Create New Project
1. Click "New Project"
2. Project Name: `fpj-storytelling`
3. Database Password: Create a strong password (save it!)
4. Region: Choose closest to your users
5. Click "Create new project"

## 3. Run Database Migration
Once your project is ready (2-3 minutes):

1. Go to SQL Editor in your Supabase dashboard
2. Click "New Query"
3. Copy and paste this SQL:

```sql
-- Create partner_applications table
CREATE TABLE partner_applications (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  phone VARCHAR(20),
  institution VARCHAR(255) NOT NULL,
  year VARCHAR(10) NOT NULL,
  course VARCHAR(255),
  motivation TEXT NOT NULL,
  instagram VARCHAR(255),
  linkedin VARCHAR(255),
  referrals TEXT,
  created_at TIMESTAMP DEFAULT NOW(),
  
  -- Workflow columns
  status VARCHAR(20) DEFAULT 'pending',
  referral_code VARCHAR(20),
  approval_date TIMESTAMP,
  rejection_date TIMESTAMP,
  admin_notes TEXT
);

-- Create indexes for performance
CREATE INDEX idx_partner_applications_status ON partner_applications(status);
CREATE INDEX idx_partner_applications_created_at ON partner_applications(created_at DESC);
CREATE UNIQUE INDEX idx_partner_applications_referral_code ON partner_applications(referral_code) WHERE referral_code IS NOT NULL;

-- Add constraints
ALTER TABLE partner_applications 
ADD CONSTRAINT check_status_values CHECK (status IN ('pending', 'approved', 'rejected', 'under_review'));

-- Enable Row Level Security (RLS)
ALTER TABLE partner_applications ENABLE ROW LEVEL SECURITY;

-- Create policy for service role (your API can access everything)
CREATE POLICY "Service role can access all partner_applications" ON partner_applications
FOR ALL USING (auth.jwt() ->> 'role' = 'service_role');

-- Create policy for anon users (can only insert)
CREATE POLICY "Anyone can submit applications" ON partner_applications
FOR INSERT WITH CHECK (true);
```

4. Click "Run" to execute the SQL

## 4. Get Your Credentials
After running the SQL:

1. Go to Settings → API
2. Copy these values:
   - **URL**: `https://your-project-ref.supabase.co`
   - **anon public key**: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...`
   - **service_role key**: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...` (keep this secret!)

## 5. Test Your Database
1. Go to Table Editor
2. You should see `partner_applications` table
3. Try adding a test row manually to verify it works

Your database is ready! 🎉