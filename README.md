<p align="center">
  <a href="#">
    <img width="200" src="https://github.com/chenxiaoyao6228/graceful-ui/blob/master/assets/logo.png?raw=true" alt="logo.png" type="image/png">
  </a>
</p>

<h1>GracefulUI</h1>
<h3>A Graceful UI Toolkit built on Vue</h3>

[![](https://circleci.com/gh/chenxiaoyao6228/graceful-ui.svg?style=shield)]() [![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)

## 🎸 前言

💃 `Graceful UI`是一款基于Vue的 UI 库, 秉着造轮子驱动学习的理念, 开发了这一套组件库.

## 📺 在线演示

项目托管在 👉 [Github Page](https://chenxiaoyao6228.github.io/graceful-ui)

国内无法科学上网的用户请点击 👉 [这里](https://chenxiaoyao6228.gitee.io/graceful-ui)

## 👋 快速上手

### ⌛ 安装

**Npm**

```js
npm install graceful-ui --save
```

**Yarn**

```js
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
import { GracefulUI } from 'graceful-ui';

Vue.use(GracefulUI);
```

**局部引入**

[babel-plugin-import](https://www.npmjs.com/package/babel-plugin-component)插件允许你引入项目中需要的组件

```js
import { Button } from 'graceful-ui';

Vue.use(Button);
```

也可以直接在组件中引入使用

```html
<template>
  <button type="primary" icon="download"></button>
</template>
<script>
  import { Button } from 'graceful-ui';
  export default {
    name: 'myComponent',
    components: {
      Button,
    },
  };
</script>
```

安装插件`babel-plugin-import`

```js
yarn add babel-plugin-import -D

// Or
npm install babel-plugin-import -D
```

编辑项目的config文件

```json
// .babelrc or babel.config.js
plugins: [
    [
      "component",
      {
        "libraryName": "graceful-ui",
        "styleLibraryName": "theme"
      }
    ]
  ]
```

### cdn 字体

`Graceful-ui`使用的是`icon-font`,  使用的时候需要在index.html中引入相关的字体文件

```js
<script src="https://at.alicdn.com/t/font_1763207_9f1wiwjq4dr.js"></script>
```

## 🍅 Done/Todo

**通用**

- [x] Button
- [x] Icon

**反馈**

- [x] Alert

**数据展示**

- [x] Collapse
- [x] Popover
- [x] Tab

**布局**

- [x] Grid
- [x] Layout

**数据录入**

- [x] Input
- [x] Switch

## 更新日志

[CHANGELOG](https://github.com/chenxiaoyao6228/graceful-ui/blob/master/CHANGELOG.md)

## 设计规范

参考[react-suite](https://rsuitejs.com/design/default/)

## 🔖 参考轮子

[Gulu](https://yuyuye958.github.io/GuLu-UI/)

[iview](https://www.iviewui.com/docs/introduce)

[elementui](https://element.eleme.cn/#/zh-CN/component)

[ant-design-vue](https://www.antdv.com/docs/vue/introduce-cn/)

[react-suite](https://rsuitejs.com/components)

## License

[MIT](http://opensource.org/licenses/MIT)

Copyright (c) 2020-present, GracefulUI
