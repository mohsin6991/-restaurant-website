import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // Ajeena Ajeeba Brand Style 2026 palette
      colors: {
        orange: { DEFAULT: "#ED9C35", dark: "#D98624" },
        cream: "#FFE9C9",
        brick: "#CA472E",
        leaf: "#447356",
        peach: "#F2CFB4",
        brown: "#301D10",
      },
      fontFamily: {
        // Brand font is Rabar_021; Baloo Bhaijaan 2 is a web substitute until the licensed files are added.
        brand: ["var(--font-brand)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        pop: "0 6px 0 0 #CA472E",
      },
    },
  },
  plugins: [],
};
export default config;
