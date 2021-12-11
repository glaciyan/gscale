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
  extends: ["plugin:vue/vue3-recommended", "prettier"],
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
        ignores: ["Center"],
      },
    ],
    "@typescript-eslint/no-explicit-any": ["off"],
  },
};
