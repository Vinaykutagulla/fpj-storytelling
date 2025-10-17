import type { Metadata } from 'next';
import dynamic from 'next/dynamic';
import Script from 'next/script';

export const metadata: Metadata = {
  title: 'Contact – FirstPharmaJob',
  description: 'Get in touch to accelerate your pharmaceutical and clinical research career.'
};

// NodeNext requires explicit extension; wrap with then for default
const ContactClient = dynamic(() => import('./ContactClient.tsx').then(m => m.default as any), { ssr: false, loading: () => <div className="min-h-[60vh] flex items-center justify-center text-slate-500 text-sm">Loading contact interface…</div> });

function jsonLd() {
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        'name': 'FirstPharmaJob',
        'url': 'https://firstpharmajob.com',
        'sameAs': [
          'https://www.linkedin.com/in/firstpharmajob'
        ],
        'contactPoint': [{
          '@type': 'ContactPoint',
          'contactType': 'customer support',
          'telephone': '+91 91005 14968',
          'email': 'firstpharmajob@gmail.com',
          'availableLanguage': ['en']
        }]
      },
      {
        '@type': 'ContactPage',
        'name': 'Contact – FirstPharmaJob',
        'url': 'https://firstpharmajob.com/contact',
        'about': 'Get in touch about pharmaceutical career acceleration programs, partnerships, and learning pathways.'
      }
    ]
  };
}

export default function ContactPage() {
  return <>
    <ContactClient />
    <Script id="contact-schema" type="application/ld+json" strategy="afterInteractive" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd()) }} />
  </>;
}
