<script>
import oneOf from '../../utils/tools';
import Icon from '../icon';

const prefixCls = 'g-button';
export default {
  name: 'GButton',
  components: {
    Icon
  },
  props: {
    type: {
      type: [String, Boolean],
      default: 'default',
      validator(value) {
        return oneOf(value, [
          'primary',
          'warning',
          'info',
          'error',
          'success',
          'disabled',
          'dashed',
          'text',
          'default'
        ]);
      }
    },
    size: {
      type: String,
      default: 'medium',
      validator(value) {
        return oneOf(value, [
          'large',
          'medium',
          'small',
          'extra-small'
        ]);
      }
    },
    icon: {
      type: String,
      default: ''
    },
    loading: {
      type: Boolean,
      default: false
    },
    iconPosition: {
      type: String,
      default: ''
    },
    disabled: {
      type: Boolean,
      default: false
    },
    long: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      prefixCls
    };
  },
  computed: {
    classes() {
      return [
        `${prefixCls}`,
        `${prefixCls}-${this.type}`,
        `${prefixCls}-size-${this.size}`,
        this.disabled ? `${prefixCls}-disabled` : '',
        this.long ? `${prefixCls}-long` : '',
        this.round ? `${prefixCls}-round` : '',
        this.iconPosition ? `icon-${this.iconPosition}` : '',
        this.loading ? 'loading' : ''
      ];
    }
  },
  methods: {
    handleClick(e) {
      e.preventDefault();
      this.$emit('click');
    }
  }
};
</script>

<template>
  <button
    :class="classes"
    @click="handleClick"
  >
    <Icon
      v-if="icon && !loading"
      class="icon"
      :type="icon"
    />
    <Icon
      v-if="loading"
      class="icon loading"
      type="loading"
    />
    <div :class="[`${prefixCls}-content`]">
      <slot />
    </div>
  </button>
</template>

<style lang="less" scoped>
@import './button.less';
</style>
