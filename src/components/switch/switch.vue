<script>
const prefix = 'g-switch';
export default {
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
      default: 'default'
    }
  },
  data() {
    return {};
  },
  computed: {
    classes() {
      return [`${prefix}`, `${prefix}-${this.size}`, this.isChecked ? `${prefix}-checked` : ''];
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
    class="g-switch"
    :class="classes"
    @click="toggle"
    @keydown.space="toggle"
  >
    <input
      type="hidden"
      value="false"
    >
    <span class="g-switch-inner" />
  </label>
</template>

<style lang="less" scoped>
@import './switch.less';
</style>
