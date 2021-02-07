<script>
import Icon from '../icon/icon.vue';

export default {
  name: 'CascaderItem',
  components: { Icon },
  props: {
    source: {
      type: Array,
      default: () => []
    },
    selected: {
      type: Array,
      default: () => []
    },
    level: {
      type: Number,
      default: 0
    }
  },
  computed: {
    rightItem() {
      const currentSelected = this.selected[this.level];
      if (currentSelected && currentSelected.children) {
        return currentSelected.children;
      }
      return null;
    }
  },
  methods: {
    onLeftClick(item) {
      const copy = JSON.parse(JSON.stringify(this.selected));
      copy[this.level] = item;
      copy.splice(this.level + 1); // 保留当前选中的,后面全部清空
      this.$emit('update:selected', copy);
    },
    onUpdatedSelected(newSelected) {
      this.$emit('update:selected', newSelected);
    }
  }
};
</script>

<template>
  <div class="g-cascader-item">
    <div class="g-cascader-item-left">
      <div
        v-for="item in source"
        :key="item.name"
        class="g-cascader-item-left-label"
        :class="selected[level] === item ? 'g-cascader-item-left-label-active': ''"
        @click="onLeftClick(item)"
      >
        <div class="g-cascader-item-left-name">
          {{ item.name }}
        </div>
        <span class="g-cascader-item-left-icon">
          <Icon type="arrow-right" />
        </span>
      </div>
    </div>
    <div
      v-if="rightItem"
      class="g-cascader-item-right"
    >
      <CascaderItem
        :source="rightItem"
        :selected="selected"
        :level="level+1"
        @update:selected="onUpdatedSelected"
      />
    </div>
  </div>
</template>

<style lang="less" scoped>
@import './cascader.less';
</style>
