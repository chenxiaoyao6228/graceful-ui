// 样式重置,变量等
import "./styles/index.less";

import GButton from "./components/button";

const components = {
  GButton,
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

// 自动加载
if (typeof window !== "undefined" && window.Vue) {
  install(window.Vue);
}

const API = {
  ...components,
};

export default API;

// module.exports.default = module.exports = API;
