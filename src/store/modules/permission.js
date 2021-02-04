/**
 * 异步（动态）路由
 */
import asyncRoutes from "@/router/asyncRoute";
/**
 * 异步（静态）路由
 */
import staticRoutes from "@/router/staticRoutes";

/**
 * Use meta.role to determine if the current user has permission
 * @param roles
 * @param route
 */
function hasPermission(roles, route) {
  //解决roles为空问题
  if (!route.meta.roles && !route.auth) {
    route.meta.roles = [];
  }
  //解决roles为空问题
  if (!route.meta.title) {
    route.meta.title = route.name;
    route.hidden = true;
  }
  //icon为空时重置
  if (!route.meta.icon) {
    route.meta.icon = "ios-navigate";
  }
  // console.log(route.meta.roles);
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
      // const routeArr = routes.filter(v => !v.auth && v);
      // console.log(routes, routeArr);
      state.addRoutes = routes;
      state.routes = staticRoutes.concat(routes);
      // console.log(state.routes.map(v => v.path));
    }
  },
  actions: {
    generateRoutes({ commit }, roles) {
      return new Promise(resolve => {
        let accessedRoutes;
        // if (roles.includes("admin")) {
        //   // console.log("是超级管理员", asyncRoutes, roles);
        //   accessedRoutes = asyncRoutes || [];
        // } else {
        //   // console.log("不是超级管理员", asyncRoutes, roles);
        //   accessedRoutes = filterAsyncRoutes(asyncRoutes, roles);
        // }
        accessedRoutes = filterAsyncRoutes(asyncRoutes, roles);
        commit("SET_ROUTES", accessedRoutes);
        resolve(accessedRoutes);
      });
    }
  },
  /**
   * getter
   * @example
   *     import { mapGetters } from "vuex";
   *     computed: {
   *        ...mapGetters({ menus: "permission_routes" })
   *        ...mapGetters(["permission_routes"]),
   *        ...mapGetters(["permission/routes"]),
   *        menus(){return this.$store.getters.routes}
   *        menus(){return this.$store.state.todos.filter(todo => todo.done.length)}
   *     }
   *     <fragment v-for="(item, i) in menus" :key="i"></fragment>
   *     <fragment v-for="(item, i) in permission_routes" :key="i"></fragment>
   */
  getters: {
    addRouters(state, getters) {
      console.log(getters);
      return state.addRouters;
    },
    routes: state => state.routes,
    //store.getters.getRouteName('Login')
    getRouteName: state => name => {
      return state.routes.find(todo => todo.name === name);
    }
  }
};
