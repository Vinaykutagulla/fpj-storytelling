import React from 'react';
import type { Metadata } from 'next';
import CareersClient from './CareersClient';

export const metadata: Metadata = {
  title: 'Pharmaceutical Jobs & Career Opportunities | Clinical Research Training | FirstPharmaJob',
  description: '🎯 Get guaranteed pharmaceutical job placement with our ISO 9001:2015 certified training. 50+ partner companies hiring CRA, Drug Safety, Regulatory Affairs, QA roles. 95% placement success rate.',
  keywords: 'pharmaceutical jobs, clinical research associate jobs, CRA jobs, drug safety jobs, regulatory affairs jobs, pharmaceutical quality assurance jobs, medical writing jobs, pharmacovigilance careers, clinical data management jobs, biostatistics jobs, pharma company jobs, pharmaceutical industry careers, clinical research training, pharma placement services, pharmaceutical recruitment',
  openGraph: {
    title: 'Pharmaceutical Jobs & Career Opportunities | FirstPharmaJob',
    description: '🎯 1000+ students placed in top pharmaceutical companies. 95% placement rate. Get guaranteed job placement in Clinical Research, Drug Safety, Regulatory Affairs & more.',
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