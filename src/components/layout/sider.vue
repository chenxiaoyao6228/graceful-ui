<script>
const prefixCls = 'g-layout-sider';
export default {
  name: 'GSider',
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
@prefixCls: ~"@{css-prefix}-layout-sider";
.@{prefixCls}{
  width: 100%;
}
</style>
