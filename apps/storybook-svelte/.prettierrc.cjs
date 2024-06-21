module.exports = {
  ...require("../../packages/config/prettier"),
  plugins: [
    require.resolve("prettier-plugin-svelte"),
  ]
};
