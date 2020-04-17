import { storiesOf } from "@storybook/vue";
import Button from "./button.vue";
import markdown from "./button.md";
storiesOf("Button", module).add(
  "Primary",
  () => ({
    components: { Button },
    template: `<div>
      <Button type="primary">Primary</Button>
      <Button disabled>Disabled</Button>
      <Button round>Round</Button>
      <Button icon="download">Icon</Button>
      <Button icon="download" iconPosition="left">IconPosition Left</Button>
      <Button icon="download" iconPosition="right">IconPosition Right</Button>
    </div>`,
  }),
  {
    notes: { markdown: markdown },
  }
);
