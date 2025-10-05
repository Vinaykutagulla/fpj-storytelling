-- Migration: Add extended onboarding fields to partner_applications
-- Run this in Supabase SQL editor or psql after creating the base table.

-- Create table if it does not exist (idempotent pattern using IF NOT EXISTS)
create table if not exists public.partner_applications (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  email text not null,
  institution text,
  year text,
  motivation text,
  referrals text,
  referral_code text,
  created_at timestamptz default now()
);

-- Add new columns (safe IF NOT EXISTS style via DO blocks)
DO $$ BEGIN
  IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name='partner_applications' AND column_name='phone') THEN
    ALTER TABLE public.partner_applications ADD COLUMN phone text;
  END IF;
  IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name='partner_applications' AND column_name='course') THEN
    ALTER TABLE public.partner_applications ADD COLUMN course text;
  END IF;
  IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name='partner_applications' AND column_name='instagram') THEN
    ALTER TABLE public.partner_applications ADD COLUMN instagram text;
  END IF;
  IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name='partner_applications' AND column_name='linkedin') THEN
    ALTER TABLE public.partner_applications ADD COLUMN linkedin text;
  END IF;
END $$;

-- Indexes (optional performance for lookups)
CREATE INDEX IF NOT EXISTS idx_partner_applications_email ON public.partner_applications (email);
CREATE INDEX IF NOT EXISTS idx_partner_applications_referral_code ON public.partner_applications (referral_code);

-- (Optional) Unique constraint on email if desired (commented out to allow resubmissions)
-- ALTER TABLE public.partner_applications ADD CONSTRAINT uq_partner_applications_email UNIQUE (email);

-- Row Level Security (enable + policy examples) -- enable only if you plan client reads
-- ALTER TABLE public.partner_applications ENABLE ROW LEVEL SECURITY;
-- CREATE POLICY "allow_admin_only" ON public.partner_applications FOR SELECT USING (false);
