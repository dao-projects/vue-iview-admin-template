/**
 * 默认静态路由：不需要用户角色
 * @time: 2021年1月22日17:18:15
 * @author: dioxin
 */

//导入静态模块
import ka from "./modules/ka";

// 导出静态路由
export default [
  ...ka,
  {
    path: "/login",
    name: "Login",
    component: () => import(/* webpackChunkName: "login" */ "@/views/login/index")
  },
  {
    path: "/error",
    name: "Error",
    component: () => import(/* webpackChunkName: "error" */ "@/views/error/index"),
    children: [
      {
        path: "301",
        name: "301",
        component: () => import(/* webpackChunkName: "301" */ "@/views/error/301")
      },
      {
        path: "404",
        name: "404",
        component: () => import(/* webpackChunkName: "403" */ "@/views/error/404")
      }
    ]
  }
  // { path: "*", redirect: "/error", hidden: true }
];
