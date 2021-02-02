import axios from "@/utils/axios";

/**
 * list [GET  新闻资讯列表]
 * @param data [{}]
 * @returns {AxiosPromise}
 */
export function list(data) {
  return axios({ url: "/api/news/list", data });
}
