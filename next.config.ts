import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    async rewrites() {
    return {
      beforeFiles: [
        // {
        //   source: "/jobfinder",
        //   destination: "https://juanmdiaz.dev/jobfinder",
        // },
        {
          source: "/:path*",
          destination: "https://jobfinder-peach-zeta.vercel.app/:path*",
        },
      ],
    };
  },
};

export default nextConfig;
