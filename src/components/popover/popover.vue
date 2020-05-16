<script>

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
  methods: {
    handleClick() {
      this.show = !this.show;
      const clickHandler = () => {
        this.show = !this.show;
      };
      if (this.show) {
        this.$nextTick(() => {
          document.addEventListener('click', clickHandler);
        });
      } else {
        document.removeEventListener('click', clickHandler);
      }
    }
  }
};
</script>

<template>
  <div
    :class="[`${prefixCls}`]"
    @click="handleClick"
  >
    <slot
      v-if="show"
      name="content"
    />
    <slot />
  </div>
</template>

<style lang="less" scoped>
@import "../../styles/variables/var.less";

@prefixCls: ~"@{css-prefix}-popover";

.@{prefixCls} {
  display: inline-block;
}
</style>
