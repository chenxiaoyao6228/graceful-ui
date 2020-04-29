<script>
import { oneOf } from '../../utils/tools.js';
import Icon from '../icon';
const prefix = 'g-button';
export default {
  name: 'Button',
  components: {
    Icon,
  },
  props: {
    type: {
      type: [String, Boolean],
      default: 'default',
      validator: function (value) {
        return oneOf(value, [
          'primary',
          'warning',
          'info',
          'error',
          'success',
          'disabled',
          'dashed',
          'default',
          false,
        ]);
      },
    },
    size: {
      type: String,
      default: 'default',
    },
    icon: {
      type: String,
      default: '',
    },
    loading: {
      type: Boolean,
      default: false,
    },
    iconPosition: {
      type: String,
      default: '',
    },
    disabled: {
      type: Boolean,
      default: false,
    },
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
        this.round ? `${prefix}-round` : '',
        this.iconPosition ? `icon-${this.iconPosition}` : '',
        this.loading ? `loading` : '',
      ];
    },
  },
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
@import '../../styles/index';

.g-button {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  padding: @button-padding;
  vertical-align: middle;
  text-align: center;
  font-size: @font-size;
  color: @color;
  border-radius: @border-radius;
  border: 1px solid transparent;
  white-space: nowrap;
  user-select: none;
  outline: none;
  background: @button-bg;
  text-shadow: @text-shadow;
  // type =>
  // .button-type();
  &-size {
    &-default {
      height: @button-height;
      padding: @button-padding;
    }
    &-small {
      height: @button-height-small;
      padding: @button-padding-small;
    }
    &-large {
      height: @button-height-large;
      padding: @button-padding-large;
    }
  }
  &-default {
    border-color: @border-color;
    color: @color-inverted;
  }
  &-primary {
    background-color: @color-primary;
  }
  &-warning {
    background-color: @color-warning;
  }
  &-error {
    background-color: @color-error;
  }
  &-info {
    background-color: @color-info;
  }
  &-success {
    background-color: @color-success;
  }
  &-dashed {
    color: @color-inverted;
    border: 1px dashed @border-color;
  }
  &-disabled {
    background-color: @color-disabled;
    color: rgba(255, 255, 255, 0.8);
  }
  &-round {
    border-radius: @border-radius-round;
  }

  // icon
  .loading {
    animation: g-spin 1s infinite linear;
  }
  &.icon-right {
    .icon {
      order: 2;
      margin-right: 0;
    }
    .content {
      order: 1;
      margin-right: 0.3em;
    }
  }
  .icon {
    order: 1;
  }
  .content {
    order: 2;
  }
}
</style>
