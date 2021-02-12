<template>
  <div
    :class="[`${prefixCls}`]"
  >
    <div
      :class="[
        `${prefixCls}-item`,
        `${prefixCls}-prev`,
        current === 1 && 'disabled'
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
          :class="[
            `${prefixCls}-item`,
            `${prefixCls}-jump-next`,
            isRightStepHover && 'active',
          ]"
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
          :class="[
            `${prefixCls}-item`,
            current === item && 'active',
          ]"
          @click="goToPage(item)"
        >
          {{ item }}
        </div>
      </template>
    </template>
    <div
      :class="[
        `${prefixCls}-item`,
        `${prefixCls}-next`,
        current === total && 'active',
      ]"
      @click="goToPage(current+1)"
    >
      <Icon type="arrow-right" />
    </div>
    <div
      v-if="showElevator"
      :class="[
        `${prefixCls}-elevator`
      ]"
    >
      跳至
      <input
        :value="current"
        type="text"
        @change="handleChange"
      >
      页
    </div>
    <div
      v-if="showSizer"
      :class="[
        `${prefixCls}-sizer`,
      ]"
    >
      <div
        :class="[
          `${prefixCls}-sizer-trigger`,
          dropdownVisible && 'active'
        ]"
        @click="dropdownVisible = !dropdownVisible"
      >
        {{ pageSize || 1 }}条/页
        <Icon
          type="arrow-down"
          :class="[
            `${prefixCls}-sizer-icon`,
            dropdownVisible && 'active'
          ]"
        />
      </div>
      <transition name="slide">
        <div
          v-show="dropdownVisible"
          :class="[`${prefixCls}-sizer-dropdown`]"
        >
          <template>
            <div
              v-for="item in sizeList"
              :key="item"
              :class="[
                `${prefixCls}-sizer-dropdown-item`,
                item === pageSize && 'active'
              ]"
              @click="handlePageSizeChange(item)"
            >
              {{ item }}条/页
            </div>
          </template>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
import Icon from '../icon/icon.vue';

const prefixCls = 'g-pagination';
export default {
  name: 'GPagination',
  components: { Icon },
  props: {
    total: { type: Number, required: true },
    current: { type: Number, default: 1 },
    showElevator: { type: Boolean, default: false },
    showSizer: { type: Boolean, default: false }
  },
  data() {
    return {
      prefixCls,
      isLeftStepHover: false,
      isRightStepHover: false,
      pageSize: 10,
      sizeList: [10, 20, 30, 40, 50],
      dropdownVisible: false
    };
  },
  computed: {
    totalPages() {
      return Math.ceil(this.total / this.pageSize);
    },
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
      res = unique(res.filter((item) => (item > 1 && item < this.totalPages)));

      if (this.current >= (this.pageSize / 2 + 1)) {
        res.unshift('<<');
      }
      if (this.totalPages >= 1) {
        res.unshift(1);
      }
      if ((this.totalPages - this.current) >= this.pageSize / 2) {
        res.push('>>');
      }
      if (this.totalPages >= 1) {
        res.push(this.totalPages);
      }
      return res;
    }
  },
  methods: {
    handlePageSizeChange(item) {
      this.pageSize = Number(item);
      this.dropdownVisible = !this.dropdownVisible;
      this.$emit('on-page-size-change', this.pageSize);
      this.$emit('update:current', 1);
    },
    handleChange(e) {
      let number = Number(e.target.value);
      if (number >= this.total || !number) {
        number = this.total;
      }
      this.goToPage(number);
    },
    goToPage(item) {
      let res = -1;
      if (item <= 1) {
        res = 1;
      } else if (item >= this.totalPages) {
        res = this.totalPages;
      } else {
        res = item;
      }
      this.$emit('update:current', res);
      this.$emit('on-change', res);
    }
  }
};
</script>

<style lang="less" scoped>
@import './pagination.less';
</style>
