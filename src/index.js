// 样式重置,变量等
import "./styles/index.less";

import Button from "./components/button";

const components = {
  Button,
};

const GracefulUI = {
  ...components,
};

const install = function (Vue) {
  if (install.installed) return;

  Object.keys(GracefulUI).forEach((key) => {
    Vue.component(key, components[key]);
  });
};

// 自动加载, 使用Vue.use(GracefulUI)的时候就自动注册了所有的组件
if (typeof window !== "undefined" && window.Vue) {
  install(window.Vue);
}

// TODO
// 实现$Alert的组件在Vue实例上的直接使用

const API = {
  ...components,
  install,
};

export default API;

// module.exports.default = module.exports = API;
