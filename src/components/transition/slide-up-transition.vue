<template>
  <component
    :is="type"
    :tag="tag"
    enter-active-class="slideUpIn"
    leave-active-class="slideUpOut"
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
  name: 'SlideUpTransition',
  mixins: [baseTransition],
  props: {
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
.slideUpIn {
  animation-name: slideUpIn;
}

.slideUpOut {
  animation-name: slideUpOut;
}

.slide-move {
  transition: transform .3s;
}
</style>
