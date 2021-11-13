// In .babelrc.js
module.exports = {
  presets: [["next/babel", { "preset-react": false }]],
  plugins: ["babel-plugin-macros", ["styled-components", { ssr: true }]],
};
