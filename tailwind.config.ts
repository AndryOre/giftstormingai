import { type Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      montserrat: ["var(--font-montserrat)", ...fontFamily.sans],
      lato: ["var(--font-lato)", ...fontFamily.sans],
    },
    extend: {},
  },
  plugins: [],
} satisfies Config;
