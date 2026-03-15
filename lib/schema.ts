import { siteConfig } from "@/lib/site";

type SchemaLocale = "de" | "en";

function createPersonSchema(locale: SchemaLocale) {
  const isGerman = locale === "de";

  return {
    "@type": "Person",
    "@id": `${siteConfig.siteUrl}#person`,
    name: siteConfig.name,
    alternateName: [siteConfig.alias, `${siteConfig.name} Elyon`],
    jobTitle: ["Founder", "Web Designer", "Developer"],
    description: isGerman
      ? "Elias Appuhamy, auch bekannt als Elyon, ist Founder von Elyon Web, Webdesigner und Developer aus Mettmann."
      : "Elias Appuhamy, also known as Elyon, is the founder of Elyon Web, a web designer, and a developer from Mettmann.",
    url: siteConfig.siteUrl,
    image: new URL(siteConfig.ogImage, siteConfig.siteUrl).toString(),
    email: `mailto:${siteConfig.email}`,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Mettmann",
      addressRegion: "North Rhine-Westphalia",
      addressCountry: "DE"
    },
    sameAs: [siteConfig.socialLinks.instagram],
    worksFor: {
      "@id": `${siteConfig.siteUrl}#organization`
    },
    mainEntityOfPage: {
      "@id": `${siteConfig.siteUrl}${locale === "en" ? "/en" : ""}#profile-page`
    },
    knowsAbout: [
      "Web Design",
      "Web Development",
      "TypeScript",
      "Next.js",
      "Frontend Development",
      "Entrepreneurship",
      "Digital Systems",
      "Brand Design"
    ]
  };
}

function createOrganizationSchema(locale: SchemaLocale) {
  const isGerman = locale === "de";

  return {
    "@type": "Organization",
    "@id": `${siteConfig.siteUrl}#organization`,
    name: siteConfig.company,
    alternateName: [siteConfig.alias],
    url: siteConfig.siteUrl,
    logo: new URL(siteConfig.ogImage, siteConfig.siteUrl).toString(),
    image: new URL(siteConfig.ogImage, siteConfig.siteUrl).toString(),
    email: `mailto:${siteConfig.email}`,
    founder: {
      "@id": `${siteConfig.siteUrl}#person`
    },
    sameAs: [siteConfig.socialLinks.instagram],
    description: isGerman
      ? "Elyon Web ist das Webdesign- und Entwicklungsprojekt von Elias Appuhamy für moderne Websites und digitale Markenauftritte."
      : "Elyon Web is the web design and development project of Elias Appuhamy for modern websites and digital brand presence."
  };
}

function createWebsiteSchema(locale: SchemaLocale) {
  const isGerman = locale === "de";

  return {
    "@type": "WebSite",
    "@id": `${siteConfig.siteUrl}#website`,
    url: siteConfig.siteUrl,
    name: siteConfig.siteName,
    alternateName: [siteConfig.alias, siteConfig.company],
    description: isGerman ? siteConfig.description : siteConfig.englishDescription,
    inLanguage: [isGerman ? "de-DE" : "en-US"],
    publisher: {
      "@id": `${siteConfig.siteUrl}#organization`
    }
  };
}

function createProfilePageSchema(locale: SchemaLocale) {
  const isGerman = locale === "de";
  const pagePath = locale === "en" ? "/en" : "/";
  const pageUrl = `${siteConfig.siteUrl}${locale === "en" ? "/en" : ""}`;

  return {
    "@type": "ProfilePage",
    "@id": `${pageUrl}#profile-page`,
    url: pageUrl,
    name: isGerman
      ? "Elias Appuhamy | Elyon | Offizielle Website"
      : "Elias Appuhamy | Elyon | Official Website",
    description: isGerman ? siteConfig.description : siteConfig.englishDescription,
    isPartOf: {
      "@id": `${siteConfig.siteUrl}#website`
    },
    about: {
      "@id": `${siteConfig.siteUrl}#person`
    },
    mainEntity: {
      "@id": `${siteConfig.siteUrl}#person`
    },
    publisher: {
      "@id": `${siteConfig.siteUrl}#organization`
    },
    primaryImageOfPage: new URL(siteConfig.ogImage, siteConfig.siteUrl).toString(),
    inLanguage: isGerman ? "de-DE" : "en-US",
    breadcrumb: {
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: isGerman ? "Startseite" : "Home",
          item: new URL(pagePath, siteConfig.siteUrl).toString()
        }
      ]
    }
  };
}

export function createHomeSchema(locale: SchemaLocale) {
  return {
    "@context": "https://schema.org",
    "@graph": [
      createWebsiteSchema(locale),
      createOrganizationSchema(locale),
      createPersonSchema(locale),
      createProfilePageSchema(locale)
    ]
  };
}
