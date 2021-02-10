<script>
import CascaderItem from './cascader-item.vue';
import Icon from '../icon/icon.vue';


const prefixCls = 'g-cascader';
export default {
  name: 'GCascader',
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
      prefixCls,
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
    :class="[`${prefixCls}`]"
    @close-popover="handlePopoverClose"
  >
    <div
      :class="[
        `${prefixCls}-trigger`,
        popoverVisible ?'active': '']"
      @click="popoverVisible = !popoverVisible"
    >
      <div
        :class="[`${prefixCls}-select`]"
      >
        <div
          v-if="value.length"
          :class="[`${prefixCls}-select-content`]"
        >
          {{ value.join('/') }}
        </div>
        <div
          v-else
          :class="[`${prefixCls}-select-placeholder`]"
        >
          请选择
        </div>
        <div
          v-if="(!popoverVisible && value.length)"
          :class="[`${prefixCls}-select-clear`]"
          @click.stop="handleClear"
        >
          <Icon
            type="cross"
          />
        </div>
        <div
          v-else
          :class="[`${prefixCls}-select-caret`,popoverVisible ? 'active':'']"
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
        :class="[`${prefixCls}-popover`]"
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
