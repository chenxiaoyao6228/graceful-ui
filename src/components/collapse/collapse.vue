<script>
import Vue from 'vue';

const prefixCls = 'g-collapse';
export default {
  name: 'Collpase',
  props: {
    value: {
      type: [String, Number],
      required: true
    }
  },
  provide() {
    return {
      eventBus: this.eventBus
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
  <div :class="[ `${prefixCls}`]">
    <slot />
  </div>
</template>

<style lang="less" scoped>
@import './collapse.less';
</style>
