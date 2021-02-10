<script>
const prefixCls = 'g-tab-panel';
export default {
  name: 'GTabPanel',
  inject: ['selected'],
  props: {
    name: {
      type: String,
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
  }
};
</script>

<template>
  <div
    v-if="name === active"
    :class="[`${prefixCls}`]"
  >
    <slot />
  </div>
</template>

<style lang="less" scoped>
@import '../../styles/index.less';
@prefixCls: ~'@{css-prefix}-tab-panel';

.@{prefixCls} {
  line-height: 1.5;
}
</style>
