<template>
  <!-- eslint-disable -->
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
