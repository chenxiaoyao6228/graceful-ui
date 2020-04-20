// add global decorators and parameters
// see: https://storybook.js.org/docs/configurations/overview/

import "../src/styles/index.less";
import "../src/styles/storybook/index.less";

import { addParameters } from "@storybook/vue";
import { name, version, repository } from "../package.json";
import { configureActions } from "@storybook/addon-actions";
import { DocsPage, DocsContainer } from "@storybook/addon-docs/blocks";

addParameters({
  options: {
    name: `${name} v${version}`,
    url: repository,
    sidebarAnimations: true,
  },
  // https://www.npmjs.com/package/@storybook/addon-viewport
  viewport: {
    viewports: newViewports,
    defaultViewport: "iphone6",
  },
  docs: {
    container: DocsContainer,
    page: DocsPage,
    inlineStories: true,
  },
});

configureActions({
  depth: 100,
});
