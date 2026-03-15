"use client";

import Link from "next/link";
import { useLocale } from "@/components/locale-provider";
import { siteConfig } from "@/lib/site";

export function Footer() {
  const { dictionary, locale } = useLocale();
  const year = new Date().getFullYear();
  const legalHref = locale === "en" ? "/en/impressum" : "/impressum";
  const privacyHref = locale === "en" ? "/en/datenschutz" : "/datenschutz";

  return (
    <footer className="px-4 pb-8">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 border-t border-white/10 pt-6 text-sm text-gray-400 md:flex-row md:items-center md:justify-between">
        <p>
          &copy; {year} {siteConfig.name}
        </p>
        <div className="flex items-center gap-5">
          <a className="transition hover:text-white" href={`mailto:${siteConfig.email}`}>
            {siteConfig.email}
          </a>
          <Link className="transition hover:text-white" href={legalHref}>
            {dictionary.footer.legalNotice}
          </Link>
          <Link className="transition hover:text-white" href={privacyHref}>
            {dictionary.footer.privacyPolicy}
          </Link>
        </div>
      </div>
    </footer>
  );
}
