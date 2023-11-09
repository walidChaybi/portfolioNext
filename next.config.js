/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["upload.wikimedia.org", "nicepng.com"],
  },
  ignoreBuildErrors: true,
  ignoreBuildWarnings: true,
  reactStrictMode: true,
};

module.exports = nextConfig;
