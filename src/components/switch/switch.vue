<script>
const prefixCls = 'g-switch';
export default {
  name: 'GSwitch',
  model: {
    prop: 'isChecked',
    event: 'input'
  },
  props: {
    isChecked: {
      type: Boolean,
      default: false
    },
    size: {
      type: String,
      default: 'medium'
    }
  },
  data() {
    return {
      prefixCls
    };
  },
  computed: {
    classes() {
      return [`${prefixCls}`, `${prefixCls}-${this.size}`, this.isChecked ? `${prefixCls}-checked` : ''];
    }
  },
  methods: {
    toggle() {
      this.$emit('input', !this.isChecked); // 实现双向绑定
      this.$emit('on-change', !this.isChecked); // 让外层组件执行相应的回调
    }
  }
};
</script>
<template>
  <label
    :class="classes"
    @click="toggle"
    @keydown.space="toggle"
  >
    <input
      type="hidden"
      value="false"
    >
    <span :class="[`${prefixCls}-inner`]" />
  </label>
</template>

<style lang="less" scoped>
@import './switch.less';
</style>
