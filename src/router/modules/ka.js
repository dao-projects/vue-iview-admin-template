export default [
  {
    path: "/ka",
    name: "Ka",
    component: () => import(/* webpackChunkName: "ka" */ "@/views/ka/index"),
    meta: {
      title: "卡卡"
      // roles: ["admin", "super_editor"] // 页面需要的权限
    }
  }
];
