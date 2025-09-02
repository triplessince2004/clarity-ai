import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-sans)'], // Assuming you want to keep the Inter font
      },
      colors: {
        background: '#000000',
        foreground: '#e5e7eb',
        primary: '#111111', // A slightly lighter black for cards
        accent: '#00ff00',   // Neon Green
      },
    },
  },
  plugins: [],
};
export default config;