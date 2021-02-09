<script>
export default {
  name: 'ButtonGroup',
  data() {
    return {};
  },
  mounted() {
    for (let i = 0, len = this.$el.children; i < len; i++) {
      const child = this.$el.children[i];
      if (child.nodeName.toLowerCase() !== 'button') {
        console.warn(
          `ButtonGroup的子元素只允许Button元素, 当前子元素为${child.nodeName.toLowerCase()}`
        );
      }
    }
  }
};
</script>

<template>
  <div :class="[`${prefix}-group`]">
    <slot />
  </div>
</template>

<style lang="less" scoped>
@import '../../styles/index';
@prefixCls: ~'@{css-prefix}-button';


.@{prefixCls}-group {
  display: inline-flex;
  vertical-align: middle;
  > .@{prefixCls} {
    border-radius: 0;
    &:first-of-type {
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
