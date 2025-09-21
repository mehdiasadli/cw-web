import type { NextConfig } from 'next';
import { i18n } from './next-i18next.config.js';

const nextConfig: NextConfig = {
  /* config options here */
  i18n,
  images: {
    remotePatterns: [{ hostname: 'images.unsplash.com' }, { hostname: 'res.cloudinary.com' }],
  },
};

export default nextConfig;
