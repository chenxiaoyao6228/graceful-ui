import { storiesOf } from "@storybook/vue";
import Button from "./button.vue";
import ButtonGroup from "./button-group.vue";
import markdown from "./button.md";

storiesOf("Button", module).add(
  "Primary",
  () => ({
    components: { Button, ButtonGroup },
    data() {
      return {
        loading: false,
      };
    },
    template: `<div>
      <Button type="primary">主色</Button>
      <Button disabled>禁用</Button>
      <Button round>圆角</Button>
      <Button icon="setting">图标</Button>
      <Button icon="download" iconPosition="left">图标在左</Button>
      <Button icon="download" iconPosition="right">图标在右</Button>
      <Button :loading="loading"  @click="loading = !loading">点击加载状态</Button>
      <div style="margin-top: 10px">
       <ButtonGroup>
        <Button icon="left">上一页</Button>
        <div>lll</div>
        <Button icon="right" iconPosition="right">下一页</Button>
       </ButtonGroup>
      </div>
    </div>`,
  }),
  {
    notes: { markdown: markdown },
  }
);
