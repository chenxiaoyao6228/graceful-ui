<script>
import CascaderItem from './cascader-item.vue';

const prefixCls = 'g-cascader';

export default {
  name: 'Cascader',
  components: {
    CascaderItem
  },
  props: {
    options: {
      type: Array,
      default: () => []
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
  <div :class="[`${prefixCls}`]">
    <div class="trigger">
      <slot />
    </div>
    <div class="popover">
      <div
        v-for="item in options"
        :key="item.name"
      >
        <CascaderItem :source="item" />
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
@import './cascader.less';
</style>
