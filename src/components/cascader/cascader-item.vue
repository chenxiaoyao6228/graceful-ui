<script>
import Icon from '../icon/icon.vue';

export default {
  name: 'CascaderItem',
  components: { Icon },
  props: {
    source: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      leftSelected: null
    };
  },
  computed: {
    rightItem() {
      if (this.leftSelected && this.leftSelected.children) {
        return this.leftSelected.children;
      }
      return null;
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
        @click="leftSelected = item"
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
      <CascaderItem :source="rightItem" />
    </div>
  </div>
</template>

<style lang="less" scoped>
@import './cascader.less';
</style>
