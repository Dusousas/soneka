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
        Bebas: ['Bebas Neue', 'sans-serif'],
        Poppins: ['Poppins', 'system-ui;']
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",

        RedP:"#c83519",
      },
    },
  },
  plugins: [],
};
export default config;
