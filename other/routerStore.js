import { asyncRoute, staticRoutes, hasPerMission } from "@/router";

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
      // eslint-disable-next-line no-unused-vars
      return new Promise((resolve, reject) => {
        // 遍历权限路由数组
        const accessedRoutes = asyncRoute.filter(v => {
          // 判断如果后台返回的权限中包含admin就是管理员，可以进入权限路由页面
          if (data.indexOf("admin") >= 0) return true;
          // 之后就是调用hasPerMission函数对象权限动态路由和后台返回的用户权限进行严格匹配
          if (hasPerMission(data, v)) {
            // 判断是否有权限路由是否有子路由，有子路由继续遍历
            if (v.children && v.children.length > 0) {
              v.children = v.children.filter(child => {
                // 对权限子路由和后台返回的用户权限数据，在进行匹配，匹配成功返回
                if (hasPerMission(data, child)) {
                  return child;
                }
                // 失败返回false
                return false;
              });
              // 并且要把权限的父路由返回来，不光要把权限子路由返回，无论权限子路有还是没有，都应该把权限父路由返回来
              return v;
            } else {
              // 权限父路由匹配成功返回
              return v;
            }
          }
          // 如果每一个判断都没有进，说明该用户没有任何权限，返回false
          return false;
        });
        // console.log(accessedRoutes, data);
        commit("SET_ROUTERS", accessedRoutes);
        resolve();
      });
      // commit("SET_ROUTERS", data);
    }
  },
  getters: {
    // 只要权限路由数组发生变化就重新计算
    addRouters(state) {
      return state.addRouters;
    }
  }
};
