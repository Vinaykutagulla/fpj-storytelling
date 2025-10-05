-- Add workflow columns to partner_applications table
ALTER TABLE partner_applications 
ADD COLUMN IF NOT EXISTS status VARCHAR(20) DEFAULT 'pending';

ALTER TABLE partner_applications 
ADD COLUMN IF NOT EXISTS referral_code VARCHAR(20);

ALTER TABLE partner_applications 
ADD COLUMN IF NOT EXISTS approval_date TIMESTAMP;

ALTER TABLE partner_applications 
ADD COLUMN IF NOT EXISTS rejection_date TIMESTAMP;

ALTER TABLE partner_applications 
ADD COLUMN IF NOT EXISTS admin_notes TEXT;

-- Create index for status queries
CREATE INDEX IF NOT EXISTS idx_partner_applications_status ON partner_applications(status);

-- Create unique index for referral codes
CREATE UNIQUE INDEX IF NOT EXISTS idx_partner_applications_referral_code ON partner_applications(referral_code) WHERE referral_code IS NOT NULL;

-- Add check constraint for status values
ALTER TABLE partner_applications 
ADD CONSTRAINT check_status_values CHECK (status IN ('pending', 'approved', 'rejected', 'under_review'));