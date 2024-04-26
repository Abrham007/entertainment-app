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
        Red: "#FC4747",
        DarkBlue: "#10141E",
        GreyishBlue: "#5A698F",
        SemiDarkBlue: "#161D2F",
        White: "#FFF",
      },
      fontSize: {
        xl3: [
          "2rem",
          {
            lineHeight: "normal",
            letterSpacing: "-0.03125rem",
            fontWeight: "400",
          },
        ],
        xl2: [
          "1.5rem",
          {
            lineHeight: "normal",
            letterSpacing: "normal",
            fontWeight: "400",
          },
        ],
        xl: [
          "1.5rem",
          {
            lineHeight: "normal",
            letterSpacing: "normal",
            fontWeight: "600",
          },
        ],
        lg: [
          "1.125rem",
          {
            lineHeight: "normal",
            letterSpacing: "normal",
            fontWeight: "600",
          },
        ],
        base: [
          "0.9375rem",
          {
            lineHeight: "normal",
            letterSpacing: "normal",
            fontWeight: "400",
          },
        ],
        sm: [
          "0.8125rem",
          {
            lineHeight: "normal",
            letterSpacing: "normal",
            fontWeight: "400",
          },
        ],
      },
    },
  },
  plugins: [],
};
export default config;
