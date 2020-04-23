<template>
  <div :class="classes">
    <slot />
  </div>
</template>
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

<style lang="less" scoped>
@import "../../styles/variables/var.less";
@prefixCls: ~"@{css-prefix}-layout-sider";

.@{prefixCls} {
}
</style>
