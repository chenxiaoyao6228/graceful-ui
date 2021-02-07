<script>
import CascaderItem from './cascader-item.vue';

export default {
  name: 'Cascader',
  components: {
    CascaderItem
  },
  props: {
    value: {
      type: Array,
      default: () => []
    },
    source: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      selected: []
    };
  },
  // watch: {
  //   value() {
  //     // 根据选中的把重新转换selected
  //   }
  // },
  methods: {
    onUpdatedSelected(newSelected) {
      this.selected = newSelected;
      this.$emit('update:value', newSelected);
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
      <CascaderItem
        :source="source"
        :selected="selected"
        :level="0"
        @update:selected="onUpdatedSelected"
      />
    </div>
  </div>
</template>

<style lang="less" scoped>
@import './cascader.less';
</style>
