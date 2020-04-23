<template>
  <div class="g-row" :style="styles">
    <slot />
  </div>
</template>
<script>
export default {
  name: "Row",
  props: {
    gutter: {
      type: Number,
      default: 0,
    },
  },
  computed: {
    styles() {
      let { gutter } = this;
      return gutter
        ? {
            marginLeft: -(gutter / 2) + "px",
            marginRight: -(gutter / 2) + "px",
          }
        : {};
    },
  },
  mounted() {
    this.$children.forEach((vm) => {
      vm.gutter = this.gutter;
    });
  },
};
</script>

<style lang="less" scoped>
.g-row {
  display: flex;
  flex-wrap: wrap;
}
</style>
