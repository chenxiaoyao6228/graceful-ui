import { render, fireEvent } from "@testing-library/vue";
import Switch from "../switch.vue";
let spy = jest.fn();
let Component = {
  template: `<GSwitch v-model="value" @on-change="spy" data-testid="test"></GSwitch>`,
  components: { GSwitch: Switch },
  data() {
    return { value: false };
  },
  methods: {
    spy,
  },
};

describe("Switch", () => {
  it("should match snapshots", () => {
    const { container } = render(Component);
    expect(container).toMatchSnapshot();
  });

  it("toggle properly", async() => {
    const { getByTestId } = render(Component);
    let Switch = getByTestId("test");

    await fireEvent.click(Switch);
    expect(spy).toHaveBeenCalledTimes(1);
  });
});
