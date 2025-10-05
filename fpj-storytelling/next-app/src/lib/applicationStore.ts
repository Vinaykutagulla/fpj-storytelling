// Shared in-memory store for applications when Supabase is not available
export interface ApplicationRecord {
  id: string;
  name: string;
  email: string;
  institution: string;
  year: string;
  motivation: string;
  phone?: string;
  course?: string;
  instagram?: string;
  linkedin?: string;
  referrals?: string;
  referralCode?: string;
  createdAt: string;
  status?: string;
  approvalDate?: string;
  rejectionDate?: string;
  adminNotes?: string;
}

export const memoryStore: ApplicationRecord[] = [];

export const metrics = { 
  total: 0, 
  spam: 0, 
  rateLimited: 0, 
  persisted: 0, 
  fallback: 0 
};