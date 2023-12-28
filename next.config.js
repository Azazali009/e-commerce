/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "*.com",
        protocol: "https",
      },
    ],
  },
};

module.exports = nextConfig;
