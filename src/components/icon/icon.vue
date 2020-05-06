<script>
export default {
  name: 'Icon',
  props: {
    type: {
      type: String,
      default: ''
    }
  },
  data() {
    return {};
  }
};
</script>

<template>
  <svg
    class="g-icon"
    @click="$emit('click', $event)"
  >
    <use
      :xlink:href="`#icon-${type}`"
      aria-hidden="true"
    />
  </svg>
</template>

<style lang="less" scoped>
.g-icon {
  width: 1em;
  height: 1em;
  margin-right: 0.3em;
  vertical-align: -0.15em;
  fill: currentColor;
}
</style>
