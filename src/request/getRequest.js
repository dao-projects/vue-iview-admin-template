import server from "./server";

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
