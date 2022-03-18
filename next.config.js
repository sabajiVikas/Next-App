/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  // NextJS Way
  env: {
    MONGO_URI: `mongodb://127.0.0.1:27017/superHeros`,
  },
};

module.exports = nextConfig;
