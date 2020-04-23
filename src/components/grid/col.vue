<template>
  <div :class="classes" :style="styles">
    <slot />
  </div>
</template>
<script>
const prefixCls = "g-col";
export default {
  name: "Col",
  props: {
    span: {
      type: [String, Number],
      default: "12",
    },
    offset: {
      type: [String, Number],
      default: 0,
    },
  },
  data() {
    return {
      gutter: 0,
    };
  },
  computed: {
    classes() {
      return [
        `${prefixCls}`,
        this.span ? `${prefixCls}-span-${this.span}` : "",
        this.offset ? `${prefixCls}-offset-${this.offset}` : "",
      ];
    },
    styles() {
      return {
        paddingLeft: this.gutter / 2 + "px",
        paddingRight: this.gutter / 2 + "px",
      };
    },
  },
};
</script>

<style lang="less" scoped>
@import "../../styles/variables/var.less";

@prefixCls: g-col;

@iterations: @max-col-num;
.grid-span-offset-loop (@index) when (@index > 0) {
  .@{prefixCls}-span-@{index} {
    width: percentage(@index / @iterations);
  }
  .@{prefixCls}-offset-@{index} {
    margin-left: percentage(@index / @iterations);
  }
  .grid-span-offset-loop(@index - 1);
}

.grid-span-offset-loop(@iterations);
</style>
