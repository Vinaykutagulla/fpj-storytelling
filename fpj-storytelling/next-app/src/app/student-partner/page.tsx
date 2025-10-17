import React from 'react';
import type { Metadata } from 'next';
import StudentPartnerClient from './StudentPartnerClient';

export const metadata: Metadata = {
  title: 'Student Partner Program - FirstPharmaJob | Join 1000+ Certified Students',
  description: 'Join FirstPharmaJob Student Partner Program with guaranteed job placement. Get pharmaceutical industry certification, earn referral codes, and access exclusive opportunities with 50+ partner companies.',
  keywords: 'student partner program, pharmaceutical training, pharma certification, job placement, medical representative, clinical research training, pharma careers, student opportunities',
  openGraph: {
    title: 'Student Partner Program - Join 1000+ Success Stories | FirstPharmaJob',
    description: 'Get certified, earn referral codes, and access exclusive pharmaceutical job opportunities. 95% placement rate with guaranteed career support.',
    url: 'https://firstpharmajob.com/student-partner',
  },
  alternates: {
    canonical: 'https://firstpharmajob.com/student-partner'
  }
};

export default function StudentPartnerOnboarding() {
  return <StudentPartnerClient />;
}
