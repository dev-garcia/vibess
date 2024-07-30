const flowbite = require("flowbite-react/tailwind");
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./public/**/*.html",
    flowbite.content(),
  ],
  theme: {
    extend: {
      colors: {
        azul: {
          100: "#8ec5fc",
        },
        verde: {
          100: "#70c1b3",
        },
        lilas: {
          100: "#d7b9d5",
        },
        cinza: {
          100: "#f0f0f0",
        },
        branco: {
          100: "#ffffff",
        },
        laranja: {
          100: "#ff6b6b",
        },
        azulMarinho: {
          100: "#2c3e50",
        },
      },
    },
  },
  plugins: [
    flowbite,
    require("@tailwindcss/forms"),
    flowbite.plugin(),
    require("flowbite/plugin")({
      charts: true,
    }),
  ],
};
export default config;
