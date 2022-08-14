/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  async rewrites() {
    return {
      fallback: [{
        source: '/api2/:path*',
        destination: `http://localhost:9000/api/:path*`,
      }, ],
    }
  },
}

module.exports = nextConfig