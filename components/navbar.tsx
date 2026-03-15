"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import type { TranslationDictionary } from "@/lib/translations";

const sectionIds = ["hero", "about", "expertise", "connect"] as const;

type NavbarProps = {
  nav: TranslationDictionary["nav"];
};

export function Navbar({ nav }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const navItems = nav.links.filter((item) => item.id !== "connect");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter((element): element is HTMLElement => Boolean(element));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-45% 0px -45% 0px",
        threshold: 0.1
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const hoverColors: Record<string, string> = {
    hero: "hover:text-brand",
    about: "hover:text-snapGreen",
    expertise: "hover:text-skyGlow",
    connect: "hover:text-[#c5ff7a]"
  };

  return (
    <>
      <nav
        className={cn(
          "fixed top-0 z-50 flex w-full items-center justify-between px-4 py-3.5 transition-all duration-300 md:px-16 lg:px-24",
          scrolled ? "border-b border-white/10 bg-black/40 backdrop-blur-xl" : "border-b border-transparent"
        )}
      >
        <a href="#hero" className="text-xl font-bold tracking-tight text-white">
          Elias <span className="text-brand">Appuhamy</span>
        </a>

        <div className="hidden items-center space-x-8 text-sm font-medium md:flex">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={item.href}
              className={cn(
                "transition",
                activeSection === item.id ? "text-white" : "text-white/80",
                hoverColors[item.id]
              )}
            >
              {item.label}
            </a>
          ))}
          <a href="#connect" className="btn-glass">
            {nav.cta}
          </a>
        </div>

        <button
          type="button"
          aria-label={menuOpen ? nav.closeMenu : nav.openMenu}
          onClick={() => setMenuOpen((current) => !current)}
          className="p-2 text-white transition active:scale-90 md:hidden"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="size-6"
          >
            <path d="M4 5h16" />
            <path d="M4 12h16" />
            <path d="M4 19h16" />
          </svg>
        </button>
      </nav>

      <div
        className={cn(
          "fixed inset-0 z-[60] flex flex-col items-center justify-center gap-8 bg-black/95 text-xl font-medium text-white backdrop-blur-2xl transition-all duration-300 md:hidden",
          menuOpen ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0 pointer-events-none"
        )}
      >
        {navItems.map((item) => (
          <a key={item.id} href={item.href} className="transition hover:text-brand" onClick={() => setMenuOpen(false)}>
            {item.label}
          </a>
        ))}
        <a href="#connect" className="btn-glass" onClick={() => setMenuOpen(false)}>
          {nav.cta}
        </a>
        <button
          type="button"
          onClick={() => setMenuOpen(false)}
          className="glass absolute right-6 top-6 rounded-full p-2 hover:bg-white/10"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="size-6"
          >
            <path d="M18 6 6 18" />
            <path d="m6 6 12 12" />
          </svg>
        </button>
      </div>
    </>
  );
}
