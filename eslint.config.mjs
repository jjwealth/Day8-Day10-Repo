// eslint.config.mjs
import js from "@eslint/js";

export default [
  // keep recommended JS rules
  js.configs.recommended,

  // project-specific settings
  {
    languageOptions: {
      // declare Node globals so `console` and `process` are not flagged as undefined
      globals: {
        console: "readonly",
        process: "readonly"
      },
      ecmaVersion: 2021,
      sourceType: "module"
    },

    rules: {
      // relax console usage (turn off the no-console error)
      "no-console": "off",

      // keep (or re-add) other useful rules you want enforced
      semi: ["error", "always"],
      quotes: ["error", "double"]
    }
  }
];
