<template>
  <transition name="carousel">
    <div
      v-show="visible"
      :class="[
        `${prefixCls}-item`,
        reverse && 'reverse',
        first && 'first',
      ]"
    >
      <slot />
    </div>
  </transition>
</template>
<script>
const prefixCls = 'g-carousel';
export default {
  name: 'GCarouselItem',
  data() {
    return {
      prefixCls,
      visible: false,
      reverse: false,
      first: false // 第一张不进行动画
    };
  }
};
</script>

<style lang="less" scoped>
@import './carousel.less';
</style>
