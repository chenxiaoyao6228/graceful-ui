<script>
import oneOf from '../../utils/tools';
import Icon from '../icon';

const prefix = 'g-button';
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
    return {};
  },
  computed: {
    classes() {
      return [
        `${prefix}`,
        `${prefix}-${this.type}`,
        `${prefix}-size-${this.size}`,
        this.disabled ? `${prefix}-disabled` : '',
        this.long ? `${prefix}-long` : '',
        this.round ? `${prefix}-round` : '',
        this.iconPosition ? `icon-${this.iconPosition}` : '',
        this.loading ? 'loading' : ''
      ];
    }
  }
};
</script>

<template>
  <button
    :class="classes"
    @click="$emit('click')"
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
    <div class="content">
      <slot />
    </div>
  </button>
</template>

<style lang="less">
@import './button.less';
</style>
