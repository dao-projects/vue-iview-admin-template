import { Layout, auth } from "../config";
export default [
  {
    path: "/tt",
    component: Layout,
    redirect: "/tt/index",
    meta: { title: "体贴", roles: auth["admin"], icon: "ios-analytics" },
    children: [
      {
        path: "index",
        component: () => import("@/views/tt/index"),
        name: "tt",
        meta: { title: "天天", icon: "dashboard", roles: auth["admin"] }
      }
    ]
  }
];
