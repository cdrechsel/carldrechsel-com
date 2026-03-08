import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        accent: {
          DEFAULT: "#0f172a",
          soft: "#334155"
        }
      }
    }
  },
  plugins: [require("@tailwindcss/typography")]
};

export default config;
