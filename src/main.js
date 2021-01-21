// import "core-js/stable";
// import "regenerator-runtime/runtime";
import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
// ---------------------
// import { default as iview } from 'view-design';
// import { Button, Table } from "view-design";
// Vue.component("Button", Button);
import iview from "view-design";
import "@/styles/theme.less";
Vue.use(iview);
// ---------------------
// import filters from "./filters/index";
// // 注入全局过滤器
// Object.keys(filters).forEach(item => {
//   Vue.filter(item, filters[item]);
// });
// ---------------------
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
