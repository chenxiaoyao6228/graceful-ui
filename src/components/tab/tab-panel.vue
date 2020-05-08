<script>
export default {
  name: 'TabPanel'
};
</script>

<template>
  <div>
    <slot />
  </div>
</template>

<style lang="less" scoped>
@import '../../styles/variables/var.less';
@prefixCls: ~'@{css-prefix}-tab-panel';

.@{prefixCls} {
  background: red;
}
</style>
