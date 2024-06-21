<p style="text-align: center;">
  <a href="#">
    <img width="200" src="https://graceful-ui.chenxiaoyao.cn/static/media/logo.7b08ad57.png" alt="logo.png" type="image/png">
  </a>
</p>

<h1 style="text-align: center;">GracefulUI</h1>
<h3 style="text-align: center;">A Graceful UI Toolkit built on Vue</h3>

[![](https://circleci.com/gh/chenxiaoyao6228/graceful-ui.svg?style=shield)]() [![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)

**[English Docs](./README.md)**

## 🎸 前言

💃 `Graceful UI`是一款基于 Vue 的 UI 库, 秉着造轮子驱动学习的理念, 开发了这一套组件库.

[在线演示 👉](https://graceful-ui.chenxiaoyao.cn)

## 👋 快速上手

### ⌛ 安装

**Npm**

```sh
npm install graceful-ui --save
```

**Yarn**

```sh
yarn add graceful-ui --save
```

**Script 引入**

```html
<script type="text/javascript" src="graceful-ui.min.js"></script>
<link rel="stylesheet" href="lib/theme/index.css" />
```

### 📖 使用

**全量引入**

你可以通过下面的方式引入`graceful-ui`的所有组件

```js
import { GracefulUI } from "graceful-ui";

Vue.use(GracefulUI);
```

**局部引入**

[babel-plugin-import](https://www.npmjs.com/package/babel-plugin-component)插件允许你引入项目中需要的组件

```js
import { Button } from "graceful-ui";

Vue.use(Button);
```

也可以直接在组件中引入使用

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

安装插件`babel-plugin-import`

```sh
yarn add babel-plugin-import -D

// Or
npm install babel-plugin-import -D
```

编辑项目的 config 文件

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

### cdn 字体

`Graceful-ui`使用的是`icon-font`, 使用的时候需要在 index.html 中引入相关的字体文件

```html
<script src="https://at.alicdn.com/t/font_1763207_sc60ungf6d.js"></script>
```

## 🚧 开发

首先确保你安装了`yarn`

安装好依赖之后运行`yarn dev`即可开启 storybook, 项目使用的是 mdx 的格式, 具体可以参考`Alert`组件

### storybooK 注意事项

- mdx 的 template 中不要出现空格行

## 更新日志

[CHANGELOG](https://github.com/chenxiaoyao6228/graceful-ui/blob/master/CHANGELOG.md)

## 设计规范

参考 [react-suite](https://rsuitejs.com/design/default/)

## 🔖 参考轮子

[Gulu](https://yuyuye958.github.io/GuLu-UI/),[lulu-ui](https://www.zhangxinxu.com/sp/lulu/mockup/),[iview](https://www.iviewui.com/docs/introduce),[elementui](https://element.eleme.cn/#/zh-CN/component),[react-suite](https://rsuitejs.com/components),[ant-design-vue](https://www.antdv.com/docs/vue/introduce-cn/),[cuke-ui](https://github.com/cuke-ui/cuke-ui)

## License

[MIT](http://opensource.org/licenses/MIT)

Copyright (c) 2020-present, GracefulUI
