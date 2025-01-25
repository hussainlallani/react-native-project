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
