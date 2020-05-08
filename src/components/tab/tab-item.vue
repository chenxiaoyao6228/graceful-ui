<script>
const prefixCls = 'g-tab';
export default {
  name: 'TabItem',
  inject: ['eventBus', 'selected'],
  props: {
    name: {
      type: [String, Number],
      required: true
    }
  },
  data() {
    return {
      prefixCls
    };
  },
  computed: {
    active() {
      return this.selected();
    }
  },
  updated() {
    console.log('updatedItem selected should change', this.selected);
  },
  methods: {
    handleItemClick() {
      this.eventBus.$emit('update:selected', this.name);
    }
  }
};
</script>

<template>
  <div
    :class="[`${prefixCls}-item`, active == name ? `${prefixCls}-item-active` : '']"
    @click="handleItemClick"
  >
    <slot />
  </div>
</template>

<style lang="less" scoped>
@import '../../styles/variables/var.less';
@prefixCls: ~'@{css-prefix}-tab-item';

.@{prefixCls} {
  flex-shrink: 0;
  padding: 0 3em;
  display: flex;
  align-items: center;
  &-active {
    background: red;
  }
  &:hover {
    cursor: pointer;
  }
}
</style>
