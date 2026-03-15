"use client";

import { createContext, useContext, useEffect, type ReactNode } from "react";
import { motion } from "framer-motion";
import { usePathname, useRouter } from "next/navigation";
import { translations, type Locale, type TranslationDictionary } from "@/lib/translations";

type LocaleContextValue = {
  locale: Locale;
  switchLocale: (locale: Locale) => void;
  dictionary: TranslationDictionary;
};

const LocaleContext = createContext<LocaleContextValue | null>(null);

type LocaleProviderProps = {
  children: ReactNode;
  initialLocale: Locale;
};

export function LocaleProvider({ children, initialLocale }: LocaleProviderProps) {
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    document.documentElement.lang = initialLocale;
  }, [initialLocale]);

  const switchLocale = (nextLocale: Locale) => {
    if (nextLocale === initialLocale) {
      return;
    }

    const basePath =
      pathname === "/en"
        ? "/"
        : pathname.startsWith("/en/")
          ? pathname.replace(/^\/en/, "") || "/"
          : pathname;

    const localizedPath = nextLocale === "en" ? (basePath === "/" ? "/en" : `/en${basePath}`) : basePath;
    const search = window.location.search;
    const hash = window.location.hash;

    router.push(`${localizedPath}${search}${hash}`);
  };

  return (
    <LocaleContext.Provider
      value={{ locale: initialLocale, switchLocale, dictionary: translations[initialLocale] }}
    >
      {children}
      <LanguageSwitcher />
    </LocaleContext.Provider>
  );
}

export function useLocale() {
  const context = useContext(LocaleContext);

  if (!context) {
    throw new Error("useLocale must be used within a LocaleProvider");
  }

  return context;
}

function LanguageSwitcher() {
  const { locale, switchLocale } = useLocale();

  return (
    <div className="fixed bottom-4 left-4 z-[80]">
      <div className="rounded-full border border-white/10 bg-black/75 p-1 shadow-[0_18px_60px_rgba(0,0,0,0.38)] backdrop-blur-xl">
        <div className="relative grid w-[7.5rem] grid-cols-2 gap-1">
          <motion.span
            aria-hidden="true"
            className="absolute inset-y-0 left-0 w-[calc(50%-0.125rem)] rounded-full bg-white shadow-[0_10px_24px_rgba(255,255,255,0.14)]"
            animate={{ x: locale === "de" ? "0%" : "100%" }}
            transition={{ type: "spring", stiffness: 420, damping: 32 }}
          />

          {(["de", "en"] as const).map((value) => {
            const active = locale === value;

            return (
              <button
                key={value}
                type="button"
                onClick={() => switchLocale(value)}
                className={`relative z-10 inline-flex h-10 items-center justify-center rounded-full text-sm font-semibold transition ${
                  active ? "text-black" : "text-white/78 hover:text-white"
                }`}
              >
                {value.toUpperCase()}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
