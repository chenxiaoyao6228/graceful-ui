<template>
  <component
    :is="type"
    :tag="tag"
    enter-active-class="slideDownIn"
    leave-active-class="slideDownOut"
    move-class="slide-move"
    v-bind="$attrs"
    v-on="hooks"
  >
    <slot />
  </component>
</template>

<script>
import baseTransition from './base-transition.vue';

export default {
  name: 'SlideDownTransition',
  mixins: [baseTransition],
  props: {
    duration: {
      type: Number,
      default: 300
    },
    styles: {
      type: Object,
      default: () => ({
        animationFillMode: 'both',
        animationTimingFunction: 'cubic-bezier(.25,.8,.50,1)'
      })
    }
  }
};
</script>

<style lang="less">
.slideDownIn {
  animation-name: slideDownIn;
}

.slideDownOut {
  animation-name: slideDownOut;
}

.slide-move {
  transition: transform .3s;
}
</style>
