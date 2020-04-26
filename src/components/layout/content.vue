<script>
const prefixCls = "g-layout-content";
export default {
  name: "Content",
  computed: {
    classes() {
      return [`${prefixCls}`];
    },
  },
};
</script>
<template>
  <div :class="classes">
    <slot />
  </div>
</template>

<style lang="less" scoped>
@import "../../styles/variables/var.less";
@prefixCls: ~"@{css-prefix}-layout-content";

.@{prefixCls} {
  flex-grow: 1;
}
</style>
