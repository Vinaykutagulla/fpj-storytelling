import React from 'react';
import type { Metadata } from 'next';
import dynamic from 'next/dynamic';
import Script from 'next/script';

export const metadata: Metadata = {
  title: 'Programs & Services – FirstPharmaJob',
  description: 'Clinical research & pharma career programs: Pharmacovigilance, Clinical Data Management, SAS, CDISC and more.'
};

const ProgramsClient = dynamic(() => import('./ProgramsClient.tsx').then(m => m.default), { ssr: false });

// Minimal program descriptors duplicated (keep in sync with client list)
const programSchema = [
  {
    id: 'pharmacovigilance',
    name: 'Diploma in Pharmacovigilance',
    description: 'Drug safety & risk management training covering adverse event detection, signal evaluation, coding & compliance.'
  },
  {
    id: 'clinical-data-management',
    name: 'Certification in Clinical Data Management',
    description: 'Lifecycle clinical data handling: design, capture, cleaning, reconciliation and database lock workflows.'
  },
  {
    id: 'sas-beginner',
    name: 'Clinical SAS Programming (Beginner)',
    description: 'Foundational SAS programming, trial data structures and reporting essentials for new programmers.'
  },
  {
    id: 'sas-advanced',
    name: 'Advanced CDISC & TLF Programming',
    description: 'Specialised CDISC standards implementation and statistical tables, listings & figures development.'
  }
];

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': programSchema.map(p => ({
    '@type': 'Course',
    '@id': `https://firstpharmajob.com/services#${p.id}`,
    'name': p.name,
    'description': p.description,
    'provider': {
      '@type': 'Organization',
      'name': 'FirstPharmaJob',
      'url': 'https://firstpharmajob.com'
    }
  }))
};

export default function ServicesPage() {
  return <>
    <ProgramsClient />
    <Script id="programs-schema" type="application/ld+json" strategy="afterInteractive">
      {JSON.stringify(jsonLd)}
    </Script>
  </>;
}
