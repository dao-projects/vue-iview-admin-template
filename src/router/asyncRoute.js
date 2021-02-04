/**
 * 异步（动态）挂载的路由，根据权限展示
 */
//导入动态模块
// import user from "./modules/user";

/* Layout */
import Layout from "@/layout/index";
// 授权管理
const auth = {
  admin: ["admin", "manage", "user", "editor", "delete"], //超级管理员
  manage: ["manage", "user", "editor", "delete"], //平台管理员
  user: ["user", "editor", "delete"], //平台管理员（部分限制）
  delete: ["editor", "delete"], //增加删除修改权限
  editor: ["editor"] //编辑权限
};
// 导出动态路由
export default [
  {
    path: "/",
    component: Layout,
    redirect: "/dashboard",
    meta: {
      title: "看板",
      roles: auth["admin"]
    },
    children: [
      {
        path: "dashboard",
        component: () => import(/* webpackChunkName: "dashboard" */ "@/views/dashboard"),
        name: "Dashboard",
        meta: { title: "Dashboard", icon: "dashboard", affix: true, noCache: true, roles: auth["admin"] }
      }
    ]
  },
  {
    path: "/user",
    component: Layout,
    redirect: "/user/index",
    meta: { title: "用户管理", roles: auth["admin"], icon: "ios-analytics" },
    children: [
      {
        path: "index",
        component: () => import("@/views/user/index"),
        name: "user",
        meta: { title: "用户管理", roles: ["admin", "super_editor"] }
      },
      {
        path: "a",
        component: () => import("@/views/user/a"),
        name: "a",
        meta: { title: "用户管理-a", roles: ["admin", "super_editor"] }
      },
      {
        path: "b",
        component: () => import("@/views/user/b"),
        name: "b",
        meta: { title: "用户管理-b", roles: ["admin", "super_editor"] }
      }
    ]
  },
  {
    path: "/ka",
    component: Layout,
    redirect: "/ka/index",
    meta: { title: "卡卡", roles: auth["admin"], icon: "ios-analytics" },
    children: [
      {
        path: "index",
        component: () => import("@/views/ka/index"),
        name: "ka",
        meta: { title: "卡机d", icon: "dashboard", roles: ["admin", "super_editor"] }
      }
    ]
  },
  // ...user,
  // {
  //   path: "/",
  //   name: "Home",
  //   component: () => import(/* webpackChunkName: "home" */ "@/views/Home"),
  //   meta: {
  //     title: "首页",
  //     roles: ["admin", "super_editor"] // 页面需要的权限
  //   }
  // },
  // {
  //   path: "/dashboard",
  //   name: "Dashboard",
  //   component: () => import(/* webpackChunkName: "dashboard" */ "@/views/dashboard/index"),
  //   meta: {
  //     title: "面板",
  //     icon: "ios-analytics",
  //     // roles: []
  //     roles: ["admin", "super_editor"]
  //   }
  // },

  //空白页面跳转
  { path: "*", redirect: "/error", hidden: true, meta: { title: "Not page 404" } }
];
