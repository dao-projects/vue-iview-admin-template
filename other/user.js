import axios from "@/utils/axios";

/**
 * 登陆
 * @param data
 * @returns {*}
 */
export function login(data) {
  return axios({
    url: "/api/user/login",
    method: "post",
    data
  });
}

/**
 * 获取基本信息
 * @param token
 * @returns {*}
 */
export function getInfo(token) {
  return axios({
    url: "/api/user/info",
    method: "get",
    params: { token }
  });
}

/**
 * 退出登陆
 * @returns {*}
 */
export function logout() {
  return axios({
    url: "/api/user/logout",
    method: "post"
  });
}
