import nativewindPreset from "nativewind/preset";

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./App.js", // Add paths to your other components here
    "./components/**/*.{js,jsx,ts,tsx}",
    "./screens/**/*.{js,jsx,ts,tsx}",
  ],
  presets: [nativewindPreset],
  theme: {
    extend: {},
  },
  plugins: [],
};
