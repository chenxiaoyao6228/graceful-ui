<script>
const prefixCls = 'g-layout-header';
export default {
  name: 'GHeader',
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
@import "../../styles/index.less";
@prefixCls: ~"@{css-prefix}-layout-header";

.@{prefixCls} {
  width: 100%;
}
</style>
