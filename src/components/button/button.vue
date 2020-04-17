<template>
  <button class="g-button" :class="btnClass">
    <slot />
  </button>
</template>

<script>
const prefix = "g-button";
export default {
  name: "Button",
  props: {
    type: {
      type: String,
      default: "primary",
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    round: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    btnClass() {
      return [
        `${prefix}--${this.type}`,
        this.disabled ? `${prefix}--disabled` : "",
        this.round ? `${prefix}--round` : "",
      ];
    },
  },
};
</script>
<style lang="less">
@import "../../styles/variables/index";
.g-button {
  font-size: @font-size;
  color: @font-color;
  padding: @padding;
  border-radius: @border-radius;
  background: @button-bg;
  &:hover {
    border-color: @border-color-hover;
  }
  &:active {
    background-color: @button-bg-active;
  }
  &:focus {
    outline: none;
    cursor: pointer;
  }
  &--primary {
    background-color: @color-primary;
  }
  &--disabled {
    background-color: @color-disabled;
    color: rgba(255, 255, 255, 0.8);
  }
  &--round {
    border-radius: @border-radius-round;
  }
}
</style>
