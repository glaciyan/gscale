module.exports = {
  env: {
    node: true,
  },
  root: true,
  parser: "vue-eslint-parser",
  parserOptions: {
    parser: "@typescript-eslint/parser",
    sourceType: "module",
  },
  plugins: ["@typescript-eslint"],
  extends: ["plugin:@typescript-eslint/recommended", "plugin:vue/vue3-recommended", "prettier"],
  rules: {
    "vue/attribute-hyphenation": [
      "error",
      "never",
      {
        ignore: [],
      },
    ],
    "vue/v-on-event-hyphenation": [
      "error",
      "never",
      {
        autofix: false,
        ignore: [],
      },
    ],
    "vue/multi-word-component-names": [
      "error",
      {
        ignores: ["Center", "Modal", "Builds", "Index"],
      },
    ],
    "@typescript-eslint/no-explicit-any": ["off"],
    "@typescript-eslint/no-empty-interface": ["off"],
    "@typescript-eslint/no-non-null-assertion": ["off"],
  },
};
