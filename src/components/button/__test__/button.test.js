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
        type: "danger",
      },
    });
    expect(getByText("按钮")).toBeTruthy();
    expect(
      container.childNodes[0].classList.contains(`${prefix}-danger`)
    ).toBeTruthy();
  });

  test("icon type", () => {
    const { container } = render(Button, {
      props: {
        icon: "download",
      },
    });
    expect(container.innerHTML).toEqual(
      '<button class="g-button g-button-primary"><svg class="g-icon icon"><use xlink:href="#icon-download" aria-hidden="true"></use></svg> <!----> <div class="content"></div></button>'
    );
  });

  test("loading state", () => {
    const testId = "g-button-loading";
    const { getByTestId } = render(Button, {
      propsData: {
        loading: true,
      },
      attrs: {
        "data-testid": testId,
      },
    });

    let buttonElement = getByTestId(testId);
    expect(buttonElement.classList.contains("loading")).toBeTruthy();
    expect(buttonElement.querySelector("use").getAttribute("xlink:href")).toBe(
      "#icon-loading"
    );
  });

  // TODO test iconPosition
  // test('iconPosition', () => {
  //   let buttonTester = {
  //     template: `<div>
  //       <Button data-testid="button-position-1"><Icon type="setting" />按钮1</Button>
  //       <Button data-testid="button-position-2" icon-position="right"><Icon type="setting" />按钮2</Button>
  //     </div>`,
  //     components: {Icon}
  //   }
  //   let { getByTestId } = render(buttonTester)
  //   let svg_left = getByTestId('button-position-1').querySelector('svg')
  //   let svg_right = getByTestId('button-position-2').querySelector('svg')

  //   console.log(svg_right.outerHTML);

  // })

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
