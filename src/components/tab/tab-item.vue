<script>
const prefixCls = 'g-tab';
export default {
  name: 'TabItem',
  inject: ['eventBus', 'selected'],
  props: {
    name: {
      type: [String, Number],
      required: true
    },
    disabled: {
      type: Boolean,
      default: false
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
  methods: {
    handleItemClick() {
      this.eventBus.$emit('update:selected', this.name);
    }
  }
};
</script>

<template>
  <div
    :class="[
      `${prefixCls}-item`,
      active == name ? `${prefixCls}-item-active` : '',
      disabled ? `${prefixCls}-item-disabled` : '']"
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
  margin-bottom: -2px;
  padding: 12px 16px;
  box-sizing: border-box;
  margin-right: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px solid transparent;
  &:hover {
    cursor: pointer;
  }
  &:last-child{
    margin-right: 0;
  }
  &-active {
    font-weight: bold;
    color: @tab-active-color;
    border-bottom-color:  @tab-active-color;
  }
  &-disabled{
    color: @tab-disabled-color;
    &:hover{
      cursor: not-allowed;
    }
  }
}
</style>
