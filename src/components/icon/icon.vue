<script>
const prefixCls = 'g-icon';
export default {
  name: 'GIcon',
  props: {
    type: {
      type: String,
      default: ''
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
  <svg
    :class="[`${prefixCls}`]"
    @click="$emit('click', $event)"
  >
    <use
      :xlink:href="`#icon-${type}`"
      aria-hidden="true"
    />
  </svg>
</template>

<style lang="less" scoped>
@import './icon.less';
</style>
