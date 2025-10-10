import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return {
      beforeFiles: [
        {
          source: "/jobfinder",
          destination: "https://juanmdiaz.dev/jobfinder",
        },
        {
          source: "/jobfinder/:path*",
          destination: "https://juanmdiaz.dev/jobfinder/:path*",
        },
      ],
    };
  },
};

export default nextConfig;
