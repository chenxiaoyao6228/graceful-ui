<script>
import SlideDownTransition from '../transition/slide-down-transition.vue';

const prefixCls = 'g-dropdown';
export default {
  name: 'GDropdownMenu',
  components: {
    SlideDownTransition
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
  <SlideDownTransition>
    <div
      v-show="visible"
      :class="[`${prefixCls}-menu`]"
    >
      <slot />
    </div>
  </SlideDownTransition>
</template>
<style lang="less" scoped>
@import './dropdown.less';
</style>
