<script>
export default {
  name: "ButtonGroup",
  data() {
    return {};
  },
  mounted() {
    for (let child of this.$el.children) {
      if (child.nodeName.toLowerCase() !== "button") {
        console.warn(
          `ButtonGroup的子元素只允许Button元素, 当前子元素为${child.nodeName.toLowerCase()}`
        );
      }
    }
  },
};
1;
</script>

<template>
  <div class="g-button-group">
    <slot />
  </div>
</template>

<style lang="less" scoped>
@import "../../styles/variables/index";

.g-button-group {
  display: inline-flex;
  vertical-align: middle;
  > .g-button {
    border-radius: 0;
    &:first-child {
      border-top-left-radius: @border-radius;
      border-bottom-left-radius: @border-radius;
    }
    &:last-child {
      border-top-right-radius: @border-radius;
      border-bottom-right-radius: @border-radius;
    }
    &:hover {
      position: relative;
      z-index: 1;
    }
  }
}
</style>
