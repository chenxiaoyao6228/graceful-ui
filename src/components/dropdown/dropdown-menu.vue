<script>
import { SlideYUpTransition } from 'vue2-transitions';

const prefixCls = 'g-dropdown';
export default {
  name: 'GDropdownMenu',
  components: {
    SlideYUpTransition
  },
  inject: ['sharedState'],
  props: {},
  data() {
    return {
      prefixCls
    };
  },
  computed: {
    visible() {
      return this.sharedState.visible;
    }
  }
};
</script>
<template>
  <SlideYUpTransition>
    <div
      v-show="visible"
      :class="[`${prefixCls}-menu`]"
    >
      <slot />
    </div>
  </SlideYUpTransition>
</template>
<style lang="less" scoped>
@import './dropdown.less';
</style>
