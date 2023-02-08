/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'i.ibb.co',
        // port: '8000',
        // pathname: '/media/avatars/**',
      },
      {
        protocol: 'https',
        hostname: 'via.placeholder.com'
      }
    ],
  },
}

module.exports = nextConfig
