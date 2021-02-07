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
      popoverVisible: false
    };
  },
  methods: {
    onUpdatedSelected(newSelected) {
      this.$emit('input', newSelected);
    },
    handlePopoverClose() {
      this.popoverVisible = false;
    }
  }
};
</script>

<template>
  <div
    class="g-cascader"
    @close-popover="handlePopoverClose"
  >
    <div
      class="g-cascader-trigger"
      @click="popoverVisible = true"
    >
      {{ value }}
    </div>
    <div
      v-if="popoverVisible"
      class="g-cascader-popover"
    >
      <CascaderItem
        :source="source"
        :selected="value"
        :level="0"
        @close-popover="handlePopoverClose"
        @update:selected="onUpdatedSelected"
      />
    </div>
  </div>
</template>

<style lang="less" scoped>
@import './cascader.less';
</style>
