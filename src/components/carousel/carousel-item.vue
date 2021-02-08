<template>
  <transition name="carousel">
    <div
      v-show="visible"
      class="g-carousel-item"
      :class="{'reverse': reverse, 'first': first}"
    >
      <slot />
    </div>
  </transition>
</template>
<script>
export default {
  name: 'CarouselItem',
  data() {
    return {
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
