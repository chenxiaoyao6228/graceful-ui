<script>
import { getCoords } from '../../utils/dom';
import oneOf from '../../utils/tools';

const prefixCls = 'g-popover';
export default {
  name: 'GPopover',
  props: {
    trigger: {
      type: String,
      default: 'click',
      validator(value) {
        return oneOf(value, ['hover', 'click']);
      }
    },
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
  computed: {
    openEvent() {
      return this.trigger === 'hover' ? 'mouseenter' : 'click';
    },
    closeEvent() {
      return this.trigger === 'hover' ? 'mouseleave' : 'click';
    }
  },
  mounted() {
    if (this.trigger === 'hover') {
      this.$refs.popover.addEventListener('mouseenter', this.open);
      this.$refs.popover.addEventListener('mouseleave', this.close);
    } else {
      this.$refs.popover.addEventListener('click', this.handleClick);
    }
  },
  beforeDestroy() {
    if (this.trigger === 'hover') {
      this.$refs.popover.removeEventListener('mouseenter', this.open);
      this.$refs.popover.removeEventListener('mouseleave', this.close);
    } else {
      this.show = false;
      document.removeEventListener('click', this.handleClick);
      if (this.$refs.contentWrapper) {
        document.body.removeChild(this.$refs.contentWrapper);
      }
    }
  },
  methods: {
    positionContent() {
      document.body.appendChild(this.$refs.contentWrapper);
      const {
        left, top, height, width
      } = getCoords(this.$refs.triggerWrapper);
      const contentWrapperWidth = getCoords(this.$refs.contentWrapper).width;
      const positions = {
        top: {
          top: `${top}px`,
          left: `${left}px`
        },
        left: {
          top: `${top}px`,
          left: `${left - contentWrapperWidth}px`
        },
        right: {
          top: `${top}px`,
          left: `${left + width}px`
        },
        bottom: {
          top: `${top + height}px`,
          left: `${left}px`
        }
      };
      this.$refs.contentWrapper.style.left = positions[this.position].left;
      this.$refs.contentWrapper.style.top = positions[this.position].top;
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
        if (this.trigger === 'click') {
          document.addEventListener('click', this.listenToDocument);
        }
      });
    },
    close() {
      this.show = false;
      if (this.trigger === 'click') {
        document.removeEventListener('click', this.listenToDocument);
      }
    },
    handleClick(e) {
      if (this.$refs.triggerWrapper.contains(e.target)) {
        if (this.show) {
          this.close();
        } else {
          this.open();
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
    @click.stop
  >
    <div
      v-if="show"
      ref="contentWrapper"
      key="00"
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
