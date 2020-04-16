import { shallowMount } from "@vue/test-utils";
import GButton from "./button.vue";

describe("Button", () => {
  test("is a Vue instance", () => {
    const wrapper = shallowMount(GButton);
    expect(wrapper.isVueInstance()).toBeTruthy();
  });

  test("positive color", () => {
    const wrapper = shallowMount(GButton, {
      propsData: {
        type: "positive",
      },
    });
    expect(wrapper.classes("g-button--positive")).toBeTruthy();
  });
});
