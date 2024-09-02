import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "thistle": "#CBC0D3",
        "misty-rose": "#EFD3D7",
        "pale-purple": "#FEEAFA",
        "lavender": "#DEE2FF"
      }
    },
  },
  plugins: [],
};
export default config;
