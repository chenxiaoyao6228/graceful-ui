import { mount } from "@vue/test-utils"
import { render } from "@testing-library/vue";
import Input from "../input.vue";

let InputComponent = {
  components: {Input},
  template: `
        <form>
            <Input data-testid="input" v-model="value" placeholder="请输入内容..."></Input>
            <span data-testid="content">{{value}}</span>
        </form>
    `,
  data() {
    return { value: '1' };
  }
};

describe("Input", () => {
  it("snapshots", () => {
    const { container } = render(InputComponent);
    expect(container).toMatchSnapshot();
  });

  it("v-model", async() => {
    const wrapper = mount(InputComponent)
    const input = wrapper.find('input')
    input.element.value = '123'
    input.trigger('input')
    expect(wrapper.vm.value).toBe('123')
  });
});
