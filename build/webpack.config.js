const path = require("path");
const merge = require("webpack-merge");
const webpackBaseConfig = require("./webpack.base.js");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = merge(webpackBaseConfig, {
  entry: {
    main: path.resolve(__dirname, "../src/index"),
  },
  output: {
    path: path.resolve(__dirname, "../lib"),
    filename: "index.js",
    library: "graceful-ui",
    libraryTarget: "umd",
    libraryExport: "default",
    umdNamedDefine: true,
    globalObject: "this",
  },
  module: {
    rules: [
      {
        test: /\.less$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "less-loader"],
      },
    ],
  },
  plugins: [
    // new EsmWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: "theme/[name].css",
    }),
  ],
});
