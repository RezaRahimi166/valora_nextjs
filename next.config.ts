/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    nodeMiddleware: true, // 🚀 فعال کردن Node.js runtime برای middleware
  },
};

module.exports = nextConfig;
