<script>
export default {
  name: 'GTabBody'
};
</script>

<template>
  <div>
    <slot />
  </div>
</template>

<style lang="less" scoped>
@import '../../styles/index.less';
@prefixCls: ~'@{css-prefix}-tab-body';
</style>
