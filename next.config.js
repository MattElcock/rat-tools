/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: `http://${process.env.API_URL}/:path*`,
        basePath: false,
      },
    ];
  },
};

module.exports = nextConfig;
