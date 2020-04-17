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
    </div>`,
  }),
  {
    notes: { markdown: markdown },
  }
);
