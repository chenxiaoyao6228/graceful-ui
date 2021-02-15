<script>
import EventEmitter from '../../mixins/emitter';

const prefixCls = 'g-dropdown';

export default {
  name: 'GDropdownItem',
  mixins: [EventEmitter],
  data() {
    return {
      prefixCls
    };
  },
  methods: {
    handleClick() {
      this.dispatch('GDropdown', 'on-click', this.name);
    }
  }
};
</script>
<template>
  <li
    :class="[`${prefixCls}-item`]"
    @click="handleClick"
  >
    <slot />
  </li>
</template>
<style lang="less" scoped>
@import './dropdown.less';
</style>
