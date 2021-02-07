/**
 * 异步（动态）挂载的路由，根据权限展示
 */
import { Layout, auth } from "./config";
//导入动态模块
// import user from "./modules/user";
// import ka from "./modules/ka";
// import tt from "./modules/tt";
// import cloud from "./modules/cloud";

// 动态导入
const modulesFiles = require.context("./modules", true, /\.js$/);
const routeArr = modulesFiles.keys().map(path => modulesFiles(path).default[0]);
// 导出动态路由
export default [
  {
    path: "/",
    component: Layout,
    redirect: "/dashboard",
    meta: {
      title: "Dashboard",
      roles: auth["admin"]
    },
    children: [
      {
        path: "dashboard",
        component: () => import(/* webpackChunkName: "dashboard" */ "@/views/dashboard"),
        name: "Dashboard",
        meta: { title: "Dashboard", icon: "dashboard", affix: true, noCache: true, roles: auth["admin"] }
      },
      {
        path: "dashboard/note",
        component: () => import(/* webpackChunkName: "dashboard" */ "@/views/dashboard/note"),
        name: "note",
        meta: { title: "笔记", icon: "dashboard", affix: true, noCache: true, roles: auth["admin"] }
      }
    ]
  },
  ...routeArr,
  // ...user,
  // { path: "/", name: "Home", component: () => import(/* webpackChunkName: "home" */ "@/views/Home"), meta: { affix: true, noCache: true, title: "首页",  icon: "ios-analytics",  roles: ["admin", "super_editor"] // 页面需要的权限 }},
  //空白页面跳转
  { path: "*", redirect: "/error", hidden: true, auth: "NO", meta: { title: "Not page 404" } }
];
