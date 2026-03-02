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
        background: "#0A192F",
        foreground: "#FFFFFF",
        brandDark: "#0A192F",
        brandEmerald: "#10B981",
        brandSlate: "#94A3B8",
      },
    },
  },
  plugins: [],
};
export default config;
