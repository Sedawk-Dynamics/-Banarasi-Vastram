import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./data/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1.25rem",
        md: "2rem",
        lg: "3rem",
      },
      screens: {
        "2xl": "1280px",
      },
    },
    extend: {
      colors: {
        maroon: {
          DEFAULT: "#5A1220",
          900: "#3B0B14",
          800: "#4A0F1B",
          700: "#6E1727",
        },
        wine: "#7B1E2B",
        gold: {
          DEFAULT: "#C6A15B",
          600: "#B0873C",
          400: "#D9BA78",
          300: "#E4C989",
          100: "#F1E2BE",
        },
        cream: "#F8F0DF",
        ivory: "#FCF8EF",
        paper: "#FBF6EB",
        sand: "#EFE2C8",
        ink: {
          DEFAULT: "#2A1418",
          2: "#5A4740",
        },
        muted: "#857267",
      },
      fontFamily: {
        serif: ["var(--font-serif)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      letterSpacing: {
        luxe: "0.34em",
        wide2: "0.2em",
      },
      boxShadow: {
        soft: "0 2px 10px rgba(58, 11, 20, .06)",
        lux: "0 18px 44px -22px rgba(58, 11, 20, .30)",
        deep: "0 40px 80px -30px rgba(58, 11, 20, .45)",
      },
      keyframes: {
        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
        "marquee-vertical": {
          from: { transform: "translateY(0)" },
          to: { transform: "translateY(-50%)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "200% 0" },
          "100%": { backgroundPosition: "-200% 0" },
        },
        cue: {
          "0%": { top: "-50%" },
          "60%, 100%": { top: "100%" },
        },
        "pulse-ring": {
          "0%": { transform: "scale(1)", opacity: "0.7" },
          "100%": { transform: "scale(1.6)", opacity: "0" },
        },
        "gradient-pan": {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
      },
      animation: {
        marquee: "marquee var(--marquee-duration, 34s) linear infinite",
        "marquee-vertical": "marquee-vertical var(--marquee-duration, 30s) linear infinite",
        shimmer: "shimmer 3s linear infinite",
        cue: "cue 2.2s cubic-bezier(.22,.61,.36,1) infinite",
        "pulse-ring": "pulse-ring 2.4s ease-out infinite",
        "gradient-pan": "gradient-pan 8s ease infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;
