import { storiesOf } from "@storybook/vue";
import Button from "./button.vue";
import markdown from "./button.md";
storiesOf("Button", module).add(
  "Primary",
  () => ({
    components: { Button },
    data() {
      return {
        loading: false,
      };
    },
    template: `<div @click="loading = !loading ">
      <Button type="primary">主色</Button>
      <Button disabled>禁用</Button>
      <Button round>圆角</Button>
      <Button icon="setting">图标</Button>
      <Button icon="download" iconPosition="left">图标在左</Button>
      <Button icon="download" iconPosition="right">图标在右</Button>
      <Button :loading="loading">点击加载状态</Button>
    </div>`,
  }),
  {
    notes: { markdown: markdown },
  }
);
