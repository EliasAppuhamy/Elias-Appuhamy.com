import Link from "next/link";
import { Footer } from "@/components/footer";
import type { Locale, TranslationDictionary } from "@/lib/translations";

type LegalContentProps = {
  kind: "notice" | "privacy";
  locale: Locale;
  legal: TranslationDictionary["legal"];
  footer: TranslationDictionary["footer"];
};

export function LegalContent({ kind, locale, legal, footer }: LegalContentProps) {
  const title = kind === "notice" ? legal.noticeTitle : legal.privacyTitle;
  const sections = kind === "notice" ? legal.noticeSections : legal.privacySections;
  const homeHref = locale === "en" ? "/en" : "/";

  return (
    <>
      <main className="section-shell pb-20 pt-32 sm:pt-36">
        <div className="max-w-4xl">
          <Link href={homeHref} className="text-sm text-wine-200 transition hover:text-ink">
            {legal.backHome}
          </Link>
          <p className="mt-10 text-xs font-semibold uppercase tracking-[0.36em] text-wine-200">
            {legal.eyebrow}
          </p>
          <h1 className="mt-4 font-display text-5xl leading-none tracking-[-0.05em] text-ink sm:text-6xl">
            {title}
          </h1>

          <div className="legal-copy mt-12 rounded-[2rem] border border-white/8 bg-white/[0.03] p-6 sm:p-8">
            {sections.map((section) => (
              <section key={section.heading}>
                <h2>{section.heading}</h2>
                {section.body.map((paragraph) => (
                  <p key={paragraph}>{renderLinkedText(paragraph)}</p>
                ))}
              </section>
            ))}
          </div>
        </div>
      </main>
      <Footer locale={locale} footer={footer} />
    </>
  );
}

function renderLinkedText(text: string) {
  const parts = text.split(/(https?:\/\/[^\s]+|[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,})/gi);

  return parts.map((part, index) => {
    if (/^https?:\/\/[^\s]+$/i.test(part)) {
      return (
        <a key={`${part}-${index}`} href={part} target="_blank" rel="noreferrer" className="underline underline-offset-4 hover:text-white">
          {part}
        </a>
      );
    }

    if (/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(part)) {
      return (
        <a key={`${part}-${index}`} href={`mailto:${part}`} className="underline underline-offset-4 hover:text-white">
          {part}
        </a>
      );
    }

    return part;
  });
}
