<script>
const prefixCls = 'g-layout-footer';

export default {
  name: 'GFooter',
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
@prefixCls: ~"@{css-prefix}-layout-footer";

.@{prefixCls} {
  width: 100%;
}
</style>
