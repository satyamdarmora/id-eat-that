import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  allowedDevOrigins: ["*.trycloudflare.com"],
  async redirects() {
    // One canonical host so search engines don't index duplicates.
    return ["www.theidchef.com", "id-eat-that.vercel.app"].map((host) => ({
      source: "/:path*",
      has: [{ type: "host" as const, value: host }],
      destination: "https://theidchef.com/:path*",
      permanent: true,
    }));
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
      },
    ],
  },
};

export default nextConfig;
