<template>
  <div
    ref="wrapper"
    :class="[
      `${prefixCls}-wrapper`
    ]"
  >
    <div
      ref="sticky"
      v-transfer-dom="fixed"
      :class="[
        `${prefixCls}`,
        fixed && `${prefixCls}-fixed`
      ]"
      :style="{
        heihgt: height + 'px',
        width: width+ 'px',
        left: left + 'px',
      }"
    >
      <slot />
    </div>
  </div>
</template>

<script>
import transferDom from '../../directives/transferdom';

const prefixCls = 'g-sticky';
let handleScroll = () => {};
export default {
  name: 'GSticky',
  directives: { transferDom },
  props: {
    distance: {
      type: [String, Number],
      default: 0
    }
  },
  data() {
    return {
      prefixCls,
      offsetTop: undefined,
      left: undefined,
      width: undefined,
      height: undefined,
      fixed: false
    };
  },
  computed: {
    distanceNum() {
      return Number(this.distance);
    }
  },
  created() {
    handleScroll = this._handleScroll.bind(this);
    window.addEventListener('scroll', handleScroll);
  },
  beforeDestroy() {
    window.removeEventListener('scroll', handleScroll);
    handleScroll = null;
  },
  mounted() {
    this.setOffsetTop();
  },
  methods: {
    setOffsetTop() {
      const { top } = this.$refs.sticky.getBoundingClientRect();
      this.offsetTop = top;
    },
    _handleScroll() {
      if (window.scrollY > this.offsetTop - this.distanceNum) {
        const { left, height, width } = this.$refs.sticky.getBoundingClientRect();
        this.left = left;
        this.height = height;
        this.width = width;
        this.fixed = true;
      } else {
        this.left = undefined;
        this.height = undefined;
        this.width = undefined;
        this.fixed = false;
      }
    }
  }
};
</script>

<style lang="less" scoped>
@import './sticky.less';
</style>
