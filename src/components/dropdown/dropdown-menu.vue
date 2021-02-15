<script>
const prefixCls = 'g-dropdown';

export default {
  name: 'GDropdownMenu',
  data() {
    return {
      prefixCls
    };
  }
};
</script>
<template>
  <div
    :class="[`${prefixCls}-menu`]"
  >
    <slot />
  </div>
</template>
<style lang="less" scoped>
@import './dropdown.less';
</style>
