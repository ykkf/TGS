/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        tgs: {
          dark: '#0a0f1d',
          card: '#131b2e',
          accent: '#00f0ff',
          pink: '#ff007a',
          purple: '#8a2be2',
          yellow: '#ffe600',
          success: '#00e676'
        }
      }
    },
  },
  plugins: [],
}
