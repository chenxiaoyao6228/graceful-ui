<script>
const prefixCls = 'g-alert'
let seed = 0
function getUuid(){
  return 'alert_' + (seed++);
}

export default {
  props:{
    type: {
      type: String,
      default: 'info'
    }
  },
  data () {
    return {
      notices: []
    }
  },
  computed:{
    classes(){
      return [
        `${prefixCls}`,
        `${prefixCls}-${this.type}`
      ]
    }
  },
  methods:{
    add(notice){
      let vm = this
      const name = getUuid()

      let _notice = Object.assign({ 
        name: name
      }, notice)

      this.notices.push(_notice)

      const duration = notice.duration;
      setTimeout(()=>{
        vm.remove(name);
      }, duration * 1000)
    },
    remove(name){
      const notices = this.notices
      for(let i = 0, len = notices.length; i < len; i++){
        if(notices[i].name === name){
          this.notices.splice(i, 1);
          break;
        }
      }
    }
  }
}
</script>
<template>
  <div :class="classes">
    <div
      v-for="item in notices"
      :key="item.name"
      class="g-alert-main"
    >
      <div class="g-alert-content">
        {{ item.content }}
      </div>
    </div>
  </div>
</template>
<style lang="less" scoped>
@import "./alert.less";
</style>
