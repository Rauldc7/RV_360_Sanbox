// next.config.js
const withCSS = require("@zeit/next-css");
const webpack = require("webpack");
module.exports = withCSS({
  cssLoaderOptions: {
    url: false
  }
});
