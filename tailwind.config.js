/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        "brand": 'var(--brand)',
        "primary": 'var(--primary)',
        "secondary": 'var(--secondary)',
        "third": 'var(--third)',
        "hover": 'var(--hover)',
        "light": 'var(--light)',
        "dark": "#2C3930",
        "dark-primary": '#121212',
        "dark-secondary": '#1E1E1E',
      },
    },
    fontFamily: {
      "kantumruy-pro": ['Kantumruy Pro', "sans-serif"],
    },
    container: {
      padding: "2rem",
      center: true,
    }
  },
  plugins: [],
}