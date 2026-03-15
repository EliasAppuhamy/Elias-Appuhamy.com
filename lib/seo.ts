import type { Metadata } from "next";
import { siteConfig } from "@/lib/site";

type MetadataOptions = {
  title: string;
  description: string;
  path?: string;
  locale?: "de" | "en";
};

export function createMetadata({
  title,
  description,
  path = "/",
  locale = "de"
}: MetadataOptions): Metadata {
  const url = new URL(path, siteConfig.siteUrl);
  const isGerman = locale === "de";
  const languageAlternatesMap: Record<string, { de: string; en: string }> = {
    "/": {
      de: siteConfig.siteUrl,
      en: `${siteConfig.siteUrl}/en`
    },
    "/en": {
      de: siteConfig.siteUrl,
      en: `${siteConfig.siteUrl}/en`
    },
    "/impressum": {
      de: `${siteConfig.siteUrl}/impressum`,
      en: `${siteConfig.siteUrl}/en/impressum`
    },
    "/en/impressum": {
      de: `${siteConfig.siteUrl}/impressum`,
      en: `${siteConfig.siteUrl}/en/impressum`
    },
    "/datenschutz": {
      de: `${siteConfig.siteUrl}/datenschutz`,
      en: `${siteConfig.siteUrl}/en/datenschutz`
    },
    "/en/datenschutz": {
      de: `${siteConfig.siteUrl}/datenschutz`,
      en: `${siteConfig.siteUrl}/en/datenschutz`
    }
  };
  const languageAlternates = languageAlternatesMap[path];

  return {
    title,
    description,
    keywords: [...siteConfig.keywords],
    alternates: {
      canonical: url.toString(),
      languages: languageAlternates
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1
      }
    },
    openGraph: {
      title,
      description,
      url: url.toString(),
      siteName: siteConfig.siteName,
      type: "website",
      locale: isGerman ? "de_DE" : "en_US",
      alternateLocale: isGerman ? ["en_US"] : ["de_DE"],
      images: [
        {
          url: new URL(siteConfig.ogImage, siteConfig.siteUrl).toString(),
          width: 1206,
          height: 1606,
          alt: "Elias Appuhamy, also known as Elyon"
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [new URL(siteConfig.ogImage, siteConfig.siteUrl).toString()]
    },
    category: "technology"
  };
}
