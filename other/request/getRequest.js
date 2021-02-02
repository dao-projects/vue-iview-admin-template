import server from "./server";

//
// function apiServer(name, params) {
//   let _this = this;
//   _this[name] = {};
//   Object.keys(params).forEach(apiname => {
//     let url = params[apiname];
//     let config = {};
//     if (typeof url === "object") {
//       url = url["url"];
//       config = params[apiname];
//     }
//     // console.log(url, config);
//     // this[name][apiname] = this.sendMessage.bind(this, name, apiname, url, config);
//     _this[name][apiname] = { name, apiname, url, config };
//     //阻止重复提交
//     _this[name][apiname].status = "ready";
//   });
//   return new Promise((resolve, reject) => {
//     console.log(_this);
//     resolve(1);
//     reject(2);
//   });
// }
const apis = {
  user: {
    login: { url: "/api/user/login", type: "post" },
    info: "/api/user/info",
    logout: { url: "/api/user/logout", type: "post" }
  },
  news: {
    list: "/api/news/list"
  }
};
let apiServer = {};
Object.keys(apis).map(api => {
  apiServer[api] = {};
  let apiObj = apis[api];
  // console.log("模块=>", api, apiObj);
  Object.keys(apiObj).map(apilist => {
    // console.log("模块-方法=>", apilist);
    let url = apiObj[apilist];
    let config = {};
    if (typeof url === "object") {
      url = url["url"];
      config = apiObj[apilist];
    }
    console.log({ api, apilist, url, config });
    const { type = "get", data = {}, bindName = apilist, config: conf = null } = config;
    //url动态参数替换
    url = url.replace(/{(\w+)}/g, function(k) {
      const pars = k.slice(1, -1);
      return data[pars] || pars;
    });
    server[type](url, data, conf)
      .then(res => {
        console.log(res, bindName);
      })
      .catch(error => console.log(error, bindName));
  });
});
console.log(apiServer, "apiServer");

function daoServer() {
  this.server = server;
  this.nowhandle = {};
  this.dataset = {};
}

/**
 * 解析api模块参数
 * @param name  模块名称
 * @param urlObj 模块参数
 */
daoServer.prototype.parseRouter = function(name, urlObj) {
  this[name] = {};
  Object.keys(urlObj).forEach(apiname => {
    let url = urlObj[apiname];
    let config = {};
    if (typeof url === "object") {
      url = url["url"];
      config = urlObj[apiname];
    }
    // console.log(url, config);
    this[name][apiname] = this.sendMessage.bind(this, name, apiname, url, config);
    //阻止重复提交
    this[name][apiname].status = "ready";
  });
};
/**
 * 发送请求
 * @param moduleName  模块名称
 * @param apiname 接口名称
 * @param url 接口请求地址
 * @param config 其他配置
 */
daoServer.prototype.sendMessage = function(moduleName, apiname, url, config = {}, ...params) {
  let self = this;
  if (typeof self.dataset === "object") {
    config = {
      ...config,
      ...self.dataset
    };
    //解决自定义接口方法参数
    if (typeof params[0] === "object" && params[0] !== null) {
      config = {
        ...config,
        ...params[0]
      };
    }
  }
  const { type = "get", data = {}, bindName = apiname, config: conf = null } = config;
  //具有可扩展性
  //非数据处理模块
  const before = function(res) {
    self[moduleName][apiname].status = "ready";
    return res;
  };
  //数据处理模块
  const defaultFn = function(res) {
    self.nowhandle[bindName] = res.data;
  };
  const success = config.success || defaultFn;
  //数据异常处理模块
  const defaultError = function(err) {
    console.log(err);
  };
  const error = config.error || defaultError;

  // 解决url存在 {id} 动态参数问题
  // console.log(url, data);
  url = url.replace(/{(\w+)}/g, function(k) {
    const pars = k.slice(1, -1);
    return data[pars] || pars;
  });
  if (self[moduleName][apiname].status === "ready") {
    // console.log(moduleName, apiname, url, data, config, self.dataset);
    // console.log(conf);
    if (type === "get" && conf?.headers) {
      data["headers"] = conf.headers;
    }
    // console.log(url, data, conf);
    self.server[type](url, data, conf)
      .then(before)
      .then(success)
      .catch(error);
    self[moduleName][apiname].status = "waiting";
  }
  return self;
};
/**
 * 请求方法后自动保存数据到data
 * @param valueObj
 * @returns {*}
 */
daoServer.prototype.v = function(valueObj) {
  this.nowhandle = valueObj;
  return this;
};
/**
 * 设置自定义参数
 * @param data
 * @returns {daoServer}
 */
daoServer.prototype.datasets = function(data) {
  this.dataset = data;
  return this;
};

export default new daoServer();
