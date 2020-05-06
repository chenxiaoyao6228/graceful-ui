<script>
const prefixCls = 'g-layout';
export default {
  name: 'Layout',
  data() {
    return {
      hasSider: false
    };
  },
  computed: {
    classes() {
      return [`${prefixCls}`, this.hasSider ? `${prefixCls}-has-sider` : ''];
    }
  },
  mounted() {
    this.$children.forEach((vm) => {
      if (vm.$options.name === 'Sider') {
        this.hasSider = true;
      }
    });
  }
};
</script>

<template>
  <div :class="classes">
    <slot />
  </div>
</template>

<style lang="less" scoped>
@import "../../styles/variables/var.less";

@prefixCls: ~"@{css-prefix}-layout";

.@{prefixCls} {
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  flex-wrap: wrap;
  &-has-sider {
    flex-direction: row;
  }
}
</style>
