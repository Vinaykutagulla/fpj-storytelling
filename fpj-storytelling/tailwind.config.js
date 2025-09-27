/** @type {import('tailwindcss').Config} */
/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', // use .dark on <html> for explicit control
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'glow': '0 0 15px rgba(255, 215, 0, 0.7)',
      },
      colors: {
        'fpj-bg-dark': '#0d1117',
        'fpj-surface-dark': '#161b22',
      }
    },
  },
  plugins: [],
}

