<script>
import Icon from '../icon/icon.vue';

const prefixCls = 'g-input';
export default {
  name: 'GInput',
  components: { Icon },
  props: {
    value: {
      type: [String, Number],
      default: ''
    },
    type: {
      type: String,
      default: 'text',
      validator(value) {
        return ['text', 'password', 'textarea'].indexOf(value) > -1;
      }
    },
    placeholder: {
      type: String,
      default: '请输入...'
    },
    size: {
      type: String,
      default: 'medium',
      validator(value) {
        return ['large', 'medium', 'small', 'extra-small'].indexOf(value) > -1;
      }
    },
    disabled: {
      type: Boolean,
      default: false
    },
    readonly: {
      type: Boolean,
      default: false
    },
    clearable: {
      type: Boolean,
      default: false
    },
    showPassword: {
      type: Boolean,
      default: false
    },
    rows: {
      type: Number,
      default: 2
    },
    number: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      prefixCls,
      passwordVisible: false,
      passwordToTextMode: false
    };
  },
  computed: {
    inputClasses() {
      const classes = [
        `${prefixCls}`,
        `${prefixCls}-${this.size}`,
        'has-icon'
      ];
      if (this.type === 'textarea') {
        classes.push(`${prefixCls}-textarea`);
      }
      return classes;
    },
    textAreaClasses() {
      return [
        `${prefixCls}-textarea`
      ];
    }
  },
  methods: {
    handleClear() {
      this.$emit('input', '');
    },
    togglePasswordVisible() {
      this.passwordToTextMode = !this.passwordToTextMode;
      this.passwordVisible = !this.passwordVisible;
      if (this.passwordToTextMode) {
        this.$nextTick(() => {
          this.$refs['input-ref'].focus();
        });
      } else {
        this.$nextTick(() => {
          this.$refs['input-pass-ref'].focus();
        });
      }
    }
  }
};
</script>

<template>
  <div
    :class="[`${prefixCls}-wrapper`]"
  >
    <textarea
      v-if="type==='textarea'"
      :placeholder="placeholder"
      :class="inputClasses"
      :rows="rows"
    />
    <input
      v-show="passwordToTextMode || type === 'text'"
      ref="input-ref"
      type="text"
      :placeholder="placeholder"
      :value="value"
      :class="inputClasses"
      :disabled="disabled"
      :readonly="readonly"
      @input="$emit('input',number ? Number($event.target.value): $event.target.value)"
      @change="$emit('change', number ? Number($event.target.value): $event.target.value)"
      @focus="$emit('focus', number ? Number($event.target.value): $event.target.value)"
      @blur="$emit('blur', number ? Number($event.target.value): $event.target.value)"
      @keyup.enter="$emit('search', number ? Number($event.target.value): $event.target.value)"
    >
    <!-- 密码切换 -->
    <input
      v-show="type === 'password' && !passwordToTextMode"
      ref="input-pass-ref"
      type="password"
      :placeholder="placeholder"
      :value="value"
      :class="inputClasses"
      :disabled="disabled"
      :readonly="readonly"
      @input="$emit('input',number ? Number($event.target.value): $event.target.value)"
      @change="$emit('change', number ? Number($event.target.value): $event.target.value)"
      @focus="$emit('focus', number ? Number($event.target.value): $event.target.value)"
      @blur="$emit('blur', number ? Number($event.target.value): $event.target.value)"
      @keyup.enter="$emit('search', number ? Number($event.target.value): $event.target.value)"
    >
    <div
      :class="[
        `${prefixCls}-icon ${prefixCls}-icon-clear`,
        clearable && value.length > 0 && `${prefixCls}-icon-clear-show`
      ]"
      @click="handleClear"
    >
      <Icon
        type="cross"
      />
    </div>
    <div
      v-if="type === 'password' && showPassword"
      :class="[`${prefixCls}-icon eye`]"
      @click="togglePasswordVisible"
    >
      <Icon
        :type="passwordVisible ? 'eye' : 'eye-closed'"
      />
    </div>
  </div>
</template>

<style lang="less" scoped>
@import './input.less';
</style>
