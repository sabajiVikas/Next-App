/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  // NextJS Way
  env: {
    MONGO_URI: `mongodb+srv://vikas:Vikas123@cluster0.loynd.mongodb.net/superHeros?retryWrites=true&w=majority`,
  },
};

module.exports = nextConfig;
