<script>
const prefixCls = 'g-tab-head';
export default {
  name: 'TabHead',
  inject: ['eventBus'],
  data() {
    return {
      prefixCls
    };
  }
};
</script>

<template>
  <div :class="[`${prefixCls}`]">
    <slot />
    <div :class="[`${prefixCls}-actions`]">
      <slot name="actions" />
    </div>
  </div>
</template>

<style lang="less" scoped>
@import '../../styles/index.less';
@prefixCls: ~'@{css-prefix}-tab-head';

.@{prefixCls} {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  margin-bottom: 16px;
  position: relative;
  border-bottom: 1px solid @tab-disabled-color;
  &-actions {
    margin-left: auto;
  }
}
</style>
