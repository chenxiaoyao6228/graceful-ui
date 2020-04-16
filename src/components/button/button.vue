<template>
  <button class="g-button" :class="btnClass">
    <slot />
  </button>
</template>

<script>
const prefix = "g-button";
export default {
  name: "GButton",
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
  color: white;
  font-size: 14px;
  padding: 12px 20px;
  border-radius: 5px;
  &:focus {
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
    border-radius: 20px;
  }
}
</style>
