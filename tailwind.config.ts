import type { Config } from "tailwindcss";

export default {
  content: ["./src/pages/**/*.{js,ts,jsx,tsx,mdx}", "./src/components/**/*.{js,ts,jsx,tsx,mdx}", "./src/app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      fontSize: {
        sm: ["14px", "18px"],
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primaryYellow: "var(--primary-yellow)",
        font: "var(--font)",
        "background-blue": "var(--background-blue)",
        "font-blue": "var(--font-blue)",
      },
      screens: {
        "2xl": "1920px",
        "3xl": "2450px",
      },
    },
  },
  plugins: [],
} satisfies Config;
