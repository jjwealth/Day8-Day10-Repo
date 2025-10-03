// eslint.config.mjs
import js from "@eslint/js";

export default [
  js.configs.recommended,
  {
    rules: {
      semi: ["error", "always"],      // require semicolons
      "no-console": "error",          // disallow console.log
      quotes: ["error", "double"],    // enforce double quotes
    },
  },
];
