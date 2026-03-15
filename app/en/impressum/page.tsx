import { LegalContent } from "@/components/legal-pages";
import { LocaleProvider } from "@/components/locale-provider";
import { createMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site";

export const metadata = createMetadata({
  title: "Legal Notice",
  description: `Legal notice for the website of ${siteConfig.name}.`,
  path: "/en/impressum",
  locale: "en"
});

export default function EnglishImpressumPage() {
  return (
    <LocaleProvider initialLocale="en">
      <LegalContent kind="notice" />
    </LocaleProvider>
  );
}
