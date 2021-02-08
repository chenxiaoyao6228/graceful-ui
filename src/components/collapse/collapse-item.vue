<script>
import Icon from '../icon/icon.vue';

const prefixCls = 'g-collapse-item';
export default {
  name: 'CollpaseItem',
  components: { Icon },
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
      <span
        :class="{
          'g-collapse-item-title-icon': true,
          'active': show
        }"
      >
        <Icon type="arrow-right" />
      </span>
      <slot />
    </div>
    <transition name="slide">
      <div
        v-show="show"
        :class="[`${prefixCls}-content`]"
      >
        <slot name="content" />
      </div>
    </transition>
  </div>
</template>

<style lang="less" scoped>
@import './collapse.less';
</style>
