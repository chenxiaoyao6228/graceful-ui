import Button from "./button.vue";
import ButtonGroup from "./button-group.vue";

Button.Group = ButtonGroup;

Button.install = (Vue) => {
  Vue.component("Button", Button);
  Vue.component("ButtonGroup", ButtonGroup);
};

export default Button;
