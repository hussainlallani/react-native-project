/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./App.js", // Add paths to your other components here
    "./components/**/*.{js,jsx,ts,tsx}",
    "./screens/**/*.{js,jsx,ts,tsx}",
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {},
  },
  plugins: [],
};
