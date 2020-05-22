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
  inject: ['eventBus', 'accordion', 'defaultSelected'],
  data() {
    return {
      prefixCls,
      selectedName: '',
      open: false
    };
  },
  computed: {
    show() {
      if (this.accordion) {
        return this.selectedName === this.name;
      }
      return this.open;
    }
  },
  created() {
    this.selectedName = this.defaultSelected; // 仅仅在初次赋值的时候有用
    this.open = this.selectedName === this.name;
    this.eventBus.$on('ItemClicked', (name) => {
      if (this.accordion) {
        this.selectedName = name;
      } else if (this.name === name) {
        this.open = !this.open;
      }
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
      v-show="show"
      :class="[`${prefixCls}-content`]"
    >
      <slot name="content" />
    </div>
  </div>
</template>

<style lang="less" scoped>
@import './collapse.less';
</style>
