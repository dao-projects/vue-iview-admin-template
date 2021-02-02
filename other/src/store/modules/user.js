import { default as api } from "@/api";
import { getToken, setToken, removeToken } from "@/utils/token";
import { resetRouter } from "@/router";
console.log(api);
export default {
  namespaced: true,
  state: {
    token: getToken(),
    name: "",
    avatar: ""
    // roles: []
  },
  mutations: {
    RESET_STATE: state => {
      Object.assign(state, {
        token: getToken(),
        name: "",
        avatar: ""
      });
    },
    SET_TOKEN: (state, token) => {
      state.token = token;
    },
    SET_NAME: (state, name) => {
      state.name = name;
    },
    SET_AVATAR: (state, avatar) => {
      state.avatar = avatar;
    }
    // SET_ROLES: (state, roles) => {
    //   state.roles = roles;
    // }
  },
  actions: {
    // user login
    login({ commit }, userInfo) {
      const { username, password } = userInfo;
      return new Promise((resolve, reject) => {
        api.user
          .login({ data: { username: username.trim(), password: password } })
          .then(response => {
            const { data } = response;
            console.log(data, "SET_TOKEN");
            commit("SET_TOKEN", data.token);
            setToken(data.token);
            resolve();
          })
          .catch(error => {
            reject(error);
          });
      });
    },
    // get user info
    getInfo({ commit, state }) {
      return new Promise((resolve, reject) => {
        api.user
          .info({ params: { token: state.token } })
          .then(response => {
            const { data } = response;
            if (!data) {
              return reject("Verification failed, please Login again.");
            }
            const { name, avatar } = data;
            commit("SET_NAME", name);
            commit("SET_AVATAR", avatar);
            resolve(data);
          })
          .catch(error => {
            reject(error);
          });
      });
    },

    // user logout
    logout({ commit, state }) {
      return new Promise((resolve, reject) => {
        api.user
          .logout({ data: { token: state.token } })
          .then(() => {
            removeToken(); // must remove  token  first
            resetRouter();
            commit("RESET_STATE");
            resolve();
          })
          .catch(error => {
            reject(error);
          });
      });
    },
    // remove token
    resetToken({ commit }) {
      return new Promise(resolve => {
        removeToken(); // must remove  token  first
        commit("RESET_STATE");
        resolve();
      });
    }

    // // eslint-disable-next-line no-unused-vars
    // getInfo({ commit }, data) {
    //   // eslint-disable-next-line no-unused-vars
    //   return new Promise((resolve, reject) => {
    //     api.user.info({
    //       success: res => {
    //         const { roles = [] } = res.data;
    //         console.log(roles);
    //         commit("SET_ROLES", roles);
    //         resolve({ roles: roles });
    //       }
    //     });
    //     // commit("SET_ROLES", ["admin"]);
    //     // resolve({ roles: ["admin"] });
    //   });
    // }
  },
  getters: {}
};
