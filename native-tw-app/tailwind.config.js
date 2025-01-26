/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./App.js", // Add paths to your other components here
    "./app/components/**/*.{js,jsx,ts,tsx}",
    "./app/screens/**/*.{js,jsx,ts,tsx}",
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {},
  },
  plugins: [],
};
