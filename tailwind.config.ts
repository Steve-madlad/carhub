import { type Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
  content: ["./src/**/*.tsx", "./src/**/*.ts", "./src/**/*.html"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-geist-sans)", ...fontFamily.sans],
      },
      translate: {
        "-1/2": "-50%", // Adds a shorthand for -50% on both axes
      },
      colors: {
        xbgblue: "#15202b",
        twitterblue: "#1a8cd8",
        hovgrey: "#2b3640",
        focusgrey: "#35434f",
      },
    },
    screens: {
      xsm: "450px",
      xs: "470px",
      sm: "640px",
      md: "768px",
      md2: "870px",
      md3: "800px",
      lg: "1024px",
      xlg: "1180px",
      xl: "1280px",
      "2xl": "1536px",
    },
  },
  plugins: [],
} satisfies Config;
