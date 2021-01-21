import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);
// 引入登陆页面
import Login from "../views/login/index";
import Home from "../views/Home.vue";
import Dashboard from "../views/dashboard/index";

export const staticRoutes = [
  {
    path: "/login",
    name: "login",
    component: Login
  }
  // {
  //   path: "/dashboard",
  //   name: "dashboard",
  //   component: Dashboard
  // }
  // {
  //   path: "/home",
  //   name: "Home",
  //   component: Home
  // }
];

// 异步（动态）挂载的路由，根据权限展示
export const asyncRouteMap = [
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: {
      role: ["admin", "super_editor"] // 页面需要的权限
    }
  },
  {
    path: "/dashboard",
    name: "dashboard",
    component: Dashboard
  },
  {
    path: "/details",
    name: "details",
    component: () => import("../views/tt"),
    meta: {
      role: ["admin", "super_editor"] // 页面需要的权限
    },
    children: [
      {
        path: "index",
        name: "index",
        component: () => import("../views/tt/child"),
        meta: {
          role: ["admin", "super_editor"] // 页面需要的权限
        },
        children: [
          {
            path: "/next",
            name: "next",
            meta: {
              role: ["admin", "super_editor"] // 页面需要的权限
            }
          }
        ]
      }
    ]
  },
  {
    path: "/error",
    component: () => import("../views/error/404"),
    name: 404
  },
  { path: "*", redirect: "/error", hidden: true }
];

// 因为可以动态的挂载路由，但是不能动态删除路由。所以才考略到，
// 在需要动态清空动态挂载路由的话，直接将一个新的路由对象赋值给旧的路由对象，这样就可以达到动态清除的工作

const createRouter = () =>
  new VueRouter({
    scrollBehavior: () => ({ y: 0 }),
    routes: staticRoutes
  });

const router = createRouter();

// 调用该方法动态清除动态挂载路由
export function resetRouter() {
  const newRouter = createRouter();
  router.matcher = newRouter.matcher; // reset router
}

export default router;
