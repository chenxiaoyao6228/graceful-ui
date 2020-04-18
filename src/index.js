// 样式重置,变量等
import "./styles/index.less";

import Button from "./components/button";
import Icon from "./components/Icon";

const components = {
  Button,
  Icon,
};

Object.keys(components).forEach((key) => {
  components[key].install = function (Vue) {
    console.log("注册了button组件.............");
    Vue.component(key, components[key]);
    // Vue.component('G' + key, components[key]);
  };
});

const install = function (Vue) {
  if (install.installed) return;

  Object.keys(components).forEach((key) => {
    Vue.component(key, components[key]);
    // Vue.component('G' + key, components[key]);
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
