<script>
const prefixCls = 'g-layout-content';
export default {
  name: 'GContent',
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
@prefixCls: ~"@{css-prefix}-layout-content";

.@{prefixCls} {
  flex-grow: 1;
}
</style>
