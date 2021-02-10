<script>
const prefixCls = 'g-col';
export default {
  name: 'GCol',
  props: {
    span: {
      type: [String, Number],
      default: '12'
    },
    offset: {
      type: [String, Number],
      default: 0
    }
  },
  data() {
    return {
      gutter: 0
    };
  },
  computed: {
    classes() {
      return [
        `${prefixCls}`,
        this.span ? `${prefixCls}-span-${this.span}` : '',
        this.offset ? `${prefixCls}-offset-${this.offset}` : ''
      ];
    },
    styles() {
      return {
        paddingLeft: `${this.gutter / 2}px`,
        paddingRight: `${this.gutter / 2}px`
      };
    }
  }
};
</script>

<template>
  <div
    :class="classes"
    :style="styles"
  >
    <slot />
  </div>
</template>

<style lang="less" scoped>
@import './col.less';
</style>
