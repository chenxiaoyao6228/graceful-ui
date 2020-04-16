import { configure } from "@storybook/vue";
import "../src/styles/index.less";
import "../src/styles/storybook/index.less";
function loadStories() {
  const req = require.context("../src", true, /\.story\.js$/);
  req.keys().forEach((filename) => req(filename));
}

configure(loadStories, module);
