<template>
  <button
    class="g-button"
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

<script>
import Icon from "../icon";
const prefix = "g-button";
export default {
  name: "Button",
  components: {
    Icon,
  },
  props: {
    type: {
      type: String,
      default: "primary",
    },
    icon: {
      type: String,
      default: "",
    },
    loading: {
      type: Boolean,
      default: false,
    },
    iconPosition: {
      type: String,
      default: "",
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    round: {
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
        `${prefix}-${this.type}`,
        this.disabled ? `${prefix}-disabled` : "",
        this.round ? `${prefix}-round` : "",
        this.iconPosition ? `icon-${this.iconPosition}` : "",
        this.loading ? `loading` : "",
      ];
    },
  },
};
</script>
<style lang="less">
@import "../../styles/index";

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.g-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  vertical-align: middle;
  font-size: @font-size;
  color: @font-color;
  padding: @padding;
  border-radius: @border-radius;
  background: @button-bg;
  &:hover {
    border-color: @border-color-hover;
  }
  &:active {
    background-color: @button-bg-active;
  }
  &:focus {
    outline: none;
    cursor: pointer;
  }
  &-primary {
    background-color: @color-primary;
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
    animation: spin 1s infinite linear;
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
