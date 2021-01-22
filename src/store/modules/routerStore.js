import { staticRoutes } from "@/router";

export default {
  state: {
    routers: staticRoutes,
    addRouters: []
  },
  mutations: {
    // 将匹配成功的权限路由拼接到公共路由中
    SET_ROUTERS(state, routers) {
      state.addRouters = routers;
      state.routers = staticRoutes.concat(routers);
    }
  },
  actions: {
    // 对后台返回来的权限和动态路由权限匹配
    GenerateRoutes({ commit }, data) {
      commit("SET_ROUTERS", data);
    }
  },
  getters: {
    // 只要权限路由数组发生变化就重新计算
    addRouters(state) {
      return state.addRouters;
    }
  }
};
