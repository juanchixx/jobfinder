import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	async rewrites() {
		return {
			fallback: [
				{
					source: "/:path*",
					destination: "https://juanmdiaz.dev/jobfinder/:path*",
				},
			],
		};
	},
};

export default nextConfig;
