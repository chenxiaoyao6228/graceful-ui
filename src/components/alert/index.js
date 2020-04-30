import Alert from "./toast.vue";
Alert.install = (Vue) => {
  Vue.component("Alert", Alert);
};
export default Alert;
