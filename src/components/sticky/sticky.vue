<template>
  <div
    ref="wrapper"
    :class="[
      `${prefixCls}-wrapper`
    ]"
  >
    <div
      ref="sticky"
      :class="`${prefixCls} ${fixed ? `${prefixCls}-fixed` : ''}`"
      :style="stickyStyle"
    >
      <slot />
    </div>
  </div>
</template>

<script>
const prefixCls = 'g-sticky';

export default {
  name: 'GSticky',
  props: {
    distance: {
      type: [String, Number],
      default: 0
    }
  },
  data() {
    return {
      prefixCls,
      offsetTop: 0,
      fixed: false,
      stickyStyle: {
        top: 'auto',
        left: 'auto',
        width: 'auto'
      }
    };
  },
  computed: {
    distanceNum() {
      return Number(this.distance);
    }
  },
  mounted() {
    this.setOffsetTop();
    const parent = this.$el.parentNode;
    parent.style.position = 'relative'; // Ensure parent is relative
    parent.addEventListener('scroll', this.handleScroll);
    window.addEventListener('resize', this.setOffsetTop);
  },
  beforeDestroy() {
    const parent = this.$el.parentNode;
    parent.removeEventListener('scroll', this.handleScroll);
    window.removeEventListener('resize', this.setOffsetTop);
  },
  methods: {
    setOffsetTop() {
      const stickyRect = this.$refs.sticky.getBoundingClientRect();
      const parentRect = this.$el.parentNode.getBoundingClientRect();
      this.offsetTop = stickyRect.top - parentRect.top;
      this.stickyStyle.width = `${stickyRect.width}px`;
    },
    handleScroll() {
      const parent = this.$el.parentNode;
      if (parent.scrollTop > this.offsetTop - this.distanceNum) {
        this.fixed = true;
        this.stickyStyle.top = `${this.distanceNum}px`;
        this.stickyStyle.left = `${this.$refs.sticky.getBoundingClientRect().left - parent.getBoundingClientRect().left}px`;
      } else {
        this.fixed = false;
        this.stickyStyle.top = 'auto';
        this.stickyStyle.left = 'auto';
      }
    }
  }
};
</script>
<style lang="less" scoped>
@import './sticky.less';
</style>
