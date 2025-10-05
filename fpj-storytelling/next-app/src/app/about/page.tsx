import React from 'react';
import type { Metadata } from 'next';
import AboutContentClient from './AboutContentClient.tsx';

export const metadata: Metadata = {
  title: 'About – FirstPharmaJob',
  description: 'Mission, vision, career ladder and differentiators of FirstPharmaJob.'
};

export default function AboutPage() {
  return <AboutContentClient />;
}
