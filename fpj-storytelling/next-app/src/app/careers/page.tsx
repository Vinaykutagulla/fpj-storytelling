import React from 'react';
import type { Metadata } from 'next';
import CareersClient from './CareersClient';

export const metadata: Metadata = {
  title: 'Pharmaceutical Careers & Jobs - FirstPharmaJob Placement Services',
  description: 'Explore pharmaceutical career opportunities with 50+ partner companies. Get certified, trained, and placed in clinical research, regulatory affairs, quality assurance, and medical affairs roles.',
  keywords: 'pharmaceutical jobs, pharma careers, clinical research jobs, regulatory affairs careers, quality assurance jobs, medical affairs positions, pharma placement services',
  openGraph: {
    title: 'Pharmaceutical Careers & Job Opportunities - FirstPharmaJob',
    description: '1000+ students placed in top pharmaceutical companies. 95% placement rate. Access exclusive job opportunities with leading pharma organizations.',
    url: 'https://firstpharmajob.com/careers',
  }
};

export default function CareersPage() {
  return <CareersClient />;
}

const jobCategories = [
  {
    title: 'Clinical Research',
    jobs: [
      'Clinical Research Associate (CRA)',
      'Clinical Data Manager',
      'Clinical Research Coordinator',
      'Medical Monitor',
      'Clinical Operations Manager'
    ],
    icon: '🔬'
  },
  {
    title: 'Regulatory Affairs',
    jobs: [
      'Regulatory Affairs Specialist',
      'Drug Safety Associate',
      'Regulatory Medical Writer',
      'Compliance Officer',
      'Submissions Manager'
    ],
    icon: '📋'
  },
  {
    title: 'Quality Assurance',
    jobs: [
      'QA Specialist',
      'Quality Control Analyst',
      'Validation Engineer',
      'GMP Auditor',
      'Quality Manager'
    ],
    icon: '✅'
  },
  {
    title: 'Medical Affairs',
    jobs: [
      'Medical Science Liaison',
      'Medical Writer',
      'Medical Affairs Manager',
      'Clinical Educator',
      'Medical Information Specialist'
    ],
    icon: '💊'
  }
];

const partnerCompanies = [
  'Biocon', 'Dr. Reddy\'s', 'Cipla', 'Sun Pharma', 'Lupin',
  'Aurobindo', 'Glenmark', 'Torrent Pharma', 'Alkem Labs', 'Zydus Cadila',
  'Novartis', 'Pfizer', 'GSK', 'Roche', 'Johnson & Johnson'
];