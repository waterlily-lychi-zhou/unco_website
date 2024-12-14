import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        Black:'#000',
        DarkGray:"#333",
        Gray:"#212121",
        brown:"#413838",
        lightGray:"#a29a9a",
      },
      fontFamily: {
        sans: ['Neue', 'SpaceMono', '5by7', 'Arial', 'Helvetica', 'sans-serif'],
      }
    },
  },
  plugins: [
  ],
} satisfies Config;
