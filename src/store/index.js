import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);

const modulesFiles = require.context("./modules", true, /\.js$/);
const modules = modulesFiles.keys().reduce((modules, modulePath) => {
  const moduleName = modulePath.replace(/^\.\/(.*)\.\w+$/, "$1");
  const value = modulesFiles(modulePath);
  modules[moduleName] = value.default;
  return modules;
}, {});
export default new Vuex.Store({
  modules
});
// ------------------------
//
// // 引入另一个模块使用
// import permission from "./permission";
//
// // 封装的api接口方法
// import { getLogin, getUserInfo } from "../api/login";
//
// let localStorage = window.localStorage;
//
// export default new Vuex.Store({
//   state: {
//     roles: [],
//     token: localStorage.getItem("token") || ""
//   },
//   mutations: {
//     // 将获取到的token存储到本地
//     SET_TOKEN(state, token) {
//       state.token = token;
//       console.log("state===>", state);
//       localStorage.setItem("token", state.token);
//     }
//   },
//   actions: {
//     userLogin({ commit }, userInfo) {
//       // 返回一个异步回调，promise
//       return new Promise((resolve, reject) => {
//         // 调用封装好的请求数据的方法
//         getLogin(userInfo)
//           .then(res => {
//             const data = res.data;
//             if (res.code === 200) {
//               // 调用mutations中的方法，将token存储到本地中
//               commit("SET_TOKEN", data.token);
//             }
//             resolve(res.data);
//           })
//           .catch(error => {
//             reject(error);
//           });
//       });
//     },
//     // 根据用户的token获取用户的个人信息，里面包含了权限信息
//     getUserInfo({ state }) {
//       // 返回一个异步回调，promise
//       return new Promise((resolve, reject) => {
//         // 调用接口方法获取数据
//         getUserInfo(state)
//           .then(res => {
//             // 将获取到的信息放到数组中存储
//             state.roles.push(res.data);
//             resolve(res.data);
//           })
//           .catch(error => {
//             reject(error);
//           });
//       });
//     }
//   },
//   getters: {
//     // 将用户数据放到计算属性中，一旦数据发生变化，可以重新计算
//     roles(state) {
//       return state.roles;
//     },
//     token(state) {
//       return state.token;
//     }
//   },
//   modules: {
//     permission
//   }
// });
