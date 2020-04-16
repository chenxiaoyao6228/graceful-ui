const path = require("path");
const merge = require("webpack-merge");
const webpackBaseConfig = require("./webpack.base.js");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const glob = require("glob");

const entry = Object.assign(
  {},
  glob
    .sync("./src/components/**/index.js")
    .map((item) => {
      return item.split("/")[3];
    })
    .reduce((acc, cur) => {
      acc[`g-${cur}`] = path.resolve(
        __dirname,
        `../src/components/${cur}/index.js`
      );
      return { ...acc };
    }, {})
);

module.exports = merge(webpackBaseConfig, {
  entry: entry,
  output: {
    path: path.resolve(__dirname, "../lib"),
    filename: "[name]/index.js",
    library: "graceful-ui",
    libraryTarget: "umd",
    umdNamedDefine: true,
    libraryExport: "default",
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
    new MiniCssExtractPlugin({
      filename: "theme/[name].css",
    }),
  ],
});
