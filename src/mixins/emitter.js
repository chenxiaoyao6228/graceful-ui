// thanks to: https://github.com/iview/iview/edit/2.0/src/mixins/emitter.js
function broadcast(componentName, eventName, params) {
  this.$children.forEach((child) => {
    const { name } = child.$options;

    if (name === componentName) {
      child.$emit(...[eventName].concat(params));
    } else {
      // todo 如果 params 是空数组，接收到的会是 undefined
      broadcast.apply(child, [componentName, eventName].concat([params]));
    }
  });
}
export default {
  methods: {
    dispatch(componentName, eventName, params) {
      let parent = this.$parent || this.$root;
      let { name } = parent.$options;

      while (parent && (!name || name !== componentName)) {
        parent = parent.$parent;

        if (parent) {
          name = parent.$options.name;
        }
      }
      // 由接收到的父元素代理事件触发
      if (parent) {
        parent.$emit(...[eventName].concat(params));
      }
    },
    broadcast(componentName, eventName, params) {
      broadcast.call(this, componentName, eventName, params);
    }
  }
};