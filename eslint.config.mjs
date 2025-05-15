import pluginJs from "@eslint/js";
import pluginReact from "eslint-plugin-react";
import wodenPlugin from "eslint-plugin-woden-plugin";
import globals from "globals";
import tseslint from "typescript-eslint";

export default [
  pluginReact.configs.flat.recommended,
  ...tseslint.configs.recommended,
  pluginJs.configs.recommended,
  {
    plugins: { pluginJs, pluginReact, tseslint, wodenPlugin },
    files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"],
    languageOptions: { globals: globals.browser },
    settings: {
      react: {
        version: "999.999.999",
      },
    },
    rules: {
      "react/react-in-jsx-scope": "off",
      "no-unused-expressions": "off",
      "@typescript-eslint/no-unused-expressions": "off",
      "react/display-name": "off",
      "@typescript-eslint/no-explicit-any": "off",
      "@typescript-eslint/no-unused-vars": "warn",
      "react/no-deprecated": "off",
      "@typescript-eslint/ban-ts-comment": "off",
      "wodenPlugin/path-checker": ["error", { alias: "@" }],
      "wodenPlugin/public-api-imports": ["error", { alias: "@" }],
      "no-undef": "off",
      "no-unused-vars": "off",
      "@typescript-eslint/no-require-imports": "off",
    },
  },
];
