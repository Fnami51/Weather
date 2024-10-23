import globals from "globals";
import pluginJs from "@eslint/js";
import tseslintPlugin from "@typescript-eslint/eslint-plugin";
import tseslintParser from "@typescript-eslint/parser";
import pluginReact from "eslint-plugin-react";
import pluginJest from "eslint-plugin-jest";
import pluginTestingLibrary from "eslint-plugin-testing-library";

export default [
  {
    files: ["src/**/*.{js,mjs,cjs,ts,jsx,tsx}"],
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.jest, // Добавляем глобальные переменные Jest
      },
      parser: tseslintParser,
    },
    rules: {
      "indent": ["error", 2], // Отступы в 2 пробела (изменено для соответствия)
      "semi": ["error", "always"], // Обязательная точка с запятой
      "react/react-in-jsx-scope": "off", // Отключаем требование импорта React для JSX
      "@typescript-eslint/no-explicit-any": "warn", // Предупреждение при использовании any
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
  // Конфигурация для Jest
  {
    files: ["**/__tests__/**/*.[jt]s?(x)", "**/?(*.)+(spec|test).[jt]s?(x)"],
    plugins: {
      "jest": pluginJest,
      "testing-library": pluginTestingLibrary,
    },
    env: {
      "jest/globals": true, // Добавляем окружение Jest
    },
    rules: {
      ...pluginJest.configs.recommended.rules, // Рекомендованные правила для Jest
      ...pluginTestingLibrary.configs.react.recommended.rules, // Рекомендованные правила для React-тестов
      "@typescript-eslint/no-explicit-any": "warn", // Предупреждение при использовании any
    },
  },
];
