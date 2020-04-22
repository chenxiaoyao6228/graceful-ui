const path = require("path");

const filterRules = (filters) => (rule) => {
  return filters.some((filter) => String(rule.test) === String(filter));
};

module.exports = {
  stories: [
    "../src/components/Intro.stories.mdx",
    "../stories/*.stories.(js|mdx)",
  ],
  presets: ["@storybook/addon-docs"],
  addons: [
    "@storybook/addon-knobs/register",
    "@storybook/addon-a11y",
    "@storybook/addon-actions",
    "@storybook/addon-docs",
    "@storybook/addon-links",
    "@storybook/addon-storysource",
    "@storybook/addon-options",
  ],
  // Modify webpack to remove babel-preset-vue from .mdx loaders
  webpack: async (config) => {
    const rules = config.module.rules;
    const mdxRules = rules.filter(
      filterRules([/\.mdx$/, /\.(stories|story).mdx$/])
    );
    let [jsxRule] = rules.filter(filterRules([/\.(mjs|jsx?)$/]));

    mdxRules.forEach((mdxRule) => {
      const [babelLoader] = mdxRule.use.filter(
        ({ loader }) => loader === "babel-loader"
      );
      babelLoader.options.presets = babelLoader.options.presets.filter(
        (preset) => !preset.includes("babel-preset-vue")
      );
    });

    const [babelLoader] = jsxRule.use.filter(
      ({ loader }) => loader === "babel-loader"
    );
    babelLoader.options = {
      cacheDirectory: path.resolve(
        __dirname,
        "..",
        "node_modules",
        ".cache",
        "storybook"
      ),
      presets: ["@vue/app"],
      babelrc: false,
    };

    return config;
  },
};
