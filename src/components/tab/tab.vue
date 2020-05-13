<script>
import Vue from 'vue';

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
  },
  mounted() {
    this.$children.forEach((item) => {
      if (item.$options.name === 'TabHead') {
        item.$children.forEach((subItem) => {
          if (subItem.$options.name === 'TabItem' && subItem.name === this.selected) {
            this.eventBus.$emit('update:selected', this.selected, subItem);
          }
        });
      }
    });
  }
};
</script>

<template>
  <div
    :class="[`${prefixCls}`, this.horizontal ? `${prefixCls}-horizontal` : '']"
  >
    <slot />
  </div>
</template>

<style lang="less" scoped>
@import '../../styles/variables/var.less';
@prefixCls: ~'@{css-prefix}-tab';

.@{prefixCls} {
  display: flex;
  flex-direction: column;
  &-horizontal{
    flex-direction: row;
  }
}
</style>
