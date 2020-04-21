<template>
  <div class="g-input-wrapper" :class="wrapperClasses">
    <input
      :type="type"
      :placeholder="placeholder"
      :value="value"
      :class="classes"
      @input="$emit('input', $event.target.value)"
    />
  </div>
</template>

<script>
const prefix = "g-input";
export default {
  name: "Input",
  model: {
    prop: "value",
    event: "input",
  },
  props: {
    value: {
      type: String,
      default: "",
    },
    type: {
      type: String,
      default: "text",
    },
    placeholder: {
      type: String,
      default: "",
    },
    size: {
      type: String,
      default: "medium",
    },
  },
  data() {
    return {};
  },
  computed: {
    wrapperClasses() {
      return [`${prefix}-wrapper-${this.size}`];
    },
    classes() {
      return [`${prefix}-${this.size}`];
    },
  },
};
</script>

<style lang="less" scoped>
@import "../../styles/index.less";

.g-input-wrapper {
  font-size: @font-size;
  & > input {
    height: @input-height;
    border: 1px solid @border-color;
    border-radius: @border-radius;
    padding: 0 8px;
    &:hover {
    }
    &:focus {
    }
    &:disabled {
    }
  }
  &-large {
    & > input {
      height: @input-height-large;
    }
  }
  &-small {
    & > input {
      height: @input-height-small;
    }
  }
}
</style>
