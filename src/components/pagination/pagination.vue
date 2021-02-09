<template>
  <div
    :class="[`${prefixCls}`]"
  >
    <div
      :class="[
        `${prefixCls}-item`,
        `${prefixCls}-prev`,
        current === 1 && disabled
      ]"
      @click="goToPage(current-1)"
    >
      <Icon type="arrow-left" />
    </div>
    <template
      v-for="item in range"
    >
      <template v-if="item === '<<'">
        <div
          :key="item"
          :class="[
            `${prefixCls}-item`,
            `${prefixCls}-jump-prev`,
            isLeftStepHover && 'active'
          ]"
          @mouseenter="isLeftStepHover = true"
          @mouseleave="isLeftStepHover = false"
          @click="goToPage(current-5)"
        >
          <Icon
            v-if="isLeftStepHover"
            type="double-arrow-left"
          />
          <Icon
            v-else
            type="dots"
          />
        </div>
      </template>
      <template v-else-if="item === '>>'">
        <div
          :key="item"
          class="g-pagination-item g-pagination-jump-next"
          :class="{active: isRightStepHover}"
          @mouseenter="isRightStepHover = true"
          @mouseleave="isRightStepHover = false"
          @click="goToPage(current+5)"
        >
          <Icon
            v-if="isRightStepHover"
            type="double-arrow-right"
          />
          <Icon
            v-else
            type="dots"
          />
        </div>
      </template>
      <template v-else>
        <div
          :key="item"
          class="g-pagination-item"
          :class="{ active: current === item }"
          @click="goToPage(item)"
        >
          {{ item }}
        </div>
      </template>
    </template>
    <div
      class="g-pagination-item g-pagination-next"
      :class="{disabled: current === total}"
      @click="goToPage(current+1)"
    >
      <Icon type="arrow-right" />
    </div>
    <div
      v-if="showElevator"
      class="g-pagination-elevator"
    >
      跳至
      <Input
        v-model="current"
        type="text"
        size="small"
      />
      页
    </div>
  </div>
</template>

<script>
import Input from '../input/input.vue';
import Icon from '../icon/icon.vue';

const prefixCls = 'g-pagination';
export default {
  name: 'Pagination',
  components: { Icon, Input },
  props: {
    total: { type: Number, required: true },
    current: { type: Number, default: 1 },
    showElevator: { type: Boolean, default: false }
  },
  data() {
    return {
      prefixCls,
      isLeftStepHover: false,
      isRightStepHover: false
    };
  },
  computed: {
    range() {
      function unique(array) {
        const res = [];
        const map = Object.create(null);
        array.forEach((item) => {
          if (!map[item]) {
            res.push(item);
            map[item] = true;
          }
        });
        return res;
      }
      let res = [this.current - 2, this.current - 1,
        this.current, this.current + 1, this.current + 2];
      res = unique(res.filter((item) => (item > 1 && item < this.total)));

      if (this.current >= 6) {
        res.unshift('<<');
      }
      if (this.total >= 1) {
        res.unshift(1);
      }
      if (this.total - this.current >= 5) {
        res.push('>>');
      }
      if (this.total >= 1) {
        res.push(this.total);
      }
      return res;
    }
  },
  methods: {
    goToPage(item) {
      this.$emit('update:current', item);
      this.$emit('on-change', item);
    }
  }
};
</script>

<style lang="less" scoped>
@import './pagination.less';
</style>
