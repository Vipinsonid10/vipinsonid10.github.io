import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        inter: ["var(--font-inter)", "Inter", "sans-serif"],
      },
      colors: {
        cyan: {
          "400": "#22d3ee",
          "500": "#06b6d4",
        },
      },
      boxShadow: {
        "cyan-glow": "0 4px 30px rgba(6, 182, 212, 0.4)",
        "cyan-glow-lg": "0 10px 40px rgba(6, 182, 212, 0.5)",
        "purple-glow": "0 0 50px rgba(139, 92, 246, 0.6), 0 0 80px rgba(124, 58, 237, 0.4)",
      },
    },
  },
  plugins: [],
};
export default config;
