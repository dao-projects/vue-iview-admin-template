export default {
  namespaced: true,
  state: {
    active: "1-1",
    open: 1
  },
  mutations: {
    SET_ACTIVE: (state, { active, open }) => {
      // console.log(active, open / 1);
      state.active = active;
      state.open = open / 1;
    },
    SET_ROUTE_ACTIVE: (state, { pathArr, routeArr }) => {
      let path = pathArr.split("/").filter(v => v && v);
      // const routeArr = routes.filter(v => !v.auth && v);
      const aa = routeArr.map((v, i) => v.path === "/" + path[0] && { ...v, i }).filter(v => v && v);
      // console.log(aa[0]);
      if (aa[0]) {
        let aci = aa[0].children.map((m, j) => path[1] === m.path && { ...m, j: j + 1 }).filter(v => v && v) || [1];
        let i = aa[0]["i"] || 0;
        state.active = `${i + 1}-${aci[0]["j"]}`;
        state.open = i + 1;
        state.pathArr = {
          path: aa[0],
          child: aci[0]
        };
      } else {
        if (path[1] && routeArr[0]["children"].length) {
          let aci = routeArr[0]["children"]
            .map((m, j) => path[1] === m.name && { ...m, j: j + 1 })
            .filter(v => v && v) || [1];
          state.active = `1-${aci[0]["j"]}`;
          // console.log(path, routeArr, aci);
        }
      }
      // console.log(path, routeArr, aa, aci);
      // console.log(state);
      // routeArr.filter((v, i) => {
      //   if (v.path === "/" + path[0]) {
      //     let aci = v.children.map((m, j) => path[1] === m.path && j + 1).filter(v => v && v) || [1];
      //     state.active = `${i + 1}-${aci[0]}`;
      //     state.open = i + 1;
      //     console.log(aci, i);
      //   }
      // });
    }
  },
  actions: {
    set_active({ commit }, payload) {
      commit("SET_ACTIVE", payload);
    },
    set_route_active({ commit }, payload) {
      commit("SET_ROUTE_ACTIVE", payload);
    }
  },
  getters: {
    active(state) {
      return state.active;
    },
    open(state) {
      return state.open;
      // const op = state.active[0] / 1;
      // return [state.active[0]].map(v => v / 1);
    },
    pathArr(state) {
      return state.pathArr;
    }
  }
};
