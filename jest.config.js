module.exports = {
  moduleFileExtensions: ["js", "json", "vue"],
  transform: {
    "^.+\\.js$": "<rootDir>/node_modules/babel-jest",
    ".*\\.(vue)$": "vue-jest",
    "^.+\\.mdx$": "@storybook/addon-docs/jest-transform-mdx",
  },
  setupFiles: ["<rootDir>/.storybook/storyshots-setup.js"],
  snapshotSerializers: ["jest-serializer-vue"],
};
