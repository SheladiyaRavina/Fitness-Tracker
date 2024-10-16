/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}', // Look for class names in these file types
    './public/index.html',         // If you have a public HTML file, include it too
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
