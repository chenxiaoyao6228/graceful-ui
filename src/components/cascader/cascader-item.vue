<script>
import Icon from '../icon/icon.vue';

const prefixCls = 'g-cascader';
export default {
  name: 'GCascaderItem',
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
  data() {
    return {
      prefixCls,
      currentSelected: {}
    };
  },
  computed: {
    rightItem() {
      const currentSelectedName = this.selected[this.level];
      if (currentSelectedName) {
        const currentSelected = this.source.filter((item) => item.name === currentSelectedName)[0];
        if (currentSelected && currentSelected.children) {
          return currentSelected.children;
        }
      }
      return null;
    }
  },
  methods: {
    onLeftClick(item) {
      const copy = this.selected.slice();
      copy[this.level] = item.name;
      // 判断这个selected后面是否还有children,如果没有,证明已经是叶子节点,关闭弹窗
      if (!item.children) {
        this.$emit('close-popover');
      }
      copy.splice(this.level + 1); // 保留当前选中的,后面全部清空
      this.$emit('update:selected', copy);
    },
    onUpdatedSelected(newSelected) {
      this.$emit('update:selected', newSelected);
    },
    handlePopoverClose() {
      this.$emit('close-popover'); // 向上传递
    }
  }
};
</script>

<template>
  <div :class="[`${prefixCls}-item`]">
    <div :class="[`${prefixCls}-item-left`]">
      <div
        v-for="item in source"
        :key="item.name"
        :class="[
          `${prefixCls}-item-left-label`,
          selected[level] === item.name && `${prefixCls}-item-left-label-active`
        ]"
        @click="onLeftClick(item)"
      >
        <div

          :class="[`${prefixCls}-item-left-name`]"
        >
          {{ item.name }}
        </div>
        <span :class="[`${prefixCls}-item-left-icon`]">
          <Icon type="arrow-right" />
        </span>
      </div>
    </div>
    <div
      v-if="rightItem"
      :class="[`${prefixCls}-item-right`]"
    >
      <GCascaderItem
        :source="rightItem"
        :selected="selected"
        :level="level+1"
        @close-popover="handlePopoverClose"
        @update:selected="onUpdatedSelected"
      />
    </div>
  </div>
</template>


<style lang="less" scoped>
@import './cascader.less';
</style>
