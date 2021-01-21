import axios from "@/utils/axios";

/**
 * 登陆
 * @param data
 * @returns {*}
 */
export function login(data) {
  return axios({
    url: "/api/login",
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
