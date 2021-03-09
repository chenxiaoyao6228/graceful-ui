<script>
// thanksTo: https://github.com/BinarCode/vue2-transitions/blob/master/src/mixins/baseTransition.js
export default {
  inheritAttrs: false,
  props: {
    duration: {
      type: Number,
      default: 3000
    },
    tag: {
      type: String,
      default: 'div'
    },
    group: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    type() {
      return this.group ? 'transition-group' : 'transition';
    },
    hooks() {
      return {
        beforeEnter: this.setDuration,
        afterEnter: this.cleanUpDuration,
        beforeLeave: this.setDuration,
        afterLeave: this.cleanUpDuration,
        leave: this.setAbsolutePosition,
        ...this.$listeners
      };
    }
  },
  methods: {
    setDuration(el) {
      el.style.animationDuration = `${this.duration}ms`;
    },
    cleanUpDuration(el) {
      el.style.animationDuration = '';
    },
    setAbsolutePosition(el) {
      if (this.group) {
        el.style.position = 'absolute';
      }
      return this;
    }
  }
};
</script>
<style lang="less">
@import '../../styles/animation/index.less';
</style>
