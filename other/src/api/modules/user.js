import axios from "@/utils/axios";

/**
 * login [POST  用户登录]
 * @param data [{username:'',password:''}]
 * @returns {AxiosPromise}
 */
export function login(data) {
  return axios({ url: "/api/user/login", method: "post", data });
}

/**
 * info [GET 获取用户信息]
 * @returns {AxiosPromise}
 */
export function info(data) {
  return axios({ url: "/api/user/info", method: "get", data });
}

/**
 * logout [POST 用户登出]
 * @returns {AxiosPromise}
 */
export function logout() {
  return axios({ url: "/api/user/logout", method: "post" });
}
