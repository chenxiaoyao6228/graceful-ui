const path = require("path");

module.exports = async ({ config, mode }) => {
  config.module.rules.push({
    test: /\.less$/,
    use: ["vue-style-loader",  "css-loader", 'postcss-loader', "less-loader"],
    include: path.resolve(__dirname, "../"),
  });
  config.module.rules.push({
    test: /\.stories\.js?$/,
    loaders: [
      require.resolve("@storybook/addon-storysource/loader"),
    ],
    enforce: "pre",
  });
  config.module.rules.push({
    test: /\.(vue|js)?$/,
    exclude: /node_modules/,
    loaders: 'eslint-loader',
    options: {
      fix: true,
    },
    enforce: "pre",
  });
  // Return the altered config
  return config;
};
