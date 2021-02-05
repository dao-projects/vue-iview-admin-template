const path = require("path");
const resolve = dir => path.join(__dirname, dir);
const terserPlugin = require("terser-webpack-plugin");
const CompressionPlugin = require("compression-webpack-plugin");
const cdnDependencies = require("./cdn");
// CDN 相关
const isCDN = process.env.VUE_APP_CDN === "ON";
// 打包模块过滤配置
// { name: "vue-router",library: "VueRouter"} （例子：外面使用import VueRouter from "vue-router";）
// const externals = {vue: "Vue",vuex: "Vuex",axios: "axios","vue-router": "VueRouter","view-design": "iview"};
const externals = {};
cdnDependencies.forEach(pkg => {
  externals[pkg.name] = pkg.library;
});
// gzip 相关
const isGZIP = process.env.VUE_APP_GZIP === "ON";

//配置别名
const alias = {
  assets: resolve("src/assets"),
  styles: resolve("src/styles")
};

module.exports = config => {
  config.resolve.modules = ["node_modules"];
  if (isCDN) {
    config.externals = externals;
  }
  config.optimization = {
    minimizer: [
      new terserPlugin({
        terserOptions: {
          ecma: undefined,
          warnings: false,
          parse: {},
          compress: {
            warnings: false,
            drop_console: true,
            // drop_debugger: true,
            drop_debugger: false,
            pure_funcs: ["console.log"] //移除console.log
          }
        }
      })
    ]
  };
  if (isGZIP) {
    return {
      plugins: [
        new CompressionPlugin({
          algorithm: "gzip",
          test: /\.(js|css)$/, // 匹配文件名
          threshold: 10240, // 对超过10k的数据压缩
          deleteOriginalAssets: false, // 不删除源文件
          minRatio: 0.8 // 压缩比
        })
      ]
    };
  }
  config.resolve.extensions.push(".less");
  config.resolve.alias = { ...config.resolve.alias, ...alias };
};
