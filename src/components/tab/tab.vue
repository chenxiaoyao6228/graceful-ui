<script>
import Vue from 'vue';
import oneOf from '../../utils/tools';

const prefixCls = 'g-tab';
export default {
  name: 'Tab',
  provide() {
    return {
      eventBus: this.eventBus,
      selected: () => this.selectedTab
    };
  },
  props: {
    selected: {
      type: [String, Number],
      required: true
    },
    direction: {
      type: String,
      default: 'horizontal',
      validator(value) {
        return oneOf(value, ['horizontal', 'vertical']);
      }
    }
  },
  data() {
    return {
      prefixCls,
      eventBus: new Vue()
    };
  },
  computed: {
    selectedTab() {
      return this.selected;
    }
  },
  created() {
    this.eventBus.$on('update:selected', (name) => {
      this.$emit('update:selected', name);
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
@import '../../styles/variables/var.less';
@prefixCls: ~'@{css-prefix}-tab';

.@{prefixCls} {
  display: flex;
  flex-direction: column;
}
</style>
