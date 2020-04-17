import { storiesOf } from "@storybook/vue";
import Icon from "./icon.vue"; // TODO 批量处理story
import markdown from "./icon.md";

storiesOf("Icon", module).add(
  "Primary",
  () => ({
    components: { Icon },
    template: `<div style="font-size: 14px">
        <Icon type="download" />
        <Icon type="setting" />
        <Icon type="loading" />
    </div>`,
  }),
  {
    notes: { markdown: markdown },
  }
);
