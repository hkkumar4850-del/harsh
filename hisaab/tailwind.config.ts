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
        red: {
          DEFAULT: "#A8231B",
          deep: "#7E150F",
          dark: "#5C0E09",
        },
        paper: {
          DEFAULT: "#FBF3E4",
          line: "#E8D9BC",
        },
        ink: {
          DEFAULT: "#2B1D14",
          soft: "#6B5847",
        },
        green: {
          DEFAULT: "#1E7A46",
          soft: "#E3F2E9",
        },
        gold: "#E8B544",
        cream: "#FFFDF8",
      },
      fontFamily: {
        display: ["var(--font-yatra)", "var(--font-mukta)", "serif"],
        sans: ["var(--font-mukta)", "system-ui", "sans-serif"],
        mono: ["var(--font-plex-mono)", "monospace"],
      },
      borderRadius: {
        ledger: "14px",
      },
      boxShadow: {
        ledger: "0 10px 40px rgba(92,14,9,.18)",
      },
      maxWidth: {
        wrap: "1120px",
      },
    },
  },
  plugins: [],
};
export default config;
