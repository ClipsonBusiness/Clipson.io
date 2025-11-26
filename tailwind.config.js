/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./main.jsx",
    "./App.jsx",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'clipson-green': '#10B981',
        'clipson-green-dark': '#059669',
        'clipson-green-light': '#34D399',
        'clipson-midnight': '#050818',
      },
      fontFamily: {
        display: ['"Sora"', 'Inter', 'system-ui', 'sans-serif'],
      },
      dropShadow: {
        neon: '0 0 18px rgba(16, 185, 129, 0.55)',
      },
      boxShadow: {
        'clipson-glow': '0 10px 50px rgba(16, 185, 129, 0.25)',
      },
    },
  },
  plugins: [],
}

