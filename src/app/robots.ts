import type { MetadataRoute } from "next";

const BASE = "https://id-eat-that.vercel.app";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: "/studio",
    },
    sitemap: `${BASE}/sitemap.xml`,
    host: BASE,
  };
}
