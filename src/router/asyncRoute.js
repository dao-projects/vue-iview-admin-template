/**
 * 异步（动态）挂载的路由，根据权限展示
 */
//导入动态模块
import user from "./modules/user";

// 导出动态路由
export default [
  ...user,
  {
    path: "/",
    name: "Home",
    component: () => import(/* webpackChunkName: "home" */ "@/views/Home"),
    meta: {
      roles: ["admin", "super_editor"] // 页面需要的权限
    }
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    component: () => import(/* webpackChunkName: "dashboard" */ "@/views/dashboard/index"),
    meta: {
      roles: ["admin", "super_editor"]
    }
  },
  //空白页面跳转
  { path: "*", redirect: "/error", hidden: true }
];
