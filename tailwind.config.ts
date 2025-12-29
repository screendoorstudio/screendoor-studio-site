import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#0a0a0a",
        foreground: "#f5f5f5",
        accent: "#3BB4E5",
        muted: "#4a4a4a",
      },
      animation: {
        "fade-in": "fadeIn 1s ease-out forwards",
        "fade-in-delay-1": "fadeIn 1s ease-out 0.3s forwards",
        "fade-in-delay-2": "fadeIn 1s ease-out 0.6s forwards",
        "glow": "glow 2s ease-in-out infinite alternate",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0", transform: "translateY(10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        glow: {
          "0%": { textShadow: "0 0 5px rgba(59, 180, 229, 0.5)" },
          "100%": { textShadow: "0 0 20px rgba(59, 180, 229, 0.8), 0 0 40px rgba(59, 180, 229, 0.4)" },
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
