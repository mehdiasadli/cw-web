import type { NextConfig } from 'next';

const { i18n } = require('./next-i18next.config');

const nextConfig: NextConfig = {
  /* config options here */
  i18n,
  images: {
    remotePatterns: [{ hostname: 'images.unsplash.com' }, { hostname: 'res.cloudinary.com' }],
  },
};

export default nextConfig;
