import { LegalContent } from "@/components/legal-pages";
import { LocaleProvider } from "@/components/locale-provider";
import { createMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site";
import { translations } from "@/lib/translations";

export const metadata = createMetadata({
  title: "Privacy Policy",
  description: `Privacy policy for the website of ${siteConfig.name}.`,
  path: "/en/datenschutz",
  locale: "en"
});

export default function EnglishDatenschutzPage() {
  return (
    <LocaleProvider initialLocale="en">
      <LegalContent kind="privacy" locale="en" legal={translations.en.legal} footer={translations.en.footer} />
    </LocaleProvider>
  );
}
