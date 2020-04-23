const path = require("path");

module.exports = async ({ config, mode }) => {
  config.module.rules.push({
    test: /\.less$/,
    use: ["vue-style-loader", "css-loader", "less-loader"],
    include: path.resolve(__dirname, "../"),
  });
  config.module.rules.push({
    test: /\.stories\.js?$/,
    loaders: [require.resolve("@storybook/addon-storysource/loader")],
    enforce: "pre",
  });
  // Return the altered config
  return config;
};
