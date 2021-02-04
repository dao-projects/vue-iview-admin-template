import { Layout, auth } from "../config";
export default [
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
        meta: { title: "卡机d", icon: "dashboard", roles: auth["admin"] }
      }
    ]
  }
];
