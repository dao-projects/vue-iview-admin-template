module.exports = {
  disableHostCheck: true,
  open: true,
  host: "0.0.0.0",
  port: 6789,
  watchOptions: { poll: 1000 },
  proxy: {
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
