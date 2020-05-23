<script>
const prefixCls = 'g-cascader-item';
export default {
  name: 'CascaderItem',
  props: {
    source: {
      type: Object,
      default: () => {}
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
  <div :class="[ `${prefixCls}`]">
    <template v-if="source && source.name">
      {{ source.name }}
    </template>
    <template
      v-if="source && source.children"
    >
      <CascaderItem
        v-for="item in source.children"
        :key="item.name"
        :source="item"
      />
    </template>
  </div>
</template>

<style lang="less" scoped>
@import './cascader.less';
</style>
