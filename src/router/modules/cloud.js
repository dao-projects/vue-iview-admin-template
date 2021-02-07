import { Layout, auth } from "../config";
export default [
  {
    path: "/cloud",
    component: Layout,
    redirect: "/cloud/index",
    meta: { title: "云开发", roles: auth["admin"], icon: "ios-analytics" },
    children: [
      {
        path: "index",
        component: () => import("@/views/cloud/index"),
        name: "cloud",
        meta: { title: "云函数", icon: "dashboard", roles: auth["admin"] }
      },
      {
        path: "db",
        component: () => import("@/views/cloud/db"),
        name: "db",
        meta: { title: "云数据库", icon: "dashboard", roles: auth["admin"] }
      }
    ]
  }
];
