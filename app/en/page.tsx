import Script from "next/script";
import { HomePage } from "@/components/home-page";
import { LocaleProvider } from "@/components/locale-provider";
import { createMetadata } from "@/lib/seo";
import { createHomeSchema } from "@/lib/schema";
import { translations } from "@/lib/translations";

export const metadata = createMetadata({
  title: "Elias Appuhamy (Elyon) | Official Website",
  description:
    "Official website of Elias Appuhamy, also known as Elyon. Founder of Elyon Web, web designer, and developer from Mettmann focused on design, development, and long-term company building.",
  path: "/en",
  locale: "en"
});

export default function EnglishPage() {
  return (
    <LocaleProvider initialLocale="en">
      <Script id="home-schema-en" type="application/ld+json">
        {JSON.stringify(createHomeSchema("en"))}
      </Script>
      <HomePage locale="en" dictionary={translations.en} />
    </LocaleProvider>
  );
}
