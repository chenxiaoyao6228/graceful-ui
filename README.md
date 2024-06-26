<p style="text-align: center;">
  <a href="#">
    <img width="200" src="https://graceful-ui.chenxiaoyao.cn/static/media/logo.7b08ad57.png" alt="logo.png" type="image/png">
  </a>
</p>

<h1 style="text-align: center;">GracefulUI</h1>
<h3 style="text-align: center;">A Graceful UI Toolkit built on Vue</h3>

[![](https://circleci.com/gh/chenxiaoyao6228/graceful-ui.svg?style=shield)]() [![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)

**[中文文档](./README-CN.md)**

## 🎸 Introduction

💃 `Graceful UI` is a UI library based on Vue, developed with the idea of learning by creating components.

[Online Demo 👉](https://graceful-ui.chenxiaoyao.cn)

## 👋 Quick Start

### ⌛ Installation

**Npm**

```sh
npm install graceful-ui --save
```

**Yarn**

```sh
yarn add graceful-ui --save
```

**Script Import**

```html
<script type="text/javascript" src="graceful-ui.min.js"></script>
<link rel="stylesheet" href="lib/theme/index.css" />
```

### 📖 Usage

**Full Import**

You can import all components of `graceful-ui` using the following method

```js
import { GracefulUI } from "graceful-ui";

Vue.use(GracefulUI);
```

**Partial Import**

The [babel-plugin-import](https://www.npmjs.com/package/babel-plugin-component) plugin allows you to import only the components you need

```js
import { Button } from "graceful-ui";

Vue.use(Button);
```

You can also directly import and use it in a component

```vue
<template>
  <button type="primary" icon="download"></button>
</template>
<script>
import { Button } from "graceful-ui";
export default {
  name: "myComponent",
  components: {
    Button,
  },
};
</script>
```

Install the `babel-plugin-import` plugin

```sh
yarn add babel-plugin-import -D

// Or
npm install babel-plugin-import -D
```

Edit the config file of the project

```js
{
  plugins: [
    [
      "component",
      {
        libraryName: "graceful-ui",
        styleLibraryName: "theme",
      },
    ],
  ];
}
```

### CDN Fonts

`Graceful-ui` uses `icon-font`, you need to include the related font file in the index.html when using it

```html
<script src="https://at.alicdn.com/t/font_1763207_sc60ungf6d.js"></script>
```

## 🚧 Development

First, make sure you have installed `yarn`

After installing dependencies, run `yarn dev` to start storybook. The project uses mdx format, you can refer to the `Alert` component for details.

### Storybook Notes

- Do not include blank lines in the mdx template

## Changelog

[CHANGELOG](https://github.com/chenxiaoyao6228/graceful-ui/blob/master/CHANGELOG.md)

## Design Guidelines

Refer to [react-suite](https://rsuitejs.com/design/default/)

## 🔖 Reference Components

[Gulu](https://yuyuye958.github.io/GuLu-UI/),[lulu-ui](https://www.zhangxinxu.com/sp/lulu/mockup/),[iview](https://www.iviewui.com/docs/introduce),[elementui](https://element.eleme.cn/#/zh-CN/component),[react-suite](https://rsuitejs.com/components),[ant-design-vue](https://www.antdv.com/docs/vue/introduce-cn/),[cuke-ui](https://github.com/cuke-ui/cuke-ui)

## License

[MIT](http://opensource.org/licenses/MIT)

Copyright (c) 2020-present, GracefulUI
