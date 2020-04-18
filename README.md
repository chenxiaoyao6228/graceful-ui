<p align="center">
    <a href="#">
        <img width="200" src="./assets/logo.png">
    </a>
</p>

<h1>
GracefulUI
    <h3>A Graceful UI Toolkit built on Vue</h3>
</h1>

[![](https://circleci.com/gh/chenxiaoyao6228/graceful-ui.svg?style=shield)]()

## Demo

TODO

## Quick Start

### Install

1. Npm

```js
npm install graceful-ui --save
```

2. Yarn

```js
yarn add graceful-ui --save
```

3. Script tag

```html
<script type="text/javascript" src="graceful-ui.min.js"></script>
<link rel="stylesheet" href="lib/theme/index.css" />
```

### Usage

1. Registration all in one

You can register all the components brought with `graceful-ui` with the following command

```js
import { GracefulUI } from "graceful-ui";

Vue.use(GracefulUI);
```

2. Partial registration

With help of [babel-plugin-import](https://www.npmjs.com/package/babel-plugin-component), you can import components needed in your project.

```js
import { Button } from "graceful-ui";

Vue.use(Button);
```

You can also use imported component on your component template

```html
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
        libraryName: "graceful-ui",
        styleLibraryName: "theme"
      }
    ]
  ]
```

### CDN fonts

Add the following script to your document head to use fonts.

```html
<script src="https://at.alicdn.com/t/font_1763207_7o3xiq5n9rp.js"></script>
```

## License

[MIT](http://opensource.org/licenses/MIT)

Copyright (c) 2020-present, GracefulUI
