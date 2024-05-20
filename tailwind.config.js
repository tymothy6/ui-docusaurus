/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx,md,mdx}", "./docs/**/*.{md,mdx}"],
  theme: {
    extend: {},
  },
  plugins: [],
  darkMode: ["class", '[data-theme="dark"]'],
  corePlugins: {
    preflight: false,
  },
  blocklist: ["container"],
}

