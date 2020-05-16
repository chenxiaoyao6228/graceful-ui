<script>
import { getCoords } from '../../utils/dom';

const prefixCls = 'g-popover';
export default {
  name: 'Popover',
  props: {

  },
  data() {
    return {
      prefixCls,
      show: false
    };
  },
  mounted() {
  },
  methods: {
    positionContent() {
      document.body.appendChild(this.$refs.contentWrapper);
      const { left, top } = getCoords(this.$refs.triggerWrapper);
      this.$refs.contentWrapper.style.left = `${left + window.scrollX}px`;
      this.$refs.contentWrapper.style.top = `${top + window.scrollY}px`;
    },
    listenToDocument() {
      const clickHandler = (event) => {
        if (!this.$refs.contentWrapper.contains(event.target)) {
          this.show = false;
          document.removeEventListener('click', clickHandler);
        }
      };
      document.addEventListener('click', clickHandler);
    },
    handleClick(e) {
      if (this.$refs.triggerWrapper.contains(e.target)) {
        this.show = !this.show;
        if (this.show) {
          this.$nextTick(() => {
            this.positionContent();
            this.listenToDocument();
          });
        }
      }
    }
  }
};
</script>

<template>
  <div
    :class="[`${prefixCls}`]"
    @click.stop="handleClick"
  >
    <div
      v-if="show"
      ref="contentWrapper"
      :class="[`${prefixCls}-content-wrapper`]"
    >
      <slot name="content" />
    </div>
    <span ref="triggerWrapper">
      <slot />
    </span>
  </div>
</template>

<style lang="less">
@import './popover.less';
</style>
