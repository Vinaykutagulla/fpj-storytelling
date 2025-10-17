import React from 'react';
import type { Metadata } from 'next';
import AboutContentClient from './AboutContentClient.tsx';

export const metadata: Metadata = {
  title: 'About FirstPharmaJob - Leading Pharmaceutical Career Development Institute',
  description: 'For over 5 years FirstPharmaJob has been a trusted global pharmaceutical career training company. Learn more about how we can help accelerate your pharmaceutical career with professional certifications and job placement services.',
  keywords: 'about firstpharmajob, pharmaceutical career training, pharma education institute, professional development, career services, student partner program',
  openGraph: {
    title: 'About FirstPharmaJob - Professional Pharmaceutical Career Training',
    description: 'Leading pharmaceutical career development institute with 1000+ students certified and 95% job placement rate.',
    url: 'https://firstpharmajob.com/about',
  }
};

export default function AboutPage() {
  return <AboutContentClient />;
}
