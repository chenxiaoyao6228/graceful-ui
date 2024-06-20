// add global decorators and parameters
// see: https://storybook.js.org/docs/configurations/overview/

import "../src/styles/index.less";

// 全局注册组件
import Vue from "vue";
import alert from "../src/components/alert/alert.js";
Vue.prototype.$Alert = alert;

import { addParameters, addDecorator } from "@storybook/vue";
import { configureActions } from "@storybook/addon-actions";
import { withA11y } from "@storybook/addon-a11y";
import { DocsPage, DocsContainer } from "@storybook/addon-docs/blocks";
import "@storybook/addon-console";

import { version, name, repository } from "../package.json";
import Logo from "../assets/logo.png";

addDecorator(withA11y);

addParameters({
  options: {
    brandTitle: `${name} v${version}`,
    brandUrl: repository,
    brandImage:
      "https://graceful-ui.chenxiaoyao.cn/static/media/logo.7b08ad57.png",
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
