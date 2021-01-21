// 项目的打包输出目录
const CDN_Path = process.env.VUE_APP_CDN_PATH || "";
//判断是否是生产环境
const isPro = process.env.NODE_ENV === "production";
//判断是否是开发环境
const isDev = process.env.NODE_ENV === "development";
// 配置cdn
const cdn = {
  // 开发环境
  dev: {
    css: [],
    js: []
  },
  // 生产环境
  build: {
    // 由于自定义了部分样式（可能存在重复样式）
    // css: ["dll/iview.css"],
    js: [
      `${CDN_Path}/vue.min.js`,
      `${CDN_Path}/vue-router.min.js`,
      `${CDN_Path}/vuex.min.js`,
      `${CDN_Path}/axios.min.js`,
      `${CDN_Path}/iview.min.js`
    ]
  }
};

// 添加样式自动化导入
// const addStyleResourceLoader = webpackConfig => {
//   const fileTypes = ["less", "sass", "scss"];
//   const cssModules = ["vue-modules", "vue", "normal-modules", "normal"];
//   const targetRules = fileTypes.reduce(
//     (rulesArr, fileType) =>
//       rulesArr.concat(cssModules.map(cssModule => webpackConfig.module.rule(fileType).oneOf(cssModule))),
//     []
//   );
//   targetRules.forEach(rule => {
//     rule
//       .use("style-resource")
//       .loader("style-resources-loader")
//       .options({
//         patterns: [path.resolve(__dirname, `./src/style/*.${rule.names[0]}`)]
//       });
//   });
// };

// 添加包分析工具
// const addBundleAnalyzer = webpackConfig => {
//   if (process.argv[2] === "build" && process.env.npm_config_report) {
//     const BundleAnalyzerPlugin = require("webpack-bundle-analyzer").BundleAnalyzerPlugin;
//     webpackConfig.plugin("webpack-bundle-analyzer").use(BundleAnalyzerPlugin);
//   }
// };

// 优化打包行为 —— 移除打包后的 js.map 文件和 console 输出
// 注意，只能移除默认形式的 console; 无法移除形如 let log = console.log; log(111) 这种形式的输出
// const upgradeMinimizer = webpackConfig => {
//   webpackConfig.optimization.minimizer("terser").tap(args => {
//     args[0].terserOptions.compress.drop_console = true;
//     args[0].terserOptions.compress.drop_debugger = true;
//     args[0].terserOptions.compress.pure_funcs = ["console.log"];
//     return args;
//   });
// };

module.exports = config => {
  config.plugin("html").tap(args => {
    if (isPro) {
      args[0].cdn = cdn.build;
    }
    if (isDev) {
      args[0].cdn = cdn.dev;
    }
    return args;
  });
  // addStyleResourceLoader(config);
  // addBundleAnalyzer(config);
  // upgradeMinimizer(config);
};
