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
        'primary': {
          100: '#73C7E3',
          200: '#66B3CC',
          300: '#124759'
        },
      },
      fontFamily: {
        fredoka: ['var(--font-fredoka)']
      },
      spacing: {
        'gpx': '48px',
        'spx': '36px',
      }
    },
  },
  plugins: [],
};
export default config;
