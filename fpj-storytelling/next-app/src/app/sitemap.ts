import type { MetadataRoute } from 'next';

// Dynamic sitemap for comprehensive SEO coverage
export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://firstpharmajob.com';
  const now = new Date().toISOString();
  return [
    { url: base + '/', lastModified: now, changeFrequency: 'weekly', priority: 1.0 },
    { url: base + '/student-partner', lastModified: now, changeFrequency: 'weekly', priority: 0.9 },
    { url: base + '/about', lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: base + '/services', lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: base + '/contact', lastModified: now, changeFrequency: 'monthly', priority: 0.6 },
    { url: base + '/journey', lastModified: now, changeFrequency: 'monthly', priority: 0.5 }
  ];
}
