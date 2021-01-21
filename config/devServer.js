const VUE_APP_BASE_API = process.env.VUE_APP_BASE_API;
module.exports = {
  disableHostCheck: true,
  open: true,
  host: "0.0.0.0",
  port: 6789,
  watchOptions: { poll: 1000 },
  // Mock数据
  before: require("../mock/mock-server.js"),
  proxy: {
    [VUE_APP_BASE_API]: {
      target: "http://localhost:6789",
      changeOrigin: true,
      pathRewrite: { ["^" + VUE_APP_BASE_API]: "/" }
    },
    "/new": {
      target: "https://swxyy.guizhou.chinatax.gov.cn",
      changeOrigin: true,
      pathRewrite: { "^/api": "/" }
    },
    "/dev": {
      target: "http://192.168.3.6:8081",
      // ws: true,
      changeOrigin: true,
      pathRewrite: { "^/dev": "/" }
    }
  }
};
