import { render } from "@testing-library/vue";
import ButtonGroup from "./button-group.vue";
import Button from "./button.vue";

describe("ButtonGroup", () => {
  let ButtonGroupTester = {
    template: `
        <ButtonGroup><Button icon="left">上一页</Button><Button icon="right" iconPosition="right">下一页</Button></ButtonGroup>`,
    components: { ButtonGroup, Button },
  };
  test("validate child", () => {
    const { container } = render(ButtonGroupTester, {});
    expect(container.childNodes[0].childNodes.length).toBe(2);
  });
});
