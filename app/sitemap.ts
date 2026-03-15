import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return [
    {
      url: siteConfig.siteUrl,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1
    },
    {
      url: `${siteConfig.siteUrl}/en`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9
    },
    {
      url: `${siteConfig.siteUrl}/impressum`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.2
    },
    {
      url: `${siteConfig.siteUrl}/datenschutz`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.2
    },
    {
      url: `${siteConfig.siteUrl}/en/impressum`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.2
    },
    {
      url: `${siteConfig.siteUrl}/en/datenschutz`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.2
    }
  ];
}
