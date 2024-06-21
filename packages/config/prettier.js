/**
 * default prettier config
 */
module.exports = {
  printWidth: 120,
  semi: true,
  arrowParens: "always",
  singleQuote: false,
  trailingComma: "es5",
  bracketSpacing: true,
  useTabs: true,
  tabWidth: 4,
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
  // This must be set for both import sort and tailwind sort to work
  plugins: [
    "@trivago/prettier-plugin-sort-imports",
    "prettier-plugin-tailwindcss",
  ],
};
