-- FPJ Storytelling Database Setup
-- Copy and paste this entire script into Supabase SQL Editor

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
  
  -- Workflow columns for admin management
  status VARCHAR(20) DEFAULT 'pending',
  referral_code VARCHAR(20),
  approval_date TIMESTAMP,
  rejection_date TIMESTAMP,
  admin_notes TEXT
);

-- Create indexes for better performance
CREATE INDEX idx_partner_applications_status ON partner_applications(status);
CREATE INDEX idx_partner_applications_created_at ON partner_applications(created_at DESC);
CREATE UNIQUE INDEX idx_partner_applications_referral_code ON partner_applications(referral_code) WHERE referral_code IS NOT NULL;

-- Add status validation
ALTER TABLE partner_applications 
ADD CONSTRAINT check_status_values CHECK (status IN ('pending', 'approved', 'rejected', 'under_review'));

-- Enable Row Level Security
ALTER TABLE partner_applications ENABLE ROW LEVEL SECURITY;

-- Create policies for API access
CREATE POLICY "Service role can access all partner_applications" ON partner_applications
FOR ALL USING (auth.jwt() ->> 'role' = 'service_role');

CREATE POLICY "Anyone can submit applications" ON partner_applications
FOR INSERT WITH CHECK (true);

-- Insert a test record to verify everything works
INSERT INTO partner_applications (name, email, institution, year, motivation) 
VALUES ('Test Student', 'test@university.edu', 'Test University', '3rd Year', 'This is a test application to verify the database is working correctly.');

-- Verify the table was created and test record inserted
SELECT * FROM partner_applications;