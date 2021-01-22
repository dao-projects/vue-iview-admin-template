/** When your routing table is too long, you can split it into small modules **/

import Layout from "@/layout";

const userRouter = {
  path: "/user",
  component: Layout,
  redirect: "/user/info",
  name: "User",
  meta: {
    title: "User",
    icon: "user"
  },
  children: [
    {
      path: "a",
      component: () => import("@/views/user/a"),
      name: "UserA",
      meta: { title: "User B" }
    },
    {
      path: "b",
      component: () => import("@/views/user/b"),
      name: "UserB",
      meta: { title: "User B" }
    }
  ]
};

export default userRouter;
