// add global decorators and parameters
// see: https://storybook.js.org/docs/configurations/overview/

import "../src/styles/index.less";
import "../src/styles/storybook/index.less";

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
    brandImage: Logo,
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

// // 全局注册组件
// import Vue from 'vue'
// import  Switch  from '../src/components/switch/switch.vue';
// Vue.component('GSwitch', Switch)
