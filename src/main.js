// import "core-js/stable";
// import "regenerator-runtime/runtime";
import Vue from "vue";
import App from "./App.vue";
import { router } from "./router";
import store from "./store";
// ---------------------
// import { default as iview } from 'view-design';
// import { Button, Table } from "view-design";
// Vue.component("Button", Button);
import iview from "view-design";
import "@/styles/theme.less";
Vue.use(iview);

// import { Plugin } from "vue-fragment";
// Vue.use(Plugin);
import Fragment from "vue-fragment";
Vue.use(Fragment.Plugin);
// ---------------------
// dayjs()./add(7, "day")/subtract(7, "day")/startOf("hour")/endOf("hour")/.format("YYYY-MM-DD")
import * as dayjs from "dayjs";
// import * as customParseFormat from "dayjs/plugin/customParseFormat"; // 导入插件
// dayjs.extend(customParseFormat); // 使用插件
// import "dayjs/locale/zh-cn"; // 导入本地化语言
// dayjs.locale("zh-cn"); // 使用本地化语言
// console.log(dayjs("2018 三月 15", "YYYY MMMM DD", "zh-cn").format("YYYY-MM-DD"));
Vue.prototype.$dayjs = dayjs;
// ---------------------
//qs.parse('a=c')  &  qs.stringify({a:'c'})
import * as qs from "qs";
Vue.prototype.$qs = qs;
// ---------------------
// import filters from "./filters/index";
// // 注入全局过滤器
// Object.keys(filters).forEach(item => {
//   Vue.filter(item, filters[item]);
// });
// ---------------------
Vue.config.productionTip = false;
// -----------------------------------
// const { roles } = await store.dispatch("user/getInfo");
// store.dispatch("permission/generateRoutes", ["admin"]);
// router.addRoutes(store.getters.addRouters);
import { getToken } from "@/utils/token";

const whiteList = ["/login", "/auth-redirect"]; // no redirect whitelist
router.beforeEach(async (to, from, next) => {
  iview.LoadingBar.start();
  const hasToken = getToken();
  if (hasToken) {
    if (to.path === "/login") {
      next({ path: "/" });
    } else {
      const hasRoles = !!(store.state.user.roles && store.state.user.roles.length > 0);
      if (hasRoles) {
        next();
      } else {
        try {
          const { roles } = await store.dispatch("user/getInfo");
          const accessRoutes = await store.dispatch("permission/generateRoutes", roles);
          router.addRoutes(accessRoutes);
          next({ ...to, replace: true });
        } catch (error) {
          await store.dispatch("user/resetToken");
          next(`/login?redirect=${to.path}`);
          // next();
        }
      }
    }
  } else {
    if (whiteList.indexOf(to.path) !== -1) {
      next();
    } else {
      next(`/login?redirect=${to.path}`);
    }
  }
});
router.afterEach(() => {
  iview.LoadingBar.finish();
});

// --------------------------
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
