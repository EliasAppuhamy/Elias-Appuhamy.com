export const siteConfig = {
  name: "Elias Appuhamy",
  alias: "Elyon",
  siteName: "Elias Appuhamy",
  company: "Elyon Web",
  role: "Founder & CEO",
  location: "Mettmann, North Rhine-Westphalia, Germany",
  email: "elias@elyon-web.de",
  siteUrl: "https://elias-appuhamy.com",
  ogImage: "/images/elias-appuhamy-work.jpeg",
  defaultLocale: "de",
  locales: ["de", "en"],
  description:
    "Offizielle Website von Elias Appuhamy, auch bekannt als Elyon. Founder von Elyon Web, Webdesigner und Developer aus Mettmann mit Fokus auf Design, Entwicklung, digitale Systeme und langfristigen Unternehmensaufbau.",
  englishDescription:
    "Official website of Elias Appuhamy, also known as Elyon. Founder of Elyon Web, web designer, and developer from Mettmann focused on design, development, digital systems, and long-term company building.",
  socialLinks: {
    instagram: "https://www.instagram.com/elyon.build"
  },
  formspreeEndpoint: "https://formspree.io/f/xbdavylj",
  keywords: [
    "Elias Appuhamy",
    "Elias Appuhamy Elyon",
    "Elyon",
    "Elyon Web",
    "Elias Appuhamy Mettmann",
    "Elias Appuhamy Deutschland",
    "Elias Appuhamy Germany",
    "Founder Elias Appuhamy",
    "Elyon Founder",
    "Web Designer",
    "Webdesigner",
    "Developer",
    "Entrepreneur",
    "Founder",
    "Personal Brand Website",
    "Web Design Germany",
    "Web Development Germany",
    "Digital Systems",
    "Mettmann",
    "NRW",
    "North Rhine-Westphalia"
  ]
} as const;

export const navItems = [
  { label: "Home", href: "#hero", id: "hero" },
  { label: "About Me", href: "#about", id: "about" },
  { label: "Expertise", href: "#expertise", id: "expertise" },
  { label: "Connect", href: "#connect", id: "connect" }
] as const;

export const introBadges = [
  "Founder & CEO of Elyon Web",
  "Design, technology, and entrepreneurship",
  "Systems over hype",
  "Built for the long term"
] as const;

export const timelineItems = [
  {
    date: "September 2025 – December 2025",
    title: "Marketing Manager at MoreManu",
    description:
      "This is where Elias gained his first practical experience in marketing, brand communication, and digital positioning."
  },
  {
    date: "January 2026",
    title: "Concept development for the fashion brand Suitéa",
    description:
      "A creative step toward brand building and entrepreneurial thinking."
  },
  {
    date: "Since February 2026",
    title: "Professional Web Designer and Developer",
    description:
      "Through Elyon Web, Elias focuses on modern websites and digital brand presence."
  }
] as const;

export const principleItems = [
  {
    title: "Vision",
    text: "Great things begin with a clear vision.",
    icon: "solar:eye-linear"
  },
  {
    title: "Discipline",
    text: "Progress is built through daily work.",
    icon: "solar:shield-check-linear"
  },
  {
    title: "Consistency",
    text: "Long-term building takes patience.",
    icon: "solar:restart-linear"
  },
  {
    title: "Systems over hype",
    text: "Real results come from structure.",
    icon: "solar:widget-linear"
  },
  {
    title: "Long-term thinking",
    text: "The focus is on decades, not weeks.",
    icon: "solar:chart-square-linear"
  }
] as const;

export const workItems = [
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
] as const;

export const buildItems = [
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
] as const;

export const techItems = [
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
] as const;

export const connectItems = [
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
] as const;

export const faqItems = [
  {
    key: "who",
    title: "Who is Elias Appuhamy?",
    text: "Elias Appuhamy is a young founder and web designer from Germany with a strong interest in entrepreneurship."
  },
  {
    key: "elyon",
    title: "What is Elyon?",
    text: "Elyon is the personal brand of Elias."
  },
  {
    key: "elyon-web",
    title: "What is Elyon Web?",
    text: "Elyon Web is the web design project of Elias Appuhamy."
  },
  {
    key: "focus",
    title: "What is Elias focused on?",
    text: "Design, development, digital systems, and long-term company building."
  },
  {
    key: "goal",
    title: "What is the long-term goal?",
    text: "Building successful companies and creating long-term impact."
  }
] as const;
