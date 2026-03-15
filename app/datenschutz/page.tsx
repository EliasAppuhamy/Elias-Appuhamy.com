import { LegalContent } from "@/components/legal-pages";
import { LocaleProvider } from "@/components/locale-provider";
import { createMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site";

export const metadata = createMetadata({
  title: "Datenschutz",
  description: `Datenschutzhinweise für die Website von ${siteConfig.name}.`,
  path: "/datenschutz",
  locale: "de"
});

export default function DatenschutzPage() {
  return (
    <LocaleProvider initialLocale="de">
      <LegalContent kind="privacy" />
    </LocaleProvider>
  );
}
