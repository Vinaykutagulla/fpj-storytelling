import '../styles/globals.css';
import type { Metadata } from 'next';
import { ThemeProvider } from '../components/ThemeProvider.tsx';
import { Navigation } from '../components/Navigation.tsx';
import { Footer } from '../components/Footer.tsx';
import { inlineThemeScript } from '../lib/themeScript.ts';
import { organizationSchema, websiteSchema, breadcrumbSchema, serviceSchema, clinicalResearchCourseSchema } from '../lib/schemas';
import React from 'react';

export const metadata: Metadata = {
  title: 'Clinical Research Training with Job Guarantee | FirstPharmaJob | ISO 9001:2015 Certified',
  description: 'Get guaranteed pharmaceutical job placement in 12 weeks! ISO 9001:2015 certified clinical research training with 95% placement rate. 1000+ students placed in top pharma companies like Biocon, Dr. Reddy\'s, Cipla. Start your CRA, Drug Safety, or Regulatory Affairs career today.',
  keywords: 'clinical research training, pharmaceutical jobs, CRA training, drug safety jobs, regulatory affairs training, pharmaceutical certification, clinical research associate, pharmacovigilance training, clinical data management, biostatistics careers, pharmaceutical quality assurance, medical writing jobs, pharma job guarantee, clinical research course, pharmaceutical industry careers, pharma placement services, clinical research certification, pharmaceutical training institute',
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
    title: 'Clinical Research Training with Job Guarantee | FirstPharmaJob',
    description: 'Get guaranteed pharmaceutical job placement in 12 weeks! ISO 9001:2015 certified training with 95% placement rate. 1000+ students placed in top pharma companies. Start your Clinical Research Associate, Drug Safety, or Regulatory Affairs career today.',
    url: 'https://firstpharmajob.com',
    siteName: 'FirstPharmaJob',
    images: [
      { 
        url: 'https://firstpharmajob.com/og-image.png', 
        width: 1200, 
        height: 630, 
        alt: 'FirstPharmaJob - Clinical Research Training with Job Guarantee | 95% Placement Success | ISO 9001:2015 Certified',
        type: 'image/png'
      },
      { 
        url: 'https://firstpharmajob.com/social-card.svg', 
        width: 1200, 
        height: 630, 
        alt: 'FirstPharmaJob - Clinical Research Training with Job Guarantee | ISO 9001:2015 Certified',
        type: 'image/svg+xml'
      }
    ],
    type: 'website',
    locale: 'en_US'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Clinical Research Training with Job Guarantee | FirstPharmaJob',
    description: '🎯 95% Placement Rate | Get guaranteed pharmaceutical job placement in 12 weeks. ISO certified training with 1000+ students placed in top pharma companies.',
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
        
        {/* Additional SEO Meta Tags */}
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="FirstPharmaJob" />
        <meta name="application-name" content="FirstPharmaJob" />
        <meta name="msapplication-TileColor" content="#2563eb" />
        <meta name="msapplication-config" content="/browserconfig.xml" />
        
        {/* Rich Snippets Enhancement */}
        <meta name="rating" content="4.9" />
        <meta name="price" content="Free Consultation" />
        <meta name="availability" content="InStock" />
        
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(clinicalResearchCourseSchema) }}
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
