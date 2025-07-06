/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'assets.example.com',
        port: '', 
        pathname: '/account123/**', 
      },
      {
        protocol: 'http',
        hostname: 'placehold.co',
      },
    ],
  },
};

export default nextConfig;