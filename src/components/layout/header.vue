<template>
  <div :class="classes">
    <slot />
  </div>
</template>
<script>
const prefixCls = "g-layout-header";
export default {
  name: "Header",
  computed: {
    classes() {
      return [`${prefixCls}`];
    },
  },
};
</script>

<style lang="less" scoped>
@import "../../styles/variables/var.less";
@prefixCls: ~"@{css-prefix}-layout-header";

.@{prefixCls} {
  width: 100%;
}
</style>
