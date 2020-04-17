<template>
  <button class="g-button" :class="classes">
    <svg v-if="icon" class="icon">
      <use :xlink:href="`#icon-${icon}`" aria-hidden="true" />
    </svg>
    <div class="content">
      <slot />
    </div>
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
    icon: {
      type: String,
      default: "setting",
    },
    iconPosition: {
      type: String,
      // validator(value) {
      //   if (!(value === 'left' || value === 'right' || value === '')) {
      //     console.warn('请输入正确的参数');
      //   }
      // },
      default: "",
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
    classes() {
      return [
        `${prefix}--${this.type}`,
        this.disabled ? `${prefix}--disabled` : "",
        this.round ? `${prefix}--round` : "",
        this.iconPosition ? `icon-${this.iconPosition}` : "",
      ];
    },
  },
};
</script>
<style lang="less">
@import "../../styles/variables/index";
.g-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  vertical-align: middle;
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

  // icon
  &.icon-right {
    .icon {
      order: 2;
      margin-right: 0;
    }
    .content {
      order: 1;
      margin-right: 0.3em;
    }
  }
  .icon {
    width: 1em;
    height: 1em;
    margin-right: 0.3em;
    vertical-align: -0.15em;
    fill: currentColor;
    overflow: hidden;
    order: 1;
  }
  .content {
    order: 2;
  }
}
</style>
