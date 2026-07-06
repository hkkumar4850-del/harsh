import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#7a1330",
          dark: "#530c20",
          light: "#9c2743",
        },
        gold: {
          DEFAULT: "#c9972a",
          light: "#e8c873",
          dark: "#a3791d",
        },
        cream: {
          DEFAULT: "#fff8f0",
          alt: "#fbeedd",
        },
        ink: {
          DEFAULT: "#2b1810",
          muted: "#6b5b52",
        },
      },
      fontFamily: {
        heading: ["var(--font-playfair)", "serif"],
        script: ["var(--font-great-vibes)", "cursive"],
        sans: ["var(--font-inter)", "sans-serif"],
      },
      boxShadow: {
        soft: "0 10px 30px -12px rgba(122, 19, 48, 0.25)",
        strong: "0 20px 50px -15px rgba(122, 19, 48, 0.35)",
      },
      maxWidth: {
        container: "1180px",
      },
    },
  },
  plugins: [],
};
export default config;
