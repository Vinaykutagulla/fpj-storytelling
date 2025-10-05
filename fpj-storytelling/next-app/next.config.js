/** @type {import('next').NextConfig} */
const isStaticPreview = process.env.STATIC_PREVIEW === '1';

const nextConfig = {
  reactStrictMode: true,
  experimental: {
    typedRoutes: true
  },
  // When STATIC_PREVIEW=1 we aim for a purely static export so user can open HTML files directly.
  output: isStaticPreview ? 'export' : undefined,
  images: isStaticPreview ? { unoptimized: true } : undefined,
};

module.exports = nextConfig;
