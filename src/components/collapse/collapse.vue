<script>
import Vue from 'vue';

const prefixCls = 'g-collapse';
export default {
  name: 'GCollpase',
  props: {
    value: {
      type: [String, Number],
      required: true
    },
    accordion: {
      type: Boolean,
      default: false
    }
  },
  provide() {
    return {
      eventBus: this.eventBus,
      accordion: this.accordion,
      defaultSelected: this.value
    };
  },
  data() {
    return {
      prefixCls,
      eventBus: new Vue()

    };
  },
  created() {
    this.eventBus.$on('ItemClicked', (name) => {
      this.$emit('input', name);
    });
  }
};
</script>

<template>
  <div :class="[`${prefixCls}`]">
    <slot />
  </div>
</template>

<style lang="less" scoped>
@import './collapse.less';
</style>
