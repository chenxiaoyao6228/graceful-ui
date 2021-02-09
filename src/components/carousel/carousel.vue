<template>
  <div
    :class="[`${prefixCls}`]"
    @mouseenter="onMouseEnter"
    @mouseleave="onMouseLeave"
  >
    <div :class="[`${prefixCls}-window`]">
      <div
        ref="container"
        :class="[`${prefixCls}-container`]"
      >
        <slot />
      </div>
    </div>
    <div
      :class="[
        `${prefixCls}-dots`,
        dots ==='outside' && `${prefixCls}-dots-outside`,
      ]"
    >
      <span
        v-for="n in childrenLength"
        :key="n"
        :class="[
          `${prefixCls}-dot`,
          value === n - 1 && `${prefixCls}-dot-active`
        ]"
        @click="select(n-1)"
      />
    </div>
    <div
      v-if="arrowVisible"
      :class="[`${prefixCls}-arrow left`]"
      @click="goPrevPage"
    >
      <Icon type="arrow-left" />
    </div>
    <div
      v-if="arrowVisible"

      :class="[`${prefixCls}-arrow right`]"
      @click="goNextPage"
    >
      <Icon type="arrow-right" />
    </div>
  </div>
</template>

<script>

import Icon from '../icon';

const prefixCls = 'g-carousel';
export default {
  name: 'Carousel',
  components: { Icon },
  props: {
    value: {
      type: Number,
      default: 0
    },
    autoplay: {
      type: Boolean,
      default: false
    },
    speed: {
      type: Number,
      default: 2000
    },
    loop: {
      type: Boolean,
      default: false
    },
    dots: {
      type: String,
      default: 'inside',
      validator(value) {
        return ['inside', 'outside', 'none'].indexOf(value) > -1;
      }
    }
  },
  data() {
    return {
      prefixCls,
      arrowVisible: false,
      currentIndex: -1,
      lastIndex: -1,
      childrenLength: 0,
      timerId: undefined,
      firstUpdateOfFirstChild: true
    };
  },
  beforeUpdate() {
    // 父beforeUpdate->子beforeUpdate->子updated->父updated
    if (this.firstUpdateOfFirstChild) {
      this.updateChildren(true);
      this.firstUpdateOfFirstChild = false;
    } else {
      this.updateChildren();
    }
  },
  mounted() {
    this.childrenLength = this.$children.length;
    this.currentIndex = this.value;
    this.updateChildren();
    if (this.autoplay) {
      this.playAutomatically();
    }
  },
  methods: {
    onMouseEnter() {
      this.arrowVisible = true;
    },
    onMouseLeave() {
      this.arrowVisible = false;
    },
    countNextIndex() {

    },
    select(index) {
      if (this.timerId) {
        clearTimeout(this.timerId);
        this.timerId = undefined;
        this.timerId = setTimeout(() => {
          this.playAutomatically();
        }, this.speed);
      }
      this.lastIndex = this.value; // 控制方向
      this.$emit('input', index);
    },
    goPrevPage() {
      let currentIndex = this.value;
      const hasReachLeft = currentIndex === 0;
      if (hasReachLeft) {
        this.lastIndex = this.childrenLength;
        currentIndex = this.childrenLength - 1;
      } else {
        this.lastIndex = currentIndex;
        currentIndex -= 1;
      }
      if (this.timerId) {
        clearTimeout(this.timerId);
        this.timerId = undefined;
        this.timerId = setTimeout(() => {
          this.playAutomatically();
        }, this.speed);
      }
      this.$emit('input', currentIndex);
    },
    goNextPage() {
      let currentIndex = this.value;
      const hasReachRight = currentIndex === this.childrenLength - 1;
      if (hasReachRight) {
        this.lastIndex = -1;
        currentIndex = 0;
      } else {
        this.lastIndex = currentIndex;
        currentIndex += 1;
      }
      if (this.timerId) {
        clearTimeout(this.timerId);
        this.timerId = undefined;
        this.timerId = setTimeout(() => {
          this.playAutomatically();
        }, this.speed);
      }
      this.$emit('input', currentIndex);
    },
    playAutomatically() {
      const run = () => {
        let currentIndex = this.value;
        const hasReachRight = currentIndex === this.childrenLength - 1;
        const hasReachLeft = currentIndex === 0;
        if ((hasReachRight || hasReachLeft) && !this.loop) {
          return;
        }
        if (hasReachRight) {
          this.lastIndex = -1;
          currentIndex = 0;
        } else {
          this.lastIndex = this.value;
          currentIndex += 1;
        }
        this.$emit('input', currentIndex);
        this.timerId = setTimeout(run, this.speed);
      };
      setTimeout(run, this.speed);
    },
    updateChildren(first) {
      // 数据驱动,利用vue的transition完成轮播切换的功能
      // 数据更新的顺序: 外部 -> carousel -> carousel-item
      this.$children.forEach((child, index) => {
        child.visible = index === this.value;
        child.reverse = this.value < this.lastIndex;
        child.first = !!first && this.value === index;
      });
    }
  }
};
</script>

<style lang="less" scoped>
@import './carousel.less';
</style>
