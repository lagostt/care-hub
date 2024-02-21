import type { Config } from "tailwindcss";

const config: Config = {
  darkMode:'selector',
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary':'#73C7E3'
      }
    },
  },
  plugins: [],
};
export default config;
