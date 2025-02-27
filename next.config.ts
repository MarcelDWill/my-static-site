import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: "export", // Enables static export mode
  images: {
    unoptimized: true, // Required for Cloudflare Pages
  },
};

export default nextConfig;

