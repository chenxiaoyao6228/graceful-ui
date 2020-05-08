<script>
export default {
  name: 'TabBody'
};
</script>

<template>
  <div>
    <slot />
  </div>
</template>

<style lang="less" scoped>
@import '../../styles/variables/var.less';
@prefixCls: ~'@{css-prefix}-tab-body';

.@{prefixCls} {
  background: red;
}
</style>
