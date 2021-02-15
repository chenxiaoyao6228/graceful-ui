<script>
const prefixCls = 'g-dropdown';

export default {
  name: 'GDropdownItem',
  data() {
    return {
      prefixCls
    };
  }
};
</script>
<template>
  <li :class="[`${prefixCls}-item`]">
    <slot />
  </li>
</template>
<style lang="less" scoped>
@import './dropdown.less';
</style>
