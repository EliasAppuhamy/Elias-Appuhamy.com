import { LegalContent } from "@/components/legal-pages";
import { LocaleProvider } from "@/components/locale-provider";
import { createMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site";

export const metadata = createMetadata({
  title: "Impressum",
  description: `Impressum für die Website von ${siteConfig.name}.`,
  path: "/impressum",
  locale: "de"
});

export default function ImpressumPage() {
  return (
    <LocaleProvider initialLocale="de">
      <LegalContent kind="notice" />
    </LocaleProvider>
  );
}
