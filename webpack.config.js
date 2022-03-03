const webpack = require("webpack");

module.exports = {
  entry: "./index.js",
  module: {
    rules: [
      {
        test: /\.svg$/,
        use: ['@svgr/webpack'],
      }
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ["babel-loader"]
      }
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      }
    ]
  }
};
