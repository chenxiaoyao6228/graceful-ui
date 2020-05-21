<script>
import { getCoords } from '../../utils/dom';
import oneOf from '../../utils/tools';

const prefixCls = 'g-popover';
export default {
  name: 'Popover',
  props: {
    position: {
      type: String,
      default: 'top',
      validator(value) {
        return oneOf(value, ['left', 'top', 'bottom', 'right']);
      }
    }
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
      const {
        left, top, height, width
      } = getCoords(this.$refs.triggerWrapper);
      const contentWrapperWidth = getCoords(this.$refs.contentWrapper).width;
      if (this.position === 'top') {
        this.$refs.contentWrapper.style.left = `${left}px`;
        this.$refs.contentWrapper.style.top = `${top}px`;
      } else if (this.position === 'bottom') {
        this.$refs.contentWrapper.style.left = `${left}px`;
        this.$refs.contentWrapper.style.top = `${top + height}px`;
      } else if (this.position === 'left') {
        this.$refs.contentWrapper.style.left = `${left - contentWrapperWidth}px`;
        this.$refs.contentWrapper.style.top = `${top}px`;
      } else {
        this.$refs.contentWrapper.style.left = `${left + width}px`;
        this.$refs.contentWrapper.style.top = `${top}px`;
      }
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
      :class="[
        `${prefixCls}-content-wrapper`,
        `${prefixCls}-content-wrapper-${position}`,
      ]"
    >
      <slot name="content" />
    </div>
    <span
      ref="triggerWrapper"
      style="display: inline-block;"
    >
      <slot />
    </span>
  </div>
</template>

<style lang="less">
@import './popover.less';
</style>
