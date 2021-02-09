<script>
import Icon from '../icon/icon.vue';

const prefixCls = 'g-input';
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
      default: 'text',
      validator(value) {
        return ['text', 'password'].indexOf(value) > -1;
      }
    },
    placeholder: {
      type: String,
      default: ''
    },
    size: {
      type: String,
      default: 'medium',
      validator(value) {
        return ['large', 'medium', 'small', 'extra-small'].indexOf(value) > -1;
      }
    },
    clearable: {
      type: Boolean,
      default: false
    },
    showPassword: {
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
        `${prefixCls}-wrapper`,
        this.clearable && this.value.length > 0 ? `${prefixCls}-wrapper-clearable` : ''
      ];
    },
    classes() {
      return [
        `${prefixCls}`,
        `${prefixCls}-${this.size}`,
        '.has-icon'
      ];
    }
  },
  methods: {
    handleClear() {
      this.$emit('input', '');
    },
    handleEnter() {
      // eslint-disable-next-line
      window.alert(1111);
    }
  }
};
</script>

<template>
  <div
    :class="wrapperClasses"
  >
    <input
      :type="type"
      :placeholder="placeholder"
      :value="value"
      :class="classes"
      @input="$emit('input', $event.target.value)"
      @keyup.enter="handleEnter"
    >
    <Icon
      v-if="type === 'text'"
      type="cross"
      class="g-input-icon clear"
      :class="[clearable && value.length > 0 ? `g-input-icon-clearable-show` : '']"
      @click="handleClear"
    />
    <Icon
      v-if="type === 'password' && showPassword"
      type="eye"
      class="g-input-icon eye"
      @click="handleClear"
    />
  </div>
</template>

<style lang="less" scoped>
@import './input.less';
</style>
