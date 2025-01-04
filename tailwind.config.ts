import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      heading: ["Pixelated"],
    },
    colors: {
      // primary: "#281159",
      // primary: "#200e47",
      primary: "#0a0424", //Dark Blue
      secondary: "#d35170", //Pink
      ternary: "#B70AEC", //Dark Gray
      white: "#FFFFFF",
    },
    backgroundImage: {
      primaryImg: "url('/Background.png')", 
    },
  },
  plugins: [],
};
export default config;
