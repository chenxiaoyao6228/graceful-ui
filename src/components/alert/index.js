import alert from './alert';

alert.install = (Vue) => {
  Vue.prototype.$Alert = alert;
};
export default alert;
