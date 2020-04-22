// add global decorators and parameters
// see: https://storybook.js.org/docs/configurations/overview/

import "../src/styles/index.less";
import "../src/styles/storybook/index.less";

import { addParameters, addDecorator } from "@storybook/vue";
import { configureActions } from "@storybook/addon-actions";
import { withA11y } from "@storybook/addon-a11y";
import { DocsPage, DocsContainer } from "@storybook/addon-docs/blocks";
import { name, version, repository } from "../package.json";

addDecorator(withA11y);

addParameters({
  options: {
    name: `${name} v${version}`,
    url: repository,
    sidebarAnimations: true,
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
