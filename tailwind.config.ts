import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@heroui/react/dist/**/*.{js,mjs}",
    "./node_modules/@heroui/react/node_modules/@heroui/**/*.{js,mjs}"
  ],
  theme: {
    extend: {
      colors: {
        background: "#050405",
        surface: "#0b090a",
        panel: "#110d10",
        ink: "#f5f1ee",
        muted: "#b0a7a2",
        line: "rgba(255,255,255,0.08)",
        brand: "#78f06d",
        snapGreen: "#78f06d",
        snapGreenDark: "#46c55a",
        skyGlow: "#58c5ff",
        sunset: "#f5c15d",
        wine: {
          200: "#78f06d",
          300: "#46c55a",
          400: "#1b7f49",
          500: "#0d4e31"
        }
      },
      fontFamily: {
        sans: ["var(--font-poppins)"],
        display: ["var(--font-poppins)"]
      },
      boxShadow: {
        ambient: "0 30px 120px rgba(0, 0, 0, 0.35)",
        inset: "inset 0 1px 0 rgba(255,255,255,0.04)"
      },
      borderRadius: {
        "4xl": "2rem",
        "5xl": "2.5rem"
      },
      backgroundImage: {
        "hero-noise":
          "radial-gradient(circle at top, rgba(110,31,48,0.18), transparent 34%), radial-gradient(circle at 80% 12%, rgba(255,255,255,0.04), transparent 18%), linear-gradient(180deg, #070607 0%, #050405 55%, #040304 100%)"
      }
    }
  },
  plugins: []
};

export default config;
