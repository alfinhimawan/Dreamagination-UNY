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
          DEFAULT: '#14213d', // biru tua
          dark: '#0f1a2b',
        },
        accent: {
          DEFAULT: '#fca311', // kuning emas
        },
        neutral: {
          DEFAULT: '#ffffff', // putih
        },
      },
      dropShadow: {
        white: "5px 10px 50px rgba(255, 255, 255, 0.25)",
      },
    },
  },
  plugins: [],
};
export default config;
