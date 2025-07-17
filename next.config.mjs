/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  output: 'export', // Enable static export

  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true, // Required for static export
  },

  basePath: isProd ? '/harmenx.github.io' : '',
  assetPrefix: isProd ? '/harmenx.github.io' : '',
};

export default nextConfig;