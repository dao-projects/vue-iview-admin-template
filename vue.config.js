// 项目部署路径的BASE_URL
const VUE_APP_PUBLIC_PATH = process.env.VUE_APP_PUBLIC_PATH;
// console.log(VUE_APP_PUBLIC_PATH);

module.exports = {
  productionSourceMap: false,
  publicPath: VUE_APP_PUBLIC_PATH,
  //开发环境配置
  devServer: require("./config/devServer"),
  //webpack配置
  configureWebpack: require("./config/configureWebpack"),
  chainWebpack: require("./config/chainWebpack"),
  css: {
    loaderOptions: {
      // 向 CSS 相关的 loader 传递选项
      less: { javascriptEnabled: true }
    }
  }
};
