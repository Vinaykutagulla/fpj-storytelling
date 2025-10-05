import '../styles/globals.css';
import type { Metadata } from 'next';
import { ThemeProvider } from '../components/ThemeProvider.tsx';
import { Navigation } from '../components/Navigation.tsx';
import { Footer } from '../components/Footer.tsx';
import { inlineThemeScript } from '../lib/themeScript.ts';
import React from 'react';

export const metadata: Metadata = {
  title: 'FirstPharmaJob – Accelerate Your Pharma Career',
  description: 'Guidance, training, mentoring and partner opportunities to launch and grow a pharmaceutical career.',
  openGraph: {
    title: 'FirstPharmaJob – Accelerate Your Pharma Career',
    description: 'Guidance, training, mentoring and partner opportunities to launch and grow a pharmaceutical career.',
    url: 'https://firstpharmajob.com',
    siteName: 'FirstPharmaJob',
    images: [
      { url: 'https://firstpharmajob.com/social-card.svg', width: 1200, height: 630, alt: 'FirstPharmaJob Social Card' }
    ],
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'FirstPharmaJob – Accelerate Your Pharma Career',
    description: 'Guidance, training, mentoring and partner opportunities to launch and grow a pharmaceutical career.',
    images: ['https://firstpharmajob.com/social-card.svg']
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
