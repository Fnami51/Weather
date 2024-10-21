import globals from "globals";
import pluginJs from "@eslint/js";
import tseslintPlugin from "@typescript-eslint/eslint-plugin";
import tseslintParser from "@typescript-eslint/parser";
import pluginReact from "eslint-plugin-react";

export default [
  {
    files: ["src/**/*.{js,mjs,cjs,ts,jsx,tsx}"],
    languageOptions: {
      globals: globals.browser,
      parser: tseslintParser,
    },
    rules: {
      "indent": ["error", 2], // Отступы в 4 пробела
      "semi": ["error", "always"], // Обязательная точка с запятой
      "react/react-in-jsx-scope": "off", // Отключаем требование импорта React для JSX
    },
  },
  // Конфигурация JavaScript
  {
    ...pluginJs.configs.recommended,
  },
  // Конфигурация TypeScript
  {
    plugins: {
      "@typescript-eslint": tseslintPlugin,
    },
    rules: {
      ...tseslintPlugin.configs.recommended.rules,
    },
  },
  // Конфигурация React
  {
    plugins: {
      "react": pluginReact,
    },
    rules: {
      ...pluginReact.configs.flat.recommended.rules,
      "react/react-in-jsx-scope": "off", // Отключаем это правило для React 17+
    },
  },
];
