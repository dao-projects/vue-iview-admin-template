export default [
  {
    path: "/user",
    name: "User",
    component: () => import(/* webpackChunkName: "user" */ "@/views/user/index"),
    meta: {
      title: "用户管理",
      roles: ["admin"] // 页面需要的权限
    },
    children: [
      {
        path: "a",
        name: "A",
        component: () => import(/* webpackChunkName: "user" */ "@/views/user/a"),
        meta: {
          title: "用户管理-a",
          roles: ["admin"] // 页面需要的权限
        }
      },
      {
        path: "b",
        name: "B",
        component: () => import(/* webpackChunkName: "user" */ "@/views/user/b"),
        meta: {
          title: "用户管理-b",
          roles: ["admin"] // 页面需要的权限
        }
      }
    ]
  }
];