// 异步（动态）路由
import asyncRoutes from "@/router/asyncRoute";
import staticRoutes from "@/router/staticRoutes";

/**
 * Use meta.role to determine if the current user has permission
 * @param roles
 * @param route
 */
function hasPermission(roles, route) {
  if (route.meta && route.meta.roles) {
    return roles.some(role => route.meta.roles.includes(role));
  } else {
    return true;
  }
}

/**
 * Filter asynchronous routing tables by recursion
 * @param routes asyncRoutes
 * @param roles
 */
export function filterAsyncRoutes(routes, roles) {
  const res = [];
  routes.forEach(route => {
    const tmp = { ...route };
    if (hasPermission(roles, tmp)) {
      if (tmp.children) {
        tmp.children = filterAsyncRoutes(tmp.children, roles);
      }
      res.push(tmp);
    }
  });
  return res;
}

export default {
  namespaced: true,
  state: {
    routes: [],
    addRoutes: []
  },
  mutations: {
    SET_ROUTES: (state, routes) => {
      state.addRoutes = routes;
      state.routes = staticRoutes.concat(routes);
      console.log(state.routes.map(v => v.path));
    }
  },
  actions: {
    generateRoutes({ commit }, roles) {
      return new Promise(resolve => {
        let accessedRoutes;
        if (roles.includes("admin")) {
          // console.log("是超级管理员", asyncRoutes, roles);
          accessedRoutes = asyncRoutes || [];
        } else {
          // console.log("不是超级管理员", asyncRoutes, roles);
          accessedRoutes = filterAsyncRoutes(asyncRoutes, roles);
        }
        commit("SET_ROUTES", accessedRoutes);
        resolve(accessedRoutes);
      });
    }
  },
  getters: {
    addRouters(state) {
      return state.addRouters;
    }
  }
};
