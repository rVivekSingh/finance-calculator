/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    reactStrictMode: true,
    swcMinify: true,
    styledComponents: true,
  },
  output: "export",
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
