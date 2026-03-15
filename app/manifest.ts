import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${siteConfig.name} | ${siteConfig.alias}`,
    short_name: siteConfig.name,
    description: siteConfig.description,
    start_url: "/",
    display: "standalone",
    background_color: "#050405",
    theme_color: "#050405",
    icons: [
      {
        src: "/images/elias-appuhamy-portrait-square.jpeg",
        sizes: "512x512",
        type: "image/jpeg"
      }
    ]
  };
}
