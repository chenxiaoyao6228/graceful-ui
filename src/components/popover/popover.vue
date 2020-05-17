<script>
import { getCoords } from '../../utils/dom';

const prefixCls = 'g-popover';
export default {
  name: 'Popover',
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
    listenToDocument(event) {
      const isPopoverWrapper = this.$refs.popover && this.$refs.popover === event.target;
      const popoverContentWrapperElement = document.querySelector(`.${prefixCls}-content-wrapper`);
      const isPopoverContent = event.target === popoverContentWrapperElement
                              || popoverContentWrapperElement.contains(event.target);
      if (isPopoverContent || isPopoverWrapper) return;
      this.close();
    },
    open() {
      this.show = true;
      this.$nextTick(() => {
        this.positionContent();
        document.addEventListener('click', this.listenToDocument);
      });
    },
    close() {
      this.show = false;
      document.removeEventListener('click', this.listenToDocument);
    },
    handleClick(e) {
      if (this.$refs.triggerWrapper.contains(e.target)) {
        this.show = !this.show;
        if (this.show) {
          this.open();
        } else {
          this.close();
        }
      }
    }
  }
};
</script>

<template>
  <div
    ref="popover"
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
