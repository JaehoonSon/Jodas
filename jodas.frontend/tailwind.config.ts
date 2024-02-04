import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        'main': "rgba(7,27,69,255)",
      },
    }
  },
  plugins: [require("daisyui"), require("@tailwindcss/typography")],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#ff00d5",

          secondary: "#009d8b",

          accent: "#0000ff",

          neutral: "#040808",

          "base-100": "#202623",

          info: "#00dfff",

          success: "#489100",

          warning: "#ff6900",

          error: "#d6314e",
        },
      },
    ],
  },
};
export default config;
