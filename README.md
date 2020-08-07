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

## Anouncement

This project is build for better understand basic usage and magic tricks of Vue.js, and should not be used in production environment. Implementation details will be recorded as blog posts series.

> 该项目旨为深入理解学习 Vue.js, 不建议在生产环境中使用, 具体的实现细节届时会总结成相应的博文。

## Online Demo

Hosted On 👉[Github Page](https://chenxiaoyao6228.github.io/graceful-ui)

国内无法科学上网的用户请点击 👉[这里](https://chenxiaoyao6228.gitee.io/graceful-ui)

## Quick Start

### Install

**Npm**

```js
npm install graceful-ui --save
```

**Yarn**

```js
yarn add graceful-ui --save
```

**Script tag**

```html
<script type="text/javascript" src="graceful-ui.min.js"></script>
<link rel="stylesheet" href="lib/theme/index.css" />
```

### Usage

**Registration all in one**

You can register all the components brought with `graceful-ui` with the following command

```js
import { GracefulUI } from 'graceful-ui';

Vue.use(GracefulUI);
```

**Partial registration**

With help of [babel-plugin-import](https://www.npmjs.com/package/babel-plugin-component), you can import components needed in your project.

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

Install plugin

```js
yarn add babel-plugin-import -D

// Or
npm install babel-plugin-import -D
```

Edit your project babel config file

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

### cdn fonts

Considering the size of webpack bundle file, fonts are hosted on aliyun cdn,
to use them, just add the following script to your index.html file

```js
<script src="http://at.alicdn.com/t/font_1763207_9f1wiwjq4dr.js"></script>
```

## Reference

Great thanks to the following awesome ui libraries

[Gulu](https://yuyuye958.github.io/GuLu-UI/)
[iview](https://www.iviewui.com/docs/introduce)
[elementui](https://element.eleme.cn/#/zh-CN/component)
[ant-design-vue](https://www.antdv.com/docs/vue/introduce-cn/)
[react-suite](https://rsuitejs.com/components)

## License

[MIT](http://opensource.org/licenses/MIT)

Copyright (c) 2020-present, GracefulUI
