/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

const images = {};

module.exports = {
  nextConfig,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**.imgur.com",
      },
    ],
  },
};
