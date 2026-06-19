import type { Config } from "tailwindcss"

const config: Config = {
  content: ["./app/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: { DEFAULT: "#07050f", 800: "#100b22", 700: "#171033" },
        iris: { 300: "#c4b5fd", 400: "#a78bfa", 500: "#8b5cf6", 600: "#7c3aed" },
        blossom: { 300: "#ffa6e3", 400: "#ff6bd6", 500: "#f43ec0" },
        mint: { 300: "#9bf6d3", 400: "#5ef0bf", 500: "#22d3a6" },
        peach: { 400: "#ffb38a" },
        cream: "#f3f0ff",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "var(--font-inter)", "sans-serif"],
      },
      borderRadius: { "4xl": "2rem", "5xl": "2.75rem" },
    },
  },
  plugins: [],
}

export default config
