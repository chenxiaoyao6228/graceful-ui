import { render } from "@testing-library/vue";
import Icon from "../icon.vue";

describe("Icon", () => {
  it("icon type", () => {
    const { container } = render(Icon, {
      propsData: {
        type: "download",
      },
    });
    expect(container.innerHTML).toBe(
      '<svg class="g-icon"><use xlink:href="#icon-download" aria-hidden="true"></use></svg>'
    );
  });
});
