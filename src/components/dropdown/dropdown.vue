<script>
import EventEmitter from '../../mixins/emitter';
import clickOutside from '../../directives/clickoutside';

const prefixCls = 'g-dropdown';
export default {
  name: 'GDropdown',
  directives: { clickOutside },
  mixins: [EventEmitter],
  provide() {
    return {
      sharedState: this.sharedState
    };
  },
  data() {
    return {
      prefixCls,
      sharedState: {
        visible: false
      }
    };
  },
  methods: {
    toggleVisible() {
      this.sharedState.visible = !this.sharedState.visible;
    }
  }
};
</script>
<template>
  <ul
    v-click-outside="toggleVisible"
    :class="[`${prefixCls}`]"
    @click="toggleVisible"
  >
    <div :class="[`${prefixCls}-trigger`]">
      <slot />
    </div>
    <slot name="list" />
  </ul>
</template>
<style lang="less" scoped>
@import './dropdown.less';
</style>
