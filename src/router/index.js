import Vue from "vue";
import VueRouter from "vue-router";
// 解决跳转报错bug
const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location, onResolve, onReject) {
  if (onResolve || onReject) return originalPush.call(this, location, onResolve, onReject);
  return originalPush.call(this, location).catch(err => err);
};
// 解决跳转报错bug end
Vue.use(VueRouter);
// 默认静态路由
import staticRoutes from "@/router/staticRoutes";
// 异步（动态）路由
// import asyncRoutes from "@/router/asyncRoute";

/**
 * 因为可以动态的挂载路由，但是不能动态删除路由。所以才考略到，在需要动态清空动态挂载路由的话，直接将一个新的路由对象赋值给旧的路由对象，这样就可以达到动态清除的工作
 * @returns {VueRouter}
 */
const createRouter = () =>
  new VueRouter({
    scrollBehavior: () => ({ y: 0 }),
    routes: staticRoutes
  });

const router = createRouter();

// 调用该方法动态清除动态挂载路由
function resetRouter() {
  const newRouter = createRouter();
  router.matcher = newRouter.matcher; // reset router
}

// export { router, staticRoutes, asyncRoutes, resetRouter };
export { router, resetRouter };
