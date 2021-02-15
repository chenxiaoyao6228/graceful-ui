<script>
const prefixCls = 'g-dropdown';

export default {
  name: 'GDropdown',
  props: {
    visible: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      prefixCls
    };
  }
};
</script>
<template>
  <ul :class="[`${prefixCls}`]">
    <template>
      <slot />
    </template>
    <div
      v-if="false"
    >
      <slot
        name="list"
      />
    </div>
  </ul>
</template>
<style lang="less" scoped>
@import './dropdown.less';
</style>
