<script>
import CascaderItem from './cascader-item.vue';

export default {
  name: 'Cascader',
  components: {
    CascaderItem
  },
  props: {
    source: {
      type: Array,
      default: () => []
    }
  }
};
</script>

<template>
  <div class="g-cascader">
    <div class="g-cascader-trigger">
      <slot />
    </div>
    <div class="g-cascader-popover">
      <CascaderItem :source="source" />
    </div>
  </div>
</template>

<style lang="less" scoped>
@import './cascader.less';
</style>
