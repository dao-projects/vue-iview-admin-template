import axios from "@/utils/axios";

/**
 * 登陆
 * @param data
 * @returns {*}
 */
export function getLogin(data) {
  return axios({
    url: "/api/login",
    method: "post",
    data
  });
}

/**
 * 获取用户信息
 * @param data
 * @returns {AxiosPromise}
 */
export function getUserInfo(data) {
  return axios({
    url: "/api/user/info",
    method: "post",
    data
  });
}

/**
 * 退出登陆
 * @returns {*}
 */
export function logout() {
  return axios({
    url: "/api/logout",
    method: "post"
  });
}
