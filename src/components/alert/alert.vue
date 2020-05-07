<script>
import Icon from '../icon/icon.vue';

const prefixCls = 'g-alert';

let seed = 0;
function getUuid() {
  seed += 1;
  return `alert-${seed}`;
}

export default {
  components: { Icon },
  data() {
    return {
      prefixCls,
      notices: []
    };
  },
  methods: {
    add(noticeParams) {
      const vm = this;
      const name = getUuid();

      const notices = {
        name,
        ...noticeParams
      };

      this.notices.push(notices);

      const { duration } = notices;
      setTimeout(() => {
        vm.remove(name);
      }, duration * 1000);
    },
    remove(name) {
      const { notices } = this;
      for (let i = 0, len = notices.length; i < len; i++) {
        if (notices[i].name === name) {
          this.notices.splice(i, 1);
          break;
        }
      }
    }
  }
};
</script>
<template>
  <div :class="[`${prefixCls}`]">
    <div
      v-for="item in notices"
      :key="item.name"
      :class="[`${prefixCls}-wrapper`, `${prefixCls}-wrapper-${item.type}`]"
    >
      <div class="g-alert-content">
        <i class="g-alert-icon">
          <Icon :type="item.type" />
        </i>
        <p class="g-alert-text">
          {{ item.content }}
        </p>
      </div>
    </div>
  </div>
</template>
<style lang="less" scoped>
@import './alert.less';
</style>
