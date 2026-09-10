import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    output: 'export', // <--- Add this exact line
    trailingSlash: true,
    images: {
       unoptimized: true, // <--- Add this too (NextJS static exports don't support the built-in image optimizer)
    },
    //defualt code 
  //  images: {
  //    remotePatterns: [
  //      {
  //        protocol: 'https',
  //        hostname: '**',
  //      },
  //      {
  //        protocol: 'http',
  //        hostname: '**',
  //      },
  //    ],
  //  },
};

export default nextConfig;
