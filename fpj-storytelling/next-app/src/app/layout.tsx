import '../styles/globals.css';
import type { Metadata } from 'next';
import { ThemeProvider } from '../components/ThemeProvider.tsx';
import { Navigation } from '../components/Navigation.tsx';
import { Footer } from '../components/Footer.tsx';
import { inlineThemeScript } from '../lib/themeScript.ts';
import { organizationSchema, websiteSchema, breadcrumbSchema, serviceSchema } from '../lib/schemas';
import React from 'react';

export const metadata: Metadata = {
  title: 'FirstPharmaJob – Accelerate Your Pharma Career | Student Partner Program',
  description: 'Professional pharmaceutical career training program. Get industry certifications, referral codes, and direct placement opportunities. Join 1000+ students launching pharma careers.',
  keywords: 'pharmaceutical jobs, pharma career, student partner program, pharmaceutical training, medical representative jobs, pharma industry, drug development careers, clinical research jobs',
  authors: [{ name: 'FirstPharmaJob Institute' }],
  creator: 'FirstPharmaJob Institute',
  publisher: 'FirstPharmaJob Institute',
  robots: 'index, follow',
  metadataBase: new URL('https://firstpharmajob.com'),
  alternates: {
    canonical: 'https://firstpharmajob.com'
  },
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon-32x32.svg', sizes: '32x32', type: 'image/svg+xml' },
      { url: '/favicon-16x16.svg', sizes: '16x16', type: 'image/svg+xml' }
    ],
    apple: '/apple-touch-icon.svg',
    shortcut: '/favicon.svg'
  },
  openGraph: {
    title: 'FirstPharmaJob – Launch Your Pharmaceutical Career',
    description: 'Professional training program for pharmaceutical careers. Get certified, earn referral codes, and access exclusive job opportunities in the pharma industry.',
    url: 'https://firstpharmajob.com',
    siteName: 'FirstPharmaJob',
    images: [
      { 
        url: 'https://firstpharmajob.com/social-card.svg', 
        width: 1200, 
        height: 630, 
        alt: 'FirstPharmaJob - Professional Pharmaceutical Career Training'
      }
    ],
    type: 'website',
    locale: 'en_US'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'FirstPharmaJob – Launch Your Pharmaceutical Career',
    description: 'Professional training program for pharmaceutical careers. Get certified, earn referral codes, and access exclusive job opportunities.',
    images: ['https://firstpharmajob.com/social-card.svg'],
    creator: '@firstpharmajob'
  },
  verification: {
    google: 'add-your-google-verification-code-here'
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: inlineThemeScript() }} />
        <meta name="theme-color" content="#ffffff" media="(prefers-color-scheme: light)" />
        <meta name="theme-color" content="#0d1117" media="(prefers-color-scheme: dark)" />
        <link rel="canonical" href="https://firstpharmajob.com/" />
        
        {/* Favicon links for better compatibility */}
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="icon" type="image/svg+xml" sizes="32x32" href="/favicon-32x32.svg" />
        <link rel="icon" type="image/svg+xml" sizes="16x16" href="/favicon-16x16.svg" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.svg" />
        <link rel="shortcut icon" href="/favicon.svg" />
        
        {/* Enhanced Structured Data for Rich Search Results */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
        />
      </head>
      <body className="min-h-screen flex flex-col">
        <ThemeProvider>
          <Navigation />
          <main className="pt-16 flex-1">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
