/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true, // Required for static export
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
  // Uncomment the basePath if your repo name is not the root domain
  // basePath: '/testwb', // Commented for local development
};

export default nextConfig;
