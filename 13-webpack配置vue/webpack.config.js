const { resolve } = require("path");

module.exports = {
  entry: "./src/main.js",
  output: {
    filename: "bundle.js",
    path: resolve(__dirname, "dist"),
  },
  // 指定vue版本
  resolve: {
    alias: {
      vue$: "vue/dist/vue.esm.js",
    },
  },
};
