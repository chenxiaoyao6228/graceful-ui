// add global decorators and parameters
// see: https://storybook.js.org/docs/configurations/overview/

import "../src/styles/index.less";
import "../src/styles/storybook/index.less";
import { configure, addParameters } from "@storybook/vue";

addParameters({
  options: {
    name: `${name} v${version}`,
    url: repository,
    sidebarAnimations: true,
  },
});

addParameters({
  docs: { inlineStories: true },
});

function loadStories() {
  const req = require.context("../src", true, /\.stories.mdx$/);
  // const req = require.context("../src", true, /\.story\.js$/);
  req.keys().forEach((filename) => req(filename));
}

configureActions({
  depth: 100,
});

configure(loadStories, module);
