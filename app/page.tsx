import Script from "next/script";
import { HomePage } from "@/components/home-page";
import { LocaleProvider } from "@/components/locale-provider";
import { createMetadata } from "@/lib/seo";
import { createHomeSchema } from "@/lib/schema";

export const metadata = createMetadata({
  title: "Elias Appuhamy (Elyon) | Offizielle Website",
  description:
    "Offizielle Website von Elias Appuhamy, auch bekannt als Elyon. Founder von Elyon Web, Webdesigner und Developer aus Mettmann mit Fokus auf Design, Entwicklung und langfristigen Unternehmensaufbau.",
  path: "/",
  locale: "de"
});

export default function Page() {
  return (
    <LocaleProvider initialLocale="de">
      <Script id="home-schema-de" type="application/ld+json">
        {JSON.stringify(createHomeSchema("de"))}
      </Script>
      <HomePage />
    </LocaleProvider>
  );
}
