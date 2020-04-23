<template>
  <label
    class="g-switch"
    :class="classes"
    @click="toggle"
    @keydown.space="toggle"
  >
    <input type="hidden" value="false" />
    <span class="g-switch-inner" />
  </label>
</template>
<script>
const prefix = "g-switch";
export default {
  model: {
    prop: "isChecked",
    event: "input",
  },
  props: {
    isChecked: {
      type: Boolean,
      default: false,
    },
    size: {
      type: String,
      default: "default",
    },
  },
  data() {
    return {};
  },
  computed: {
    classes() {
      return [
        `${prefix}`,
        `${prefix}-${this.size}`,
        this.isChecked ? `${prefix}-checked` : "",
      ];
    },
  },
  methods: {
    toggle() {
      this.$emit("input", !this.isChecked); // 实现双向绑定
      this.$emit("on-change", !this.isChecked); // 让外层组件执行相应的回调
    },
  },
};
</script>

<style lang="less" scoped>
@import '../../styles/index.less';
@prefixCls: g-switch ;

.@{prefixCls}{
  display: inline-block;
  position: relative;
  width: @switch-width;
  height: @switch-height;
  line-height: @switch-height;
  vertical-align: middle;
  background-color: @switch-color-disabled;
  border-radius: @switch-border-radius;
  cursor: pointer;
  user-select: none;
  transition: all @animation-type @animation-time;
  &-checked {
    background: @switch-color-checked;
    &  .@{prefixCls}-inner {
      left:100% ;
      margin-left: -@switch-offset-left;
      transform: translateX(-100%);
    }
  }
  &-small{
    width:@switch-width-small;
    height:@switch-height-small;
    line-height:@switch-height-small;
    & .@{prefixCls}-inner{
      height: @switch-inner-radius-small;
      width: @switch-inner-radius-small;
    }
  }
  &-large {
    width:@switch-width-large;
    height:@switch-height-large;
    line-height:@switch-height-large;
    & .@{prefixCls}-inner{
      height: @switch-inner-radius-large;
      width: @switch-inner-radius-large;
    }
  }
  &-inner {
    position: absolute;
    top: 0;
    bottom: 0;
    margin: auto 0;
    left: @switch-offset-left;
    width: @switch-inner-radius;
    height: @switch-inner-radius;
    background-color: #fff;
    border-radius: 50%;
    transition: all @animation-type @animation-time;
  }

}
</style>
