import { siteConfig } from "@/lib/site";

export type Locale = "de" | "en";

export const translations = {
  en: {
    nav: {
      links: [
        { id: "hero", href: "#hero", label: "Home" },
        { id: "about", href: "#about", label: "About Me" },
        { id: "expertise", href: "#expertise", label: "Expertise" },
        { id: "connect", href: "#connect", label: "Connect" }
      ],
      cta: "Contact Me",
      openMenu: "Open menu",
      closeMenu: "Close menu"
    },
    home: {
      hero: {
        subtitle: "Founder. Builder. Visionary.",
        location: "Mettmann, Germany",
        description:
          "Official website of Elias Appuhamy, also known as Elyon. Founder and CEO of Elyon Web. Focused on web design, development, digital systems, and long-term company building.",
        buttons: [
          { label: "Get in touch", href: "#connect", icon: "solar:letter-linear" },
          { label: "Elyon Web", href: siteConfig.siteUrl, icon: "solar:global-linear", external: true }
        ],
        chips: ["Design", "Development", "Systems", "Long-term thinking"]
      },
      about: {
        eyebrow: "About Elias Appuhamy",
        title: "About Elias Appuhamy",
        copy:
          "A closer look at Elias Appuhamy, the standards behind his work, and the long-term direction he is building through Elyon Web.",
        paragraphs: [
          "Elias Appuhamy is a founder and builder from Mettmann, Germany, focused on the intersection of design, technology, and long-term business building.",
          "He approaches digital work with structure, clarity, and a serious standard for quality instead of short-term hype.",
          "Through Elyon Web, he designs and develops modern websites for businesses while continuing to sharpen the mindset required for larger ventures over time."
        ],
        highlights: [
          {
            title: "Founder of Elyon Web",
            text: "Building a focused digital brand with clear standards.",
            icon: "solar:stars-line-duotone"
          },
          {
            title: "Based in Germany",
            text: "Working from Mettmann, North Rhine-Westphalia.",
            icon: "solar:map-point-wave-linear"
          },
          {
            title: "Design + Development",
            text: "Bringing visual direction and clean execution together.",
            icon: "solar:code-circle-linear"
          },
          {
            title: "Long-term mindset",
            text: "Built around systems, consistency, and durable value.",
            icon: "solar:target-linear"
          }
        ],
        note: "The aim is simple: build credible work and let the standard speak for itself."
      },
      expertise: {
        eyebrow: "Expertise",
        title: "Expertise",
        copy: "Key areas where Elias focuses his energy and makes his standards visible.",
        cards: [
          {
            title: "Design",
            text: "Modern websites with clear visual direction and a premium feel.",
            icon: "solar:palette-round-linear",
            color: "text-brand",
            bg: "bg-brand/10 group-hover:bg-brand/20"
          },
          {
            title: "Development",
            text: "Clean technical execution with a focus on performance, structure, and mobile precision.",
            icon: "solar:code-square-linear",
            color: "text-skyGlow",
            bg: "bg-skyGlow/10 group-hover:bg-skyGlow/20"
          },
          {
            title: "Systems",
            text: "Digital foundations built to feel sharp, work reliably, and scale with clarity.",
            icon: "solar:layers-minimalistic-linear",
            color: "text-[#9af66b]",
            bg: "bg-[#9af66b]/10 group-hover:bg-[#9af66b]/20"
          },
          {
            title: "Vision",
            text: "Web design as part of a broader entrepreneurial direction with a long-term horizon.",
            icon: "solar:rocket-2-linear",
            color: "text-[#7ee7d8]",
            bg: "bg-[#7ee7d8]/10 group-hover:bg-[#7ee7d8]/20"
          }
        ]
      },
      journey: {
        eyebrow: "Journey",
        title: "Journey",
        copy: "A look at the growth, positioning, and the work Elias is building right now.",
        cards: [
          {
            title: "Journey",
            text: "Milestones, decisions, and growth steps on the path from curiosity about design and entrepreneurship toward a clear founder direction.",
            icon: "solar:compass-linear",
            accent: "green"
          },
          {
            title: "What I am building",
            text: "Digital foundations, brand presence, modern websites, and entrepreneurial ideas meant to grow over time.",
            icon: "solar:layers-minimalistic-linear",
            accent: "blue"
          }
        ],
        timeline: [
          {
            date: "September 2025 - December 2025",
            title: "Marketing Manager at MoreManu",
            description:
              "This is where Elias gained his first practical experience in marketing, brand communication, and digital positioning."
          },
          {
            date: "January 2026",
            title: "Concept development for the fashion brand Suitea",
            description: "A creative step toward brand building and entrepreneurial thinking."
          },
          {
            date: "Since February 2026",
            title: "Professional Web Designer and Developer",
            description: "Through Elyon Web, Elias focuses on modern websites and digital brand presence."
          }
        ],
        builds: [
          {
            title: "Digital foundations",
            text: "Modern websites and digital structures.",
            icon: "solar:window-frame-linear"
          },
          {
            title: "Brand presence",
            text: "Design and clarity for businesses.",
            icon: "solar:magic-stick-3-linear"
          },
          {
            title: "Web design and development",
            text: "Clean, modern websites.",
            icon: "solar:code-square-linear"
          },
          {
            title: "Entrepreneurial projects",
            text: "Long-term development of original ideas.",
            icon: "solar:rocket-2-linear"
          }
        ]
      },
      tech: {
        eyebrow: "Technology Stack",
        title: "Technology Stack",
        copy: "A working stack built around modern frontend engineering, clear interface design, and reliable digital delivery.",
        highlights: [
          {
            title: "Core Frontend",
            text: "Next.js, TypeScript, Tailwind, and modern component architecture.",
            icon: "solar:widget-3-linear",
            tone: "text-brand bg-brand/10"
          },
          {
            title: "Interface Design",
            text: "Figma-driven layouts, responsive systems, and sharp visual hierarchy.",
            icon: "solar:palette-round-linear",
            tone: "text-skyGlow bg-skyGlow/10"
          },
          {
            title: "SEO & Structure",
            text: "Clean structure, semantic markup, and search visibility built with intent.",
            icon: "solar:global-linear",
            tone: "text-[#9af66b] bg-[#9af66b]/10"
          },
          {
            title: "Delivery Workflow",
            text: "Git, GitHub, Vercel, PostCSS, and deployment tooling focused on clean delivery and maintainability.",
            icon: "solar:server-path-linear",
            tone: "text-[#9af66b] bg-[#9af66b]/10"
          }
        ],
        items: [
          { title: "Next.js", icon: "simple-icons:nextdotjs", color: "#ffffff" },
          { title: "TypeScript", icon: "simple-icons:typescript", color: "#3178C6" },
          { title: "JavaScript", icon: "simple-icons:javascript", color: "#F7DF1E" },
          { title: "Tailwind", icon: "simple-icons:tailwindcss", color: "#06B6D4" },
          { title: "HeroUI", icon: "solar:widget-linear", color: "#78F06D" },
          { title: "Figma", icon: "simple-icons:figma", color: "#F24E1E" },
          { title: "Node.js", icon: "simple-icons:nodedotjs", color: "#339933" },
          { title: "GitHub", icon: "simple-icons:github", color: "#ffffff" },
          { title: "Git", icon: "simple-icons:git", color: "#F05032" },
          { title: "npm", icon: "simple-icons:npm", color: "#CB3837" },
          { title: "VS Code", icon: "simple-icons:visualstudiocode", color: "#007ACC" },
          { title: "Formspree", icon: "solar:mailbox-linear", color: "#58C5FF" },
          { title: "Vercel", icon: "simple-icons:vercel", color: "#ffffff" },
          { title: "SEO", icon: "solar:global-linear", color: "#9AF66B" },
          { title: "Responsive UI", icon: "solar:smartphone-linear", color: "#58C5FF" },
          { title: "Motion", icon: "solar:bolt-linear", color: "#F5C15D" },
          { title: "UX", icon: "solar:users-group-rounded-linear", color: "#78F06D" },
          { title: "Accessibility", icon: "solar:accessibility-linear", color: "#C5FF7A" }
        ]
      },
      connect: {
        eyebrow: "Connect",
        title: "Connect",
        copy: "For project inquiries, thoughtful introductions, or conversations about building something with long-term value.",
        formTag: "Contact Form",
        formTitle: "Start a serious conversation.",
        formCopy:
          "Whether it is about a project, a digital presence, a founder journey, or a thoughtful introduction, this is the simplest way to reach out directly.",
        openToTag: "Open To",
        openToText:
          "Conversations with founders, businesses, creative partners, and people who value clear thinking, modern execution, and long-term ambition.",
        items: [
          {
            title: "Email",
            text: "Reach out directly",
            href: `mailto:${siteConfig.email}`,
            icon: "solar:letter-linear"
          },
          {
            title: "Elyon Web",
            text: "See the project",
            href: siteConfig.siteUrl,
            icon: "solar:global-linear"
          },
          {
            title: "Instagram",
            text: "Follow @elyon.build",
            href: "https://www.instagram.com/elyon.build",
            icon: "solar:camera-linear"
          },
          {
            title: "Location",
            text: "Mettmann, North Rhine-Westphalia",
            href: "https://www.google.com/maps/place/Mettmann,+Germany",
            icon: "solar:map-point-linear"
          }
        ]
      }
    },
    form: {
      name: "Name",
      email: "Email",
      message: "Message",
      namePlaceholder: "Your name",
      emailPlaceholder: "yourname@example.com",
      messagePlaceholder: "What is this about?",
      helper:
        "Conversations about entrepreneurship, technology, design, and building ideas are always welcome.",
      submit: "Send message"
    },
    footer: {
      legalNotice: "Legal Notice",
      privacyPolicy: "Privacy Policy"
    },
    legal: {
      backHome: "Back to home",
      eyebrow: "Legal",
      noticeTitle: "Legal Notice",
      noticeDescription: `Legal notice for the website of ${siteConfig.name}.`,
      noticeSections: [
        {
          heading: "Information pursuant to Section 5 of the German Digital Services Act (DDG) and Section 18 (2) of the German State Media Treaty (MStV)",
          body: [
            "Elias Appuhamy",
            "represented by his legal guardian",
            "Christina Appuhamy",
            "Ackerstraße 31",
            "40822 Mettmann",
            "Germany"
          ]
        },
        {
          heading: "Contact",
          body: [`Email: ${siteConfig.email}`]
        },
        {
          heading: "Responsible for content pursuant to Section 18 (2) MStV",
          body: [
            "Elias Appuhamy",
            "represented by his legal guardian",
            "Christina Appuhamy",
            "Ackerstraße 31",
            "40822 Mettmann",
            "Germany"
          ]
        },
        {
          heading: "Notice",
          body: [
            "This website serves the personal presentation of Elias Appuhamy and the presentation of his projects and activities.",
            "The content of this website does not constitute a direct commercial offer.",
            "Business services, where applicable, are handled through the company Elyon Web."
          ]
        }
      ],
      privacyTitle: "Privacy Policy",
      privacyDescription: `Privacy policy for the website of ${siteConfig.name}.`,
      privacySections: [
        {
          heading: "General information",
          body: [
            "This privacy policy explains how personal data is processed when you visit this website.",
            "The website is the personal portfolio and personal brand website of Elias Appuhamy and is used to present his profile, projects, and journey as a web designer.",
            "Use of the website is generally possible without actively entering personal data. However, when the website is accessed, technically necessary data is processed, especially through hosting and delivery of the website.",
            "In addition to the GDPR, the German Federal Data Protection Act (BDSG) and Section 25 TDDDG may apply where relevant.",
            "This website currently does not use analytics or tracking tools for marketing or profiling purposes."
          ]
        },
        {
          heading: "Controller",
          body: [
            "Elias Appuhamy",
            "represented by his legal guardian",
            "Christina Appuhamy",
            "Ackerstraße 31",
            "40822 Mettmann",
            "Germany",
            `Email: ${siteConfig.email}`
          ]
        },
        {
          heading: "Hosting via Vercel",
          body: [
            "This website is hosted and delivered via Vercel.",
            "Provider: Vercel Inc., 440 N Barranca Avenue #4133, Covina, CA 91723, United States.",
            "When the website is accessed, technically necessary data may be processed through Vercel's infrastructure, including IP address, time of access, requested URL, referrer URL, browser type, operating system, status codes, and connection-related information.",
            "Processing takes place for the purpose of secure, stable, and performant delivery of the website.",
            "The legal basis is Art. 6(1)(f) GDPR. The legitimate interest lies in the secure and reliable operation of the website.",
            "Vercel uses a globally distributed infrastructure including CDN and edge technologies. Processing of personal data outside the European Union, especially in the United States, cannot be ruled out.",
            "According to Vercel's published information, international data transfers may be based on appropriate safeguards such as standard contractual clauses. Vercel also refers to its Data Privacy Framework certification.",
            "Further information: https://vercel.com/legal/privacy-policy",
            "Data Processing Addendum: https://vercel.com/legal/dpa"
          ]
        },
        {
          heading: "Access data and server log files",
          body: [
            "When you visit this website, technical access data is processed automatically.",
            "This may include IP address, date and time of access, requested page or file, amount of data transferred, HTTP status code, referrer URL, browser type and version, operating system, and, where applicable, the hostname of the accessing device.",
            "This data is technically required to deliver the website, ensure stability, detect misuse, and maintain system security.",
            "The legal basis is Art. 6(1)(f) GDPR. The legitimate interest lies in the secure and error-free provision of the website."
          ]
        },
        {
          heading: "Cookies and similar technologies",
          body: [
            "At the current stage, this website does not use cookies or similar technologies for analytics, tracking, or marketing purposes.",
            "If technically necessary storage or access to information on your device is required in individual cases, this is based on Section 25(2) no. 2 TDDDG because it is strictly necessary to provide the digital service you expressly requested.",
            "Where personal data is processed in that context, the legal basis is Art. 6(1)(f) GDPR."
          ]
        },
        {
          heading: "Contact form",
          body: [
            "A contact form is provided on this website. If it is actively connected in production, the data you enter, especially your name, email address, and message, will be processed to handle your request.",
            "The form is technically prepared for Formspree. If Formspree is activated, the submitted data will be transmitted to Formspree and processed there for message handling.",
            "Depending on the specific setup, technical metadata such as IP address, timestamp, referrer data, and security-related information for spam prevention may also be processed.",
            "Processing takes place for the purpose of handling your message and communicating with you.",
            "The legal basis is Art. 6(1)(f) GDPR. If the request is aimed at initiating a contractual relationship, the additional legal basis is Art. 6(1)(b) GDPR.",
            "Further information: https://formspree.io/security/"
          ]
        },
        {
          heading: "External icon requests (Iconify)",
          body: [
            "The website uses the library @iconify/react to display icons.",
            "According to the library documentation, icon data can be loaded on demand via the public Iconify API.",
            "This may result in a connection between your browser and Iconify servers. In that context, your IP address, browser information, the time of access, and the requested icon resource may be processed.",
            "The legal basis is Art. 6(1)(f) GDPR. The legitimate interest lies in a consistent and functional user interface.",
            "Further information: https://iconify.design/"
          ]
        },
        {
          heading: "Fonts",
          body: [
            "This website uses the font Poppins via next/font/google within the Next.js framework.",
            "According to the current implementation, the font files are fetched during the build process and then delivered locally with the website.",
            "When users visit the deployed website, the browser does not directly load the font files from Google servers.",
            "Based on the current implementation, no separate transfer of personal data to Google takes place solely for the display of the font on the live website."
          ]
        },
        {
          heading: "Rights of data subjects",
          body: [
            "You have the rights provided by law, in particular the right of access under Art. 15 GDPR, the right to rectification under Art. 16 GDPR, the right to erasure under Art. 17 GDPR, the right to restriction of processing under Art. 18 GDPR, the right to data portability under Art. 20 GDPR, and the right to object under Art. 21 GDPR.",
            "To exercise these rights, you can contact the controller at any time."
          ]
        },
        {
          heading: "Withdrawal of consent",
          body: [
            "If the processing of personal data is based on your consent, you may withdraw that consent at any time with effect for the future.",
            "The lawfulness of processing carried out before the withdrawal remains unaffected."
          ]
        },
        {
          heading: "Right to lodge a complaint with a supervisory authority",
          body: [
            "You have the right to lodge a complaint with a data protection supervisory authority if you believe that the processing of your personal data is unlawful.",
            "The competent supervisory authority in North Rhine-Westphalia is the Landesbeauftragte für Datenschutz und Informationsfreiheit Nordrhein-Westfalen, Postfach 20 04 44, 40102 Düsseldorf, Germany.",
            "Phone: +49 (0)211 38424-0",
            "Email: poststelle@ldi.nrw.de",
            "Website: https://www.ldi.nrw.de/"
          ]
        }
      ]
    }
  },
  de: {
    nav: {
      links: [
        { id: "hero", href: "#hero", label: "Start" },
        { id: "about", href: "#about", label: "Über mich" },
        { id: "expertise", href: "#expertise", label: "Kompetenzen" },
        { id: "connect", href: "#connect", label: "Kontakt" }
      ],
      cta: "Kontakt",
      openMenu: "Menü öffnen",
      closeMenu: "Menü schließen"
    },
    home: {
      hero: {
        subtitle: "Founder. Builder. Visionär.",
        location: "Mettmann, Deutschland",
        description:
          "Offizielle Website von Elias Appuhamy, auch bekannt als Elyon. Founder und CEO von Elyon Web. Fokus auf Webdesign, Entwicklung, digitale Systeme und langfristigen Unternehmensaufbau.",
        buttons: [
          { label: "Kontakt aufnehmen", href: "#connect", icon: "solar:letter-linear" },
          { label: "Elyon Web", href: siteConfig.siteUrl, icon: "solar:global-linear", external: true }
        ],
        chips: ["Design", "Entwicklung", "Systeme", "Langfristiges Denken"]
      },
      about: {
        eyebrow: "Über Elias Appuhamy",
        title: "Über Elias Appuhamy",
        copy:
          "Ein genauerer Blick auf Elias Appuhamy, seine Standards und die Richtung, die er mit Elyon Web aufbaut.",
        paragraphs: [
          "Elias Appuhamy ist ein Founder und Builder aus Mettmann mit klarem Fokus auf Design, Technologie und langfristigen Unternehmensaufbau.",
          "Er betrachtet digitale Arbeit mit Struktur, Klarheit und einem ernsthaften Qualitätsanspruch statt mit kurzfristigem Hype.",
          "Mit Elyon Web entwickelt er moderne Websites für Unternehmen und schärft gleichzeitig die Denkweise, die für größere Vorhaben über viele Jahre nötig ist."
        ],
        highlights: [
          {
            title: "Founder von Elyon Web",
            text: "Aufbau einer fokussierten digitalen Marke mit klaren Standards.",
            icon: "solar:stars-line-duotone"
          },
          {
            title: "Standort Deutschland",
            text: "Arbeitet aus Mettmann in Nordrhein-Westfalen.",
            icon: "solar:map-point-wave-linear"
          },
          {
            title: "Design + Entwicklung",
            text: "Visuelle Richtung und saubere Umsetzung in einer Linie.",
            icon: "solar:code-circle-linear"
          },
          {
            title: "Langfristige Denkweise",
            text: "Geprägt von Systemen, Konsistenz und nachhaltigem Aufbau.",
            icon: "solar:target-linear"
          }
        ],
        note: "Das Ziel ist einfach: glaubwürdige Arbeit liefern und den Standard für sich sprechen lassen."
      },
      expertise: {
        eyebrow: "Kompetenzen",
        title: "Kompetenzen",
        copy: "Die Bereiche, in denen Elias seine Energie bündelt und seine Standards sichtbar macht.",
        cards: [
          {
            title: "Design",
            text: "Moderne Websites mit klarer visueller Richtung und hochwertiger Wirkung.",
            icon: "solar:palette-round-linear",
            color: "text-brand",
            bg: "bg-brand/10 group-hover:bg-brand/20"
          },
          {
            title: "Entwicklung",
            text: "Saubere technische Umsetzung mit Fokus auf Performance, Struktur und mobile Präzision.",
            icon: "solar:code-square-linear",
            color: "text-skyGlow",
            bg: "bg-skyGlow/10 group-hover:bg-skyGlow/20"
          },
          {
            title: "Systeme",
            text: "Digitale Grundlagen, die klar wirken, zuverlässig funktionieren und mitwachsen können.",
            icon: "solar:layers-minimalistic-linear",
            color: "text-[#9af66b]",
            bg: "bg-[#9af66b]/10 group-hover:bg-[#9af66b]/20"
          },
          {
            title: "Vision",
            text: "Webdesign als Teil einer größeren unternehmerischen Richtung mit langfristigem Horizont.",
            icon: "solar:rocket-2-linear",
            color: "text-[#7ee7d8]",
            bg: "bg-[#7ee7d8]/10 group-hover:bg-[#7ee7d8]/20"
          }
        ]
      },
      journey: {
        eyebrow: "Weg",
        title: "Weg",
        copy: "Ein Blick auf Entwicklung, Positionierung und die Arbeit, an der Elias aktuell baut.",
        cards: [
          {
            title: "Journey",
            text: "Meilensteine, Entscheidungen und Wachstumsschritte auf dem Weg von der Neugier für Design und Unternehmertum hin zu einer klaren Founder-Richtung.",
            icon: "solar:compass-linear",
            accent: "green"
          },
          {
            title: "Woran ich arbeite",
            text: "Digitale Grundlagen, Markenauftritte, moderne Websites und unternehmerische Ideen mit langfristigem Potenzial.",
            icon: "solar:layers-minimalistic-linear",
            accent: "blue"
          }
        ],
        timeline: [
          {
            date: "September 2025 - Dezember 2025",
            title: "Marketingmanager bei MoreManu",
            description:
              "Hier sammelte Elias erste praktische Erfahrungen in Marketing, Markenkommunikation und digitaler Positionierung."
          },
          {
            date: "Januar 2026",
            title: "Konzeptentwicklung der Modemarke Suitea",
            description: "Ein kreativer Schritt in Richtung Markenaufbau und unternehmerisches Denken."
          },
          {
            date: "Seit Februar 2026",
            title: "Professioneller Webdesigner und Developer",
            description: "Mit Elyon Web konzentriert sich Elias auf moderne Websites und digitale Markenauftritte."
          }
        ],
        builds: [
          {
            title: "Digitale Grundlagen",
            text: "Moderne Websites und digitale Strukturen.",
            icon: "solar:window-frame-linear"
          },
          {
            title: "Markenauftritte",
            text: "Design und Klarheit für Unternehmen.",
            icon: "solar:magic-stick-3-linear"
          },
          {
            title: "Webdesign und Entwicklung",
            text: "Saubere, moderne Websites.",
            icon: "solar:code-square-linear"
          },
          {
            title: "Unternehmerische Projekte",
            text: "Langfristiger Aufbau eigener Ideen.",
            icon: "solar:rocket-2-linear"
          }
        ]
      },
      tech: {
        eyebrow: "Technologie",
        title: "Technology Stack",
        copy: "Ein fokussierter Stack für moderne Frontend-Umsetzung, klares Interface-Design und saubere digitale Auslieferung.",
        highlights: [
          {
            title: "Core Frontend",
            text: "Next.js, TypeScript, Tailwind und moderne Component-Architektur.",
            icon: "solar:widget-3-linear",
            tone: "text-brand bg-brand/10"
          },
          {
            title: "Interface Design",
            text: "Figma-basierte Layouts, responsive Systeme und eine klare visuelle Hierarchie.",
            icon: "solar:palette-round-linear",
            tone: "text-skyGlow bg-skyGlow/10"
          },
          {
            title: "SEO & Struktur",
            text: "Saubere Struktur, semantisches Markup und Sichtbarkeit mit klarer technischer Grundlage.",
            icon: "solar:global-linear",
            tone: "text-[#9af66b] bg-[#9af66b]/10"
          },
          {
            title: "Delivery Workflow",
            text: "Git, GitHub, Vercel, PostCSS und ein sauberer Delivery-Prozess.",
            icon: "solar:server-path-linear",
            tone: "text-[#9af66b] bg-[#9af66b]/10"
          }
        ],
        items: [
          { title: "Next.js", icon: "simple-icons:nextdotjs", color: "#ffffff" },
          { title: "TypeScript", icon: "simple-icons:typescript", color: "#3178C6" },
          { title: "JavaScript", icon: "simple-icons:javascript", color: "#F7DF1E" },
          { title: "Tailwind", icon: "simple-icons:tailwindcss", color: "#06B6D4" },
          { title: "HeroUI", icon: "solar:widget-linear", color: "#78F06D" },
          { title: "Figma", icon: "simple-icons:figma", color: "#F24E1E" },
          { title: "Node.js", icon: "simple-icons:nodedotjs", color: "#339933" },
          { title: "GitHub", icon: "simple-icons:github", color: "#ffffff" },
          { title: "Git", icon: "simple-icons:git", color: "#F05032" },
          { title: "npm", icon: "simple-icons:npm", color: "#CB3837" },
          { title: "VS Code", icon: "simple-icons:visualstudiocode", color: "#007ACC" },
          { title: "Formspree", icon: "solar:mailbox-linear", color: "#58C5FF" },
          { title: "Vercel", icon: "simple-icons:vercel", color: "#ffffff" },
          { title: "SEO", icon: "solar:global-linear", color: "#9AF66B" },
          { title: "Responsive UI", icon: "solar:smartphone-linear", color: "#58C5FF" },
          { title: "Motion", icon: "solar:bolt-linear", color: "#F5C15D" },
          { title: "UX", icon: "solar:users-group-rounded-linear", color: "#78F06D" },
          { title: "Barrierefreiheit", icon: "solar:accessibility-linear", color: "#C5FF7A" }
        ]
      },
      connect: {
        eyebrow: "Kontakt",
        title: "Kontakt",
        copy: "Für Projektanfragen, gute Einführungen oder Gespräche über Ideen mit langfristigem Wert.",
        formTag: "Kontaktformular",
        formTitle: "Ein ernsthaftes Gespräch starten.",
        formCopy:
          "Ob es um ein Projekt, einen digitalen Auftritt, eine Founder-Reise oder einen sinnvollen Austausch geht: Hier erreichst du Elias direkt.",
        openToTag: "Offen für",
        openToText:
          "Gespräche mit Foundern, Unternehmen, kreativen Partnern und Menschen, die klares Denken, moderne Umsetzung und langfristige Ambition schätzen.",
        items: [
          {
            title: "E-Mail",
            text: "Direkt schreiben",
            href: `mailto:${siteConfig.email}`,
            icon: "solar:letter-linear"
          },
          {
            title: "Elyon Web",
            text: "Projekt ansehen",
            href: siteConfig.siteUrl,
            icon: "solar:global-linear"
          },
          {
            title: "Instagram",
            text: "Folge @elyon.build",
            href: "https://www.instagram.com/elyon.build",
            icon: "solar:camera-linear"
          },
          {
            title: "Standort",
            text: "Mettmann, Nordrhein-Westfalen",
            href: "https://www.google.com/maps/place/Mettmann,+Germany",
            icon: "solar:map-point-linear"
          }
        ]
      }
    },
    form: {
      name: "Name",
      email: "E-Mail",
      message: "Nachricht",
      namePlaceholder: "Dein Name",
      emailPlaceholder: "deinname@beispiel.de",
      messagePlaceholder: "Worum geht es?",
      helper:
        "Gespräche über Unternehmertum, Technologie, Design und den Aufbau von Ideen sind jederzeit willkommen.",
      submit: "Nachricht senden"
    },
    footer: {
      legalNotice: "Impressum",
      privacyPolicy: "Datenschutz"
    },
    legal: {
      backHome: "Zurück zur Startseite",
      eyebrow: "Rechtliches",
      noticeTitle: "Impressum",
      noticeDescription: `Impressum für die Website von ${siteConfig.name}.`,
      noticeSections: [
        {
          heading: "Angaben gemäß § 5 Digitale-Dienste-Gesetz (DDG) sowie § 18 Abs. 2 Medienstaatsvertrag (MStV)",
          body: [
            "Elias Appuhamy",
            "vertreten durch die Erziehungsberechtigte",
            "Christina Appuhamy",
            "Ackerstraße 31",
            "40822 Mettmann",
            "Deutschland"
          ]
        },
        {
          heading: "Kontakt",
          body: [`E-Mail: ${siteConfig.email}`]
        },
        {
          heading: "Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV",
          body: [
            "Elias Appuhamy",
            "vertreten durch die Erziehungsberechtigte",
            "Christina Appuhamy",
            "Ackerstraße 31",
            "40822 Mettmann",
            "Deutschland"
          ]
        },
        {
          heading: "Hinweis",
          body: [
            "Diese Website dient der persönlichen Darstellung von Elias Appuhamy sowie der Präsentation seiner Projekte und Tätigkeiten.",
            "Die Inhalte dieser Website stellen kein unmittelbares geschäftliches Angebot dar.",
            "Geschäftliche Dienstleistungen werden gegebenenfalls über das Unternehmen Elyon Web abgewickelt."
          ]
        }
      ],
      privacyTitle: "Datenschutz",
      privacyDescription: `Datenschutzhinweise für die Website von ${siteConfig.name}.`,
      privacySections: [
        {
          heading: "Allgemeine Hinweise",
          body: [
            "Diese Datenschutzerklärung informiert darüber, wie personenbezogene Daten beim Besuch dieser Website verarbeitet werden.",
            "Die Website ist die persönliche Portfolio- und Personal-Brand-Website von Elias Appuhamy und dient der Darstellung seiner Person, seiner Projekte und seines Weges als Webdesigner.",
            "Eine Nutzung der Website ist grundsätzlich möglich, ohne dass Sie aktiv personenbezogene Daten eingeben. Beim Aufruf der Website werden jedoch technisch notwendige Daten verarbeitet, insbesondere durch das Hosting und die Auslieferung der Website.",
            "Neben der DSGVO können ergänzend das Bundesdatenschutzgesetz (BDSG) sowie § 25 TDDDG einschlägig sein.",
            "Diese Website verwendet derzeit keine Analyse- oder Tracking-Tools zu Marketing- oder Profiling-Zwecken."
          ]
        },
        {
          heading: "Verantwortliche Stelle",
          body: [
            "Elias Appuhamy",
            "vertreten durch die Erziehungsberechtigte",
            "Christina Appuhamy",
            "Ackerstraße 31",
            "40822 Mettmann",
            "Deutschland",
            `E-Mail: ${siteConfig.email}`
          ]
        },
        {
          heading: "Hosting",
          body: [
            "Diese Website wird über Vercel gehostet und ausgeliefert.",
            "Anbieter ist Vercel Inc., 440 N Barranca Avenue #4133, Covina, CA 91723, USA.",
            "Beim Aufruf der Website können über die Infrastruktur von Vercel technisch notwendige Daten verarbeitet werden, insbesondere IP-Adresse, Zeitpunkt des Zugriffs, angeforderte URL, Referrer-URL, Browsertyp, Betriebssystem, Statuscodes sowie verbindungsbezogene Informationen.",
            "Die Verarbeitung erfolgt zum Zweck der sicheren, stabilen und performanten Bereitstellung der Website.",
            "Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO. Das berechtigte Interesse liegt im sicheren und zuverlässigen Betrieb der Website.",
            "Vercel nutzt eine weltweit verteilte Infrastruktur einschließlich CDN- und Edge-Technologien. Eine Verarbeitung personenbezogener Daten außerhalb der Europäischen Union, insbesondere in den USA, kann dabei nicht ausgeschlossen werden.",
            "Nach den von Vercel veröffentlichten Informationen können internationale Datenübermittlungen auf geeignete Garantien wie Standardvertragsklauseln gestützt werden. Vercel verweist zudem auf eine Zertifizierung nach dem Data Privacy Framework.",
            "Weitere Informationen: https://vercel.com/legal/privacy-policy",
            "Auftragsverarbeitungsvereinbarung: https://vercel.com/legal/dpa"
          ]
        },
        {
          heading: "Zugriffsdaten und Server-Logfiles",
          body: [
            "Beim Besuch dieser Website werden technische Zugriffsdaten automatisch verarbeitet.",
            "Hierzu können insbesondere IP-Adresse, Datum und Uhrzeit des Zugriffs, aufgerufene Seite oder Datei, übertragene Datenmenge, HTTP-Statuscode, Referrer-URL, Browsertyp und Browserversion, Betriebssystem sowie gegebenenfalls der Hostname des zugreifenden Geräts gehören.",
            "Diese Daten sind technisch erforderlich, um die Website auszuliefern, ihre Stabilität zu gewährleisten, Missbrauch zu erkennen und die Sicherheit der Systeme sicherzustellen.",
            "Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO. Das berechtigte Interesse liegt in der sicheren und fehlerfreien Bereitstellung der Website."
          ]
        },
        {
          heading: "Cookies und ähnliche Technologien",
          body: [
            "Nach derzeitigem Stand setzt diese Website keine Cookies oder vergleichbaren Technologien zu Analyse-, Tracking- oder Marketingzwecken ein.",
            "Soweit im Einzelfall technisch notwendige Speicherungen oder Zugriffe auf Informationen im Endgerät erforderlich sind, erfolgt dies auf Grundlage von § 25 Abs. 2 Nr. 2 TDDDG, weil diese Maßnahmen unbedingt erforderlich sind, um den ausdrücklich gewünschten digitalen Dienst bereitzustellen.",
            "Soweit hierbei personenbezogene Daten verarbeitet werden, erfolgt die Verarbeitung auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO."
          ]
        },
        {
          heading: "Kontaktformular",
          body: [
            "Auf dieser Website ist ein Kontaktformular vorgesehen. Sofern dieses produktiv freigeschaltet wird, können die von Ihnen eingegebenen Daten, insbesondere Name, E-Mail-Adresse und Nachricht, verarbeitet werden, um Ihre Anfrage zu bearbeiten.",
            "Das Formular ist technisch für die Nutzung von Formspree vorbereitet. Bei einer aktiven Einbindung von Formspree werden die eingegebenen Daten an Formspree übermittelt und dort zur Verarbeitung Ihrer Nachricht entgegengenommen.",
            "Je nach konkreter Konfiguration können zusätzlich technische Metadaten wie IP-Adresse, Zeitstempel, Referrer-Daten und sicherheitsbezogene Informationen zur Spamprävention verarbeitet werden.",
            "Die Verarbeitung erfolgt zur Bearbeitung Ihrer Nachricht und zur Kommunikation mit Ihnen.",
            "Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO. Soweit Ihre Anfrage auf die Anbahnung eines Vertragsverhältnisses gerichtet ist, ist zusätzliche Rechtsgrundlage Art. 6 Abs. 1 lit. b DSGVO.",
            "Weitere Informationen: https://formspree.io/security/"
          ]
        },
        {
          heading: "Externe Icon-Anfragen (Iconify)",
          body: [
            "Für die Darstellung von Icons verwendet die Website die Bibliothek @iconify/react.",
            "Nach der Dokumentation der Bibliothek können Icon-Daten bei Bedarf über die öffentliche Iconify-API nachgeladen werden.",
            "Dabei kann es zu einer Verbindung zwischen Ihrem Browser und Servern von Iconify kommen. In diesem Zusammenhang können insbesondere IP-Adresse, Browserinformationen, Zeitpunkt des Abrufs und die angeforderte Icon-Ressource verarbeitet werden.",
            "Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO. Das berechtigte Interesse liegt in einer konsistenten und funktionalen Darstellung der Benutzeroberfläche.",
            "Weitere Informationen: https://iconify.design/"
          ]
        },
        {
          heading: "Schriftarten",
          body: [
            "Diese Website verwendet die Schriftart Poppins über next/font/google innerhalb des Next.js-Frameworks.",
            "Nach der aktuellen technischen Umsetzung werden die Schriftdateien während des Build-Prozesses geladen und anschließend lokal mit der Website ausgeliefert.",
            "Beim Aufruf der veröffentlichten Website werden die Schriftdateien daher nicht direkt vom Browser von Google-Servern nachgeladen.",
            "Auf Grundlage der aktuellen Implementierung findet daher keine gesonderte Übermittlung personenbezogener Daten an Google allein zur Darstellung der Schrift auf der Live-Website statt."
          ]
        },
        {
          heading: "Rechte der betroffenen Personen",
          body: [
            "Ihnen stehen die gesetzlichen Betroffenenrechte zu, insbesondere das Recht auf Auskunft nach Art. 15 DSGVO, das Recht auf Berichtigung nach Art. 16 DSGVO, das Recht auf Löschung nach Art. 17 DSGVO, das Recht auf Einschränkung der Verarbeitung nach Art. 18 DSGVO, das Recht auf Datenübertragbarkeit nach Art. 20 DSGVO sowie das Recht auf Widerspruch nach Art. 21 DSGVO.",
            "Zur Ausübung dieser Rechte können Sie sich jederzeit an den Verantwortlichen wenden."
          ]
        },
        {
          heading: "Widerruf von Einwilligungen",
          body: [
            "Soweit die Verarbeitung personenbezogener Daten auf Ihrer Einwilligung beruht, können Sie diese Einwilligung jederzeit mit Wirkung für die Zukunft widerrufen.",
            "Die Rechtmäßigkeit der bis zum Widerruf erfolgten Verarbeitung bleibt hiervon unberührt."
          ]
        },
        {
          heading: "Beschwerderecht bei einer Datenschutzaufsichtsbehörde",
          body: [
            "Sie haben das Recht, sich bei einer Datenschutzaufsichtsbehörde zu beschweren, wenn Sie der Ansicht sind, dass die Verarbeitung Ihrer personenbezogenen Daten rechtswidrig erfolgt.",
            "Zuständig in Nordrhein-Westfalen ist insbesondere die Landesbeauftragte für Datenschutz und Informationsfreiheit Nordrhein-Westfalen, Postfach 20 04 44, 40102 Düsseldorf.",
            "Telefon: +49 (0)211 38424-0",
            "E-Mail: poststelle@ldi.nrw.de",
            "Website: https://www.ldi.nrw.de/"
          ]
        }
      ]
    }
  }
} as const;

export type TranslationDictionary = (typeof translations)[keyof typeof translations];
