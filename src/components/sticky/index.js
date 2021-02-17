import Sticky from './sticky.vue';

Sticky.install = (Vue) => {
  Vue.prototype.$Sticky = Sticky;
};
export default Sticky;
