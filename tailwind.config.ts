import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./public/Nexa-Light.otf",
    "./public/Nexa-Bold.otf",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        white: "#FEFEFF",
        grey: "#777777",
        black: "#000000",
        mainLight: "#D5B4A8",
        main: "#A3766B",
        mainDark: "#82422A",
      },
      fontFamily: {
        nexa: ["Nexa", "sans-serif"],
      },
      spacing: {
        maxWidth: '1550px',
      },
    },
  },
  plugins: [],
} satisfies Config;
