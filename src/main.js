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
  const hasToken = getToken();
  if (hasToken) {
    if (to.path === "/login") {
      next({ path: "/" });
    } else {
      const hasRoles = !!(store.state.user.roles && store.state.user.roles.length > 0);
      console.log(hasRoles);
      if (hasRoles) {
        next();
      } else {
        try {
          const { roles } = await store.dispatch("user/getInfo");
          const accessRoutes = await store.dispatch("permission/generateRoutes", roles);
          router.addRoutes(accessRoutes);
          next({ ...to, replace: true });
        } catch (error) {
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
// --------------------------
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
