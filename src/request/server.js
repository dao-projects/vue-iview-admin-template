import axios from "axios";
// 初始化默认
// axios.defaults.timeout = 8000;
// axios.defaults.headers["zd"] = "2";
const service = axios.create({
  baseURL: process.env.BASE_URL,
  // withCredentials: true, // send cookies when cross-domain requests
  timeout: 5000
  // headers: {
  //   "Content-Type": "application/x-www-form-urlencoded",
  //   "X-Token": "xxxxxx"
  // }
});
/**
 * 请求前拦截
 * 用于处理需要请求前的操作
 */
service.interceptors.request.use(
  config => {
    // if (store.getters.token) {
    //   config.headers["X-Token"] = getToken();
    // }
    // config.headers["zd"] = 1;
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

/**
 * 请求相应拦截
 * 用于处理需要请求前的操作
 */
service.interceptors.response.use(
  response => {
    const res = response.data;
    if (res.code !== 200) {
      // if(res.code === 403 ){}
      // return Promise.reject(new Error(res.message || "Error"));
      return Promise.reject(res);
    } else {
      // return res;
      return Promise.resolve(res);
    }
    // return new Promise((resolve, reject) => {
    //   let res = response.data;
    //   resolve(res);
    // });
  },
  error => {
    //断网处理或者请求超时
    if (!error.response) {
      //请求超时
      if (error.message.includes("timeout")) {
        console.log("请求超时,请检查互联网连接");
      } else {
        //断网了
        console.log("请检查网络是否已连接");
      }
      return;
    }
    const status = error.response.status;
    switch (status) {
      case 500:
        console.log("操作失败");
        break;
      case 404:
        console.log("未找到远程服务器");
        break;
      default:
        console.log("请求失败");
    }
    return Promise.reject(error);
  }
);

export default service;
// export const get = (url, params, config = {}) => axios({ method: "post", url, params, ...config });
// export const post = (url, data = {}, config = {}) => axios({ method: "post", url, data, ...config });

// 获取远端图片
// axios({method: "get", url: "http://bit.ly/2mTM3nY", responseType: "stream" }).then(function(response) {
//   response.data.pipe(fs.createWriteStream("ada_lovelace.jpg"));
// });
