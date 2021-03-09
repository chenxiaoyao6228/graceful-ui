<template>
  <!-- thanksTo: https://github.com/BinarCode/vue2-transitions/blob/master/src/mixins/baseTransition.js -->
  <component
    :is="type"
    :tag="tag"
    enter-active-class="fadeIn"
    leave-active-class="fadeOut"
    move-class="fade-move"
    v-bind="$attrs"
    v-on="hooks"
  >
    <slot />
  </component>
</template>

<script>
import baseTransition from './base-transition.vue';

export default {
  name: 'FadeTransition',
  mixins: [baseTransition],
  props: {
    duration: {
      type: Number,
      default: 2000
    }
  }
};
</script>

<style lang="less" scoped>
.fadeIn {
  animation-name: fadeIn
}
.fadeOut {
  animation-name: fadeOut;
}
.fade-move {
  transition: transform 0.3s ease-out;
}
</style>
