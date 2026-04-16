import type { Metadata, Viewport } from "next";
import { Poppins } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { Providers } from "@/components/providers";
import { siteConfig } from "@/lib/site";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["400", "500", "600", "700"],
  display: "swap"
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.siteUrl),
  title: {
    default: "Elias Appuhamy | Elyon",
    template: "%s | Elias Appuhamy"
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  publisher: siteConfig.company,
  category: "technology",
  keywords: [...siteConfig.keywords],
  verification: {
    google: process.env.GOOGLE_SITE_VERIFICATION,
    yandex: process.env.YANDEX_VERIFICATION,
    other: {
      "msvalidate.01": process.env.BING_SITE_VERIFICATION ?? ""
    }
  },
  referrer: "origin-when-cross-origin",
  formatDetection: {
    email: false,
    address: false,
    telephone: false
  },
  manifest: "/manifest.webmanifest",
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
    type: "website",
    siteName: siteConfig.siteName,
    title: "Elias Appuhamy | Elyon",
    description: siteConfig.description,
    locale: "de_DE",
    alternateLocale: ["en_US"],
    url: siteConfig.siteUrl,
    images: [
      {
        url: new URL(siteConfig.ogImage, siteConfig.siteUrl).toString(),
        width: 1206,
        height: 1606,
        alt: "Elias Appuhamy, founder of Elyon Web"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Elias Appuhamy | Elyon",
    description: siteConfig.description,
    images: [new URL(siteConfig.ogImage, siteConfig.siteUrl).toString()]
  },
  icons: {
    icon: "/images/elias-appuhamy-portrait-square.jpeg"
  }
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#050405"
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de" className="dark">
      <body className={`${poppins.variable} min-h-screen`}>
        <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
          <div className="absolute left-[-8rem] top-[16rem] h-[28rem] w-[28rem] rounded-full bg-[#2fd87b]/18 blur-[120px]" />
          <div className="absolute left-1/2 top-[-8rem] h-[24rem] w-[24rem] -translate-x-1/2 rounded-full bg-[#9af66b]/16 blur-[120px]" />
          <div className="absolute right-[-8rem] top-[24rem] h-[30rem] w-[30rem] rounded-full bg-[#1aa7ff]/16 blur-[140px]" />
          <div className="absolute bottom-[-10rem] left-1/3 h-[22rem] w-[22rem] rounded-full bg-[#16a34a]/12 blur-[120px]" />
        </div>
        <Providers>{children}</Providers>
        <Analytics />
      </body>
    </html>
  );
}
