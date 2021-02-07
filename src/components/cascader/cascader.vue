<script>
import CascaderItem from './cascader-item.vue';
import Icon from '../icon/icon.vue';

export default {
  name: 'Cascader',
  components: {
    CascaderItem, Icon
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
    },
    handleClear() {
      this.handlePopoverClose();
      this.$emit('input', []);
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
      :class="popoverVisible ?'active': ''"
      @click="popoverVisible = !popoverVisible"
    >
      <div
        class="g-cascader-select"
      >
        <div
          v-if="value.length"
          class="g-cascader-select-content"
        >
          {{ value.join('/') }}
        </div>
        <div
          v-else
          class="g-cascader-select-placeholder"
        >
          请选择
        </div>
        <div
          v-show="(!popoverVisible && value.length)"
          class="g-cascader-select-clear"
          @click.stop="handleClear"
        >
          <Icon
            type="error"
          />
        </div>
        <div
          v-show="popoverVisible && value.length"
          class="g-cascader-select-caret"
          :class="popoverVisible ? 'active':''"
        >
          <Icon
            type="arrow-down"
          />
        </div>
      </div>
    </div>
    <transition name="fade">
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
    </transition>
  </div>
</template>

<style lang="less" scoped>
@import './cascader.less';
</style>
