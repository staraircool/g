import type { Config } from "tailwindcss"

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        feijoa: {
          50: "#f4fbf2",
          100: "#e4f8e0",
          200: "#c9f0c2",
          300: "#94df88",
          400: "#6bcc5c",
          500: "#46b136",
          600: "#369128",
          700: "#2c7322",
          800: "#275b20",
          900: "#214b1c",
          950: "#0d290a",
        },
      },
    },
  },
  plugins: [],
}
export default config
