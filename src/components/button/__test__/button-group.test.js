import { render } from "@testing-library/vue";
import ButtonGroup from "../button-group.vue";
import Button from "../button.vue";

describe("ButtonGroup", () => {
  let ButtonGroupTester = {
    components: { ButtonGroup, Button },
    template: `
        <ButtonGroup data-testid="button-group"><Button icon="left">上一页</Button><Button icon="right" iconPosition="right">下一页</Button></ButtonGroup>`,
  };
  test("match snapshots", () => {
    const { container } = render(ButtonGroupTester, {});
    expect(container).toMatchSnapshot();
  });

  test("validate child", () => {
    const { getByTestId } = render(ButtonGroupTester);
    expect(getByTestId('button-group').childNodes.length).toBe(2);
  });
});
