const VUE_APP_PUBLIC_PATH = process.env.VUE_APP_PUBLIC_PATH;
module.exports = {
  disableHostCheck: true,
  open: true,
  host: "0.0.0.0",
  port: 6789,
  watchOptions: { poll: 1000 },
  // Mock数据
  before: require("../mock/mock-server.js"),
  proxy: {
    // "/": {
    //   target: process.env.VUE_APP_BASE_URL,
    //   changeOrigin: true
    // },
    [VUE_APP_PUBLIC_PATH]: {
      target: "http://localhost:6789",
      changeOrigin: true,
      pathRewrite: { ["^" + VUE_APP_PUBLIC_PATH]: "/" }
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
