# react-native-project

# Installation guide:
npm install nativewind tailwindcss react-native-reanimated react-native-safe-area-context

npx tailwindcss init

## tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ["./App/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {},
  },
  plugins: [],
}

## global.css
@tailwind base;
@tailwind components;
@tailwind utilities;


## babel.config.js
module.exports = {
presets: ['<existing presets>', 'nativewind/babel'],
};

## metro.config.js
const { getDefaultConfig, mergeConfig } = require("@react-native/metro-config");
const { withNativeWind } = require("nativewind/metro");

const config = mergeConfig(getDefaultConfig(__dirname), {
  /* your config */
});

module.exports = withNativeWind(config, { input: "./global.css" });

## Import your CSS file in App.js
import "./global.css"

export default App() {
  /* Your App */
}

##  Modify your app.json (Expo only)
app.json
{
  "expo": {
    "web": {
      "bundler": "metro"
    }
  }
}

## @react-native/metro-config
npm i @react-native/metro-config