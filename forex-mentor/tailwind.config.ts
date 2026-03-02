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
        background: "#F4F7FB",
        foreground: "#111827",
        // New V2 Brand Colors
        brandLight: "#FFFFFF",
        brandBlue: "#2563EB", // Vibrant Action Blue
        brandEmerald: "#10B981", // Success Green (Retained for trust icons)
        brandSlate: "#6B7280", // Softer text slate
        brandText: "#111827", // Primary heading black
      },
    },
  },
  plugins: [],
};
export default config;
