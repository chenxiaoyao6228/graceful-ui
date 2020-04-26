module.exports = {
  moduleFileExtensions: ["js", "json", "vue"],
  transform: {
    ".+\\.(css|styl|less|sass|scss|png|jpg|ttf|woff|woff2)$":
      "jest-transform-stub",
    "^.+\\.js$": "<rootDir>/node_modules/babel-jest",
    ".*\\.(vue)$": "vue-jest",
    "^.+\\.mdx$": "@storybook/addon-docs/jest-transform-mdx",
  },
  setupFilesAfterEnv: ["<rootDir>/tests/setup.js", "<rootDir>/tests/storyshots-setup.js"],
  snapshotSerializers: ["jest-serializer-vue"],
  moduleNameMapper: {
    "^.+\\.(css|styl|less|sass|scss|png|jpg|ttf|woff|woff2)$":
      "jest-transform-stub",
  },
};
