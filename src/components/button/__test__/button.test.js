import { render, fireEvent } from "@testing-library/vue";
import Button from "../button.vue";

const prefix = "g-button";

describe("Button", () => {
  test("button type", () => {
    const { container, getByText } = render(Button, {
      slots: {
        default: ["按钮"],
      },
      propsData: {
        type: "error",
      },
    });
    expect(getByText("按钮")).toBeTruthy();
    expect(
      container.childNodes[0].classList.contains(`${prefix}-error`)
    ).toBeTruthy();
  });

  test("icon type", () => {
    const { container } = render(Button, {
      props: {
        icon: "download",
      },
    });
    expect(container.innerHTML).toEqual(
      '<button class="g-button g-button-default g-button-size-default"><svg class="g-icon icon"><use xlink:href="#icon-download" aria-hidden="true"></use></svg> <!----> <div class="content"></div></button>'
    );
  });

  test("click event", async () => {
    const testId = "g-button-click";
    const spy = jest.fn();
    const ButtonClickElement = {
      template: `<Button @click="spy" data-testid="${testId}"></Button >`,
      methods: { spy },
    };
    const { getByTestId } = render(ButtonClickElement, {});
    const buttonElement = getByTestId(testId);
    await fireEvent.click(buttonElement);
    expect(spy).toHaveBeenCalledTimes(1);
  });
});
