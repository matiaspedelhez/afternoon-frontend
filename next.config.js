/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  reactStrictMode: true,
  images: {
    loader: "akamai",
    path: "",
    unoptimized: true,
    domains: [
      "tailwindui.com",
      "img.icons8.com",
      "cdn.shopify.com",
      "img.freepik.com",
      "cafeplatino.com",
    ],
  },
  trailingSlash: true,

  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'no-cache', 
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
