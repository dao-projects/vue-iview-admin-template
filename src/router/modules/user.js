import { Layout, auth } from "../config";
export default [
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
        path: "aa",
        component: () => import("@/views/user/a"),
        name: "aa",
        meta: { title: "用户管理-a", roles: ["admin", "super_editor"] }
      },
      {
        path: "bb",
        component: () => import("@/views/user/b"),
        name: "bb",
        meta: { title: "用户管理-b", roles: ["admin", "super_editor"] }
      }
    ]
  }
];
