<p align="center">
  <a href="#">
    <img width="200" src="./assets/logo.png"></img>
  </a>
</p>

<h1>
  GracefulUI
  <h3>A Graceful UI Toolkit built on Vue</h3>
</h1>

[![](https://circleci.com/gh/chenxiaoyao6228/graceful-ui.svg?style=shield)]()

## 前言

> 该项目旨为深入理解学习 Vue.js, 不建议在生产环境中使用, 具体的实现细节届时会总结成相应的博文。

## 在线Demo

Hosted On 👉[Github Page](https://chenxiaoyao6228.github.io/graceful-ui)

国内无法科学上网的用户请点击 👉[这里](https://chenxiaoyao6228.gitee.io/graceful-ui)

## 快速上手

### 安装

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

### 使用

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

You can also use imported component on your component template

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
<script src="http://at.alicdn.com/t/font_1763207_9f1wiwjq4dr.js"></script>
```

## Done/Todo

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

## 参考

[Gulu](https://yuyuye958.github.io/GuLu-UI/)

[iview](https://www.iviewui.com/docs/introduce)

[elementui](https://element.eleme.cn/#/zh-CN/component)

[ant-design-vue](https://www.antdv.com/docs/vue/introduce-cn/)

[react-suite](https://rsuitejs.com/components)

## License

[MIT](http://opensource.org/licenses/MIT)

Copyright (c) 2020-present, GracefulUI
