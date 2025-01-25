# Installation guide:

npx create-expo-app

# Native Wind for Expo:

npm install nativewind tailwindcss react-native-reanimated react-native-safe-area-context

# Setup Tailwind CSS
Run npx tailwindcss init to create a tailwind.config.js file

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


global.css

@tailwind base;
@tailwind components;
@tailwind utilities;

babel.config.js

module.exports = function (api) {
  api.cache(true);
  return {
    presets: [
      ["babel-preset-expo", { jsxImportSource: "nativewind" }],
      "nativewind/babel",
    ],
  };
};

metro.config.js
import { fileURLToPath } from "url";
import { dirname } from "path";

// Manually resolve __dirname in ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

import { getDefaultConfig } from "expo/metro-config";
import { withNativeWind } from "nativewind/metro";

const config = getDefaultConfig(__dirname);

export default withNativeWind(config, { input: "./global.css" });

Import your CSS file
// Import your global CSS file
import "./global.css";

.eslintrc.js
export default {
  env: {
    node: true,
    browser: true,
    react: true, // React environment for JSX
  },
  extends: [
    "plugin:react/recommended",
    "plugin:react-native/all",
    "airbnb",
    "prettier",
  ],
  plugins: ["prettier"],
  rules: {
    "react/react-in-jsx-scope": "off", // React 17+ does not need React in scope
    "prettier/prettier": "error", // Enforce Prettier formatting
  },
  ignorePatterns: [
    ".eslintrc.mjs", // Update to .mjs for ESM config file
    "babel.config.js",
    "metro.config.js",
    "tailwind.config.js",
  ],
};







