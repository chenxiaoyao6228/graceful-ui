// storybook mdx format docs is under development
// https://github.com/storybookjs/storybook/blob/master/addons/docs/docs/theming.md
import { create } from '@storybook/theming';

import { version, name, repository } from "../package.json";

export default create({
  base: 'light',
  brandTitle: `${name}-${version}`,
  brandUrl: 'https://github.com/chenxiaoyao6228/graceful-ui',
  //   brandImage: 'https://github.com/chenxiaoyao6228/cloudimg/blob/main/2021/logo-small.png?raw=true',
});
