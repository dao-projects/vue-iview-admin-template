import { default as api } from "@/api";
import { getToken, setToken, removeToken } from "@/utils/token";
import { resetRouter } from "@/router";

export default {
  namespaced: true,
  state: {
    token: getToken(),
    name: "",
    avatar: "",
    roles: []
  },
  mutations: {
    RESET_STATE: state => {
      Object.assign(state, {
        token: getToken(),
        name: "",
        avatar: "",
        roles: []
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
    },
    SET_ROLES: (state, roles) => {
      state.roles = roles;
    }
  },
  actions: {
    // user login
    login({ commit }, userInfo) {
      const { username, password } = userInfo;
      return new Promise((resolve, reject) => {
        api.user
          .login({ username: username.trim(), password: password })
          .then(response => {
            const { data } = response;
            // console.log(data);
            commit("SET_TOKEN", data.token || "");
            setToken(data.token || "");
            resolve(data);
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
          .info({ token: state.token })
          .then(response => {
            const { data } = response;
            if (!data) {
              return reject("Verification failed, please Login again.");
            }
            const { name, avatar, roles } = data;
            commit("SET_ROLES", roles);
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
          .logout({ token: state.token })
          .then(res => {
            removeToken(); // must remove  token  first
            resetRouter();
            commit("RESET_STATE");
            resolve(res);
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
  },
  getters: {}
};
