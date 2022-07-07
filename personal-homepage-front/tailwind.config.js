/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {}
  },
  daisyui: {
    themes: ['light', 'dark', 'night', 'coffee', 'winter']
  },
  plugins: [require('daisyui')]
}
