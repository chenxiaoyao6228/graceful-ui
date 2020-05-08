<script>
const prefixCls = 'g-tab';
export default {
  name: 'TabHead',
  inject: ['eventBus'],
  data() {
    return {
      prefixCls
    };
  },
  created() {}
};
</script>

<template>
  <div :class="[`${prefixCls}-head`]">
    <slot />
    <div :class="[`${prefixCls}-head-actions`]">
      <slot name="actions" />
    </div>
  </div>
</template>

<style lang="less" scoped>
@import '../../styles/variables/var.less';
@prefixCls: ~'@{css-prefix}-tab-head';

.@{prefixCls} {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  border: 1px solid red;
  &-actions {
    margin-left: auto;
  }
}
</style>
