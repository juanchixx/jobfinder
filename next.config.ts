import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return {
      beforeFiles: [
        {
          source: "/jobfinder",
          destination: "https://juanmdiaz.dev/jobfinder",
        },
      ],
    };
  },
};

export default nextConfig;
