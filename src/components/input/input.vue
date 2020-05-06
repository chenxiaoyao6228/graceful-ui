<script>
import Icon from '../icon/icon.vue';

const prefix = 'g-input';
export default {
  name: 'Input',
  components: { Icon },
  model: {
    prop: 'value',
    event: 'input'
  },
  props: {
    value: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: 'text'
    },
    placeholder: {
      type: String,
      default: ''
    },
    size: {
      type: String,
      default: 'default'
    },
    clearable: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {};
  },
  computed: {
    wrapperClasses() {
      return [
        `${prefix}-wrapper`,
        this.clearable && this.value.length > 0 ? `${prefix}-wrapper-clearable` : ''
      ];
    },
    classes() {
      return [`${prefix}`, `${prefix}-${this.size}`];
    }
  },
  methods: {
    handleClear() {
      this.$emit('input', '');
    }
  }
};
</script>

<template>
  <div
    class="g-input-wrapper"
    :class="wrapperClasses"
  >
    <Icon
      type="clear"
      class="g-input-icon-clearable"
      :class="[clearable && value.length > 0 ? `g-input-icon-clearable-show` : '']"
      @click="handleClear"
    />
    <input
      :type="type"
      :placeholder="placeholder"
      :value="value"
      :class="classes"
      @input="$emit('input', $event.target.value)"
    >
  </div>
</template>

<style lang="less" scoped>
@import './input.less';
</style>
