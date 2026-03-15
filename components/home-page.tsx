"use client";

import Image from "next/image";
import workImage from "@/public/images/elias-appuhamy-work.jpeg";
import portraitSquareImage from "@/public/images/elias-appuhamy-portrait-square.jpeg";
import { ContactForm } from "@/components/contact-form";
import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import { useLocale } from "@/components/locale-provider";
import { SectionHeading } from "@/components/section-heading";
import { Iconify } from "@/components/ui/iconify";
import { Reveal } from "@/components/ui/reveal";

export function HomePage() {
  const { dictionary } = useLocale();
  const home = dictionary.home;

  return (
    <>
      <Navbar />

      <main className="px-4 pb-20">
        <section id="hero" className="anchor-section flex min-h-screen flex-col items-center pt-32">
          <Reveal className="mt-10 flex items-center gap-3 md:mt-20">
            <div className="group relative">
              <div className="hero-avatar-ring absolute -inset-1 rounded-full bg-gradient-to-r from-brand via-[#89ff74] to-skyGlow opacity-80 blur" />
              <Image
                id="avatar"
                src={workImage}
                alt="Elias Appuhamy, also known as Elyon, founder of Elyon Web"
                priority
                placeholder="blur"
                className="relative h-32 w-32 rounded-full border-4 border-black/50 object-cover object-top transition hover:scale-105 md:h-48 md:w-48"
              />
            </div>
          </Reveal>

          <Reveal delay={0.05}>
            <h1 className="mt-8 max-w-4xl text-balance text-center text-4xl font-semibold tracking-tight text-white md:text-7xl md:leading-tight">
              Elias Appuhamy
              <span className="mt-3 block text-2xl font-normal text-gray-300 md:text-4xl">
                {home.hero.subtitle}
              </span>
            </h1>
          </Reveal>

          <Reveal delay={0.1}>
            <a
              href="https://www.google.com/maps/place/Mettmann,+Germany"
              target="_blank"
              rel="noreferrer"
              className="mt-6 flex items-center justify-center gap-2 text-base text-gray-300 transition hover:text-white md:text-lg"
            >
              <Iconify icon="solar:map-point-linear" className="text-xl" />
              <span>{home.hero.location}</span>
            </a>
          </Reveal>

          <Reveal delay={0.14}>
            <p className="mt-6 max-w-2xl px-4 text-center text-base/7 text-gray-300 md:text-lg/8">
              {home.hero.description}
            </p>
          </Reveal>

          <Reveal delay={0.18}>
            <div className="mt-10 flex w-full flex-col items-center gap-4 max-md:w-full md:flex-row md:gap-6">
              {home.hero.buttons.map((button) => {
                const isExternal = "external" in button && button.external;

                return (
                  <a
                    key={button.label}
                    href={button.href}
                    target={isExternal ? "_blank" : undefined}
                    rel={isExternal ? "noreferrer" : undefined}
                    className="btn-glass group flex items-center justify-center gap-2 py-3 max-md:w-full"
                  >
                    <Iconify icon={button.icon} className="text-lg transition-colors duration-300 ease-out group-hover:text-brand" />
                    {button.label}
                  </a>
                );
              })}
            </div>
          </Reveal>

          <Reveal delay={0.22}>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              {home.hero.chips.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-white/10 bg-white/[0.05] px-4 py-2 text-xs uppercase tracking-[0.24em] text-[#dcf7d7]"
                >
                  {item}
                </span>
              ))}
            </div>
          </Reveal>
        </section>

        <section id="about" className="anchor-section pt-20 md:pt-32">
          <Reveal>
            <SectionHeading eyebrow={home.about.eyebrow} title={home.about.title} copy={home.about.copy} align="center" />
          </Reveal>

          <div className="mx-auto mt-12 grid max-w-6xl grid-cols-1 gap-8 md:grid-cols-[minmax(0,0.88fr)_minmax(0,1.12fr)] md:gap-12">
            <Reveal>
              <div className="relative mx-auto flex w-full max-w-[430px] items-center justify-center">
                <div className="absolute inset-4 rounded-[2rem] bg-gradient-to-br from-brand/20 via-transparent to-skyGlow/15 blur-3xl" />
                <div className="glass relative w-full overflow-hidden rounded-[2rem] p-3">
                  <div className="overflow-hidden rounded-[1.6rem] border border-white/10 bg-black/40">
                    <Image
                      src={portraitSquareImage}
                      alt="Portrait of Elias Appuhamy, founder and web designer"
                      placeholder="blur"
                      sizes="(max-width: 768px) 100vw, 430px"
                      className="h-auto w-full object-cover object-top"
                    />
                  </div>
                  <div className="mt-3 grid grid-cols-2 gap-3">
                    {home.about.highlights.slice(0, 2).map((item) => (
                      <div key={item.title} className="rounded-[1.2rem] border border-white/10 bg-white/[0.04] p-4">
                        <Iconify icon={item.icon} className="text-xl text-brand" />
                        <p className="mt-3 text-sm font-medium text-white">{item.title}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.08}>
              <div className="glass rounded-[2rem] p-6 sm:p-8">
                <div className="flex flex-col justify-center space-y-4 text-gray-300">
                  {home.about.paragraphs.map((paragraph) => (
                    <p key={paragraph} className="leading-8 first:text-lg first:leading-8 first:text-white/95">
                      {paragraph}
                    </p>
                  ))}
                </div>

                <div className="mt-6 grid gap-3 sm:grid-cols-2">
                  {home.about.highlights.slice(2).map((item, index) => (
                    <Reveal key={item.title} delay={0.12 + index * 0.04}>
                      <div className="rounded-[1.2rem] border border-white/10 bg-white/[0.04] p-4">
                        <div className="flex items-start gap-3">
                          <div className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/[0.06] text-brand">
                            <Iconify icon={item.icon} className="text-xl" />
                          </div>
                          <div>
                            <p className="text-sm font-medium text-white">{item.title}</p>
                            <p className="mt-1 text-sm leading-6 text-gray-300">{item.text}</p>
                          </div>
                        </div>
                      </div>
                    </Reveal>
                  ))}
                </div>

                <div className="mt-6 rounded-[1.5rem] border border-brand/15 bg-brand/[0.06] p-5">
                  <p className="text-sm leading-7 text-white/90">{home.about.note}</p>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        <section id="expertise" className="anchor-section pt-20 md:pt-32">
          <Reveal>
            <SectionHeading
              eyebrow={home.expertise.eyebrow}
              title={home.expertise.title}
              copy={home.expertise.copy}
              align="center"
            />
          </Reveal>

          <div className="mx-auto mt-10 grid max-w-6xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {home.expertise.cards.map((card, index) => (
              <Reveal key={card.title} delay={index * 0.05}>
                <div className="group glass flex h-full cursor-default flex-col space-y-4 rounded-2xl p-6 transition duration-300 hover:-translate-y-1">
                  <div className={`flex h-12 w-12 items-center justify-center rounded-lg transition ${card.bg}`}>
                    <Iconify icon={card.icon} className={`text-2xl ${card.color}`} />
                  </div>
                  <h3 className="text-lg font-medium text-white">{card.title}</h3>
                  <p className="text-sm leading-relaxed text-gray-300">{card.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        <section id="journey" className="anchor-section pt-20 md:pt-32">
          <Reveal>
            <SectionHeading eyebrow={home.journey.eyebrow} title={home.journey.title} copy={home.journey.copy} align="center" />
          </Reveal>

          <div className="mx-auto mt-10 grid max-w-6xl grid-cols-1 gap-6 md:grid-cols-2">
            {home.journey.cards.map((item, index) => (
              <Reveal key={item.title} delay={index * 0.05}>
                <div className="group glass flex h-full flex-col space-y-4 rounded-2xl p-6 transition duration-300 hover:-translate-y-1">
                  <div className="flex items-center gap-3">
                    <div
                      className={`flex h-12 w-12 items-center justify-center rounded-lg transition ${
                        item.accent === "green"
                          ? "bg-brand/10 group-hover:bg-brand/20"
                          : "bg-skyGlow/10 group-hover:bg-skyGlow/20"
                      }`}
                    >
                      <Iconify
                        icon={item.icon}
                        className={`text-2xl ${item.accent === "green" ? "text-brand" : "text-skyGlow"}`}
                      />
                    </div>
                    <h3 className="text-lg font-medium text-white">{item.title}</h3>
                  </div>
                  <p className="text-sm leading-relaxed text-gray-300">{item.text}</p>

                  {index === 0 ? (
                    <div className="space-y-3 pt-2 text-sm text-gray-300">
                      {home.journey.timeline.map((timeline) => (
                        <div key={timeline.title} className="rounded-xl border border-white/10 bg-white/[0.04] p-4">
                          <p className="text-xs uppercase tracking-[0.24em] text-wine-200">{timeline.date}</p>
                          <p className="mt-2 font-medium text-white">{timeline.title}</p>
                          <p className="mt-2 leading-6">{timeline.description}</p>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="space-y-3 pt-2 text-sm text-gray-300">
                      {home.journey.builds.map((work) => (
                        <div key={work.title} className="rounded-xl border border-white/10 bg-white/[0.04] p-4">
                          <div className="flex items-start gap-3">
                            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-skyGlow/10 text-skyGlow">
                              <Iconify icon={work.icon} className="text-xl" />
                            </div>
                            <div>
                              <p className="font-medium text-white">{work.title}</p>
                              <p className="mt-2 leading-6 text-gray-300">{work.text}</p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        <section id="tech-stack" className="pt-20 md:pt-32">
          <Reveal>
            <SectionHeading eyebrow={home.tech.eyebrow} title={home.tech.title} copy={home.tech.copy} align="center" />
          </Reveal>

          <div className="mx-auto mt-10 grid max-w-6xl grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
            {home.tech.highlights.map((item, index) => (
              <Reveal key={item.title} delay={index * 0.05}>
                <div className="glass h-full rounded-[1.7rem] p-5">
                  <div className={`flex h-11 w-11 items-center justify-center rounded-full ${item.tone}`}>
                    <Iconify icon={item.icon} className="text-xl" />
                  </div>
                  <p className="mt-4 text-sm font-medium uppercase tracking-[0.22em] text-white/90">
                    {item.title}
                  </p>
                  <p className="mt-3 text-sm leading-7 text-gray-300">{item.text}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <div className="mx-auto mt-6 grid max-w-6xl grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
            {home.tech.items.map((item, index) => (
              <Reveal key={item.title} delay={index * 0.03}>
                <div className="tech-item group glass relative flex min-h-[116px] cursor-pointer flex-col items-center justify-center gap-3 rounded-[1.35rem] p-4 transition duration-300 hover:-translate-y-1 hover:border-brand/30">
                  <div className="relative flex h-12 w-12 shrink-0 items-center justify-center">
                    <Iconify
                      icon={item.icon}
                      className="text-[2.15rem] text-white transition duration-300 group-hover:opacity-0"
                    />
                    <Iconify
                      icon={item.icon}
                      className="absolute text-[2.15rem] opacity-0 transition duration-300 group-hover:opacity-100"
                      style={{ color: item.color }}
                    />
                  </div>
                  <span className="text-center text-xs font-medium text-gray-300 transition duration-300 group-hover:text-white">
                    {item.title}
                  </span>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        <section id="connect" className="anchor-section mb-32 pt-20 md:pt-32">
          <Reveal>
            <SectionHeading
              eyebrow={home.connect.eyebrow}
              title={home.connect.title}
              copy={home.connect.copy}
              align="center"
            />
          </Reveal>

          <div className="mx-auto mt-12 grid w-full max-w-6xl grid-cols-1 gap-6 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)]">
            <Reveal>
              <div className="glass rounded-[2rem] p-6 sm:p-8">
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-wine-200">{home.connect.formTag}</p>
                <h3 className="mt-4 font-display text-2xl font-semibold tracking-[-0.03em] text-white sm:text-3xl">
                  {home.connect.formTitle}
                </h3>
                <p className="mt-4 max-w-2xl text-sm leading-7 text-gray-300 sm:text-base">
                  {home.connect.formCopy}
                </p>
                <div className="mt-8">
                  <ContactForm />
                </div>
              </div>
            </Reveal>

            <div className="grid gap-6">
              <Reveal delay={0.05}>
                <div className="glass rounded-[2rem] p-6 sm:p-8">
                  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-wine-200">{home.connect.openToTag}</p>
                  <p className="mt-4 text-lg leading-8 text-white/95 sm:text-xl">{home.connect.openToText}</p>
                </div>
              </Reveal>

              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                {home.connect.items.map((item, index) => (
                  <Reveal key={item.title} delay={0.08 + index * 0.05}>
                    <a
                      href={item.href}
                      target={item.href.startsWith("http") ? "_blank" : undefined}
                      rel={item.href.startsWith("http") ? "noreferrer" : undefined}
                      className="glass group flex h-full w-full flex-col items-center gap-4 rounded-[1.35rem] p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:border-brand/30 hover:bg-white/5"
                    >
                      <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-white/10 text-white shadow-lg transition group-hover:bg-brand/20">
                        <Iconify icon={item.icon} className="text-[1.8rem]" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold">{item.title}</h3>
                        <p className="mt-1 text-sm text-gray-300">{item.text}</p>
                      </div>
                    </a>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
