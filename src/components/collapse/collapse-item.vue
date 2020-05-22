<script>

const prefixCls = 'g-collapse-item';
export default {
  name: 'CollpaseItem',
  props: {
    name: {
      type: String,
      required: true
    }
  },
  inject: ['eventBus'],
  data() {
    return {
      prefixCls,
      selectedName: ''
    };
  },
  created() {
    this.eventBus.$on('ItemClicked', (name) => {
      this.selectedName = name;
    });
  },
  methods: {
    handleClick() {
      this.eventBus.$emit('ItemClicked', this.name);
    }
  }
};
</script>

<template>
  <div :class="[`${prefixCls}`]">
    <div
      :class="[`${prefixCls}-title`]"
      @click="handleClick"
    >
      <slot />
    </div>
    <div
      v-show="selectedName === name"
      :class="[`${prefixCls}-content`]"
    >
      <slot name="content" />
    </div>
  </div>
</template>

<style lang="less" scoped>
@import './collapse.less';
</style>
