<script>
const prefixCls = "g-layout-sider";
export default {
  name: "Sider",
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
@prefixCls: ~"@{css-prefix}-layout-sider";
</style>
