<script>
const prefixCls = 'g-layout-footer';

export default {
  name: 'Footer',
  computed: {
    classes() {
      return [`${prefixCls}`];
    }
  }
};
</script>
<template>
  <div :class="classes">
    <slot />
  </div>
</template>

<style lang="less" scoped>
@import "../../styles/variables/var.less";
@prefixCls: ~"@{css-prefix}-layout-footer";

.@{prefixCls} {
  width: 100%;
}
</style>
