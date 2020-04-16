import { storiesOf } from "@storybook/vue";
import GButton from "./button.vue";
import markdown from "./button.md";
storiesOf("Button", module).add(
  "Primary",
  () => ({
    components: { GButton },
    template: `<div>
      <g-button type="primary">Primary</g-button>
      <g-button disabled>Disabled</g-button>
      <g-button round>Round</g-button>
    </div>`,
  }),
  {
    notes: { markdown: markdown },
  }
);
