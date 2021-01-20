const path = require("path");
const resolve = dir => path.join(__dirname, dir);
//判断是否是生产环境
const isPro = process.env.NODE_ENV === "production";
// 打包模块过滤配置
const externals = {
  vue: "Vue",
  vuex: "Vuex",
  axios: "axios",
  "vue-router": "VueRouter",
  "view-design": "iview"
};
//配置别名
const alias = {
  assets: resolve("src/assets"),
  styles: resolve("src/styles")
};

module.exports = config => {
  // console.log(process.env.NODE_ENV, ":", config);
  if (isPro) {
    // 不会被打包的库
    Object.assign(config, {
      externals: externals
    });
    // 为生产环境修改配置...
    // console.log("production:", config);
  } else {
    // 为开发环境修改配置...
    // console.log("development:", config);
  }
  Object.assign(config, {
    resolve: {
      ...config.resolve,
      extensions: [...config.resolve.extensions, ".less"],
      alias: {
        ...config.resolve.alias,
        ...alias
      }
    }
  });
  // config.resolve.alias
  //   .set("assets", resolve("src/assets"))
  //   .set("styles", resolve("src/styles"))
  //   .set("components", resolve("src/components"))
  //   .set("views", resolve("src/views"))
  //   .set("utils", resolve("src/utils"));
  //别名配置
  // Object.assign(config, {
  //   resolve: {
  //     extensions: [".js", ".vue", ".json", ".less"],
  //     alias: {
  //       vue$: "vue/dist/vue.js",
  //       // "@": resolve("src"),
  //       img: resolve("src/assets/images"),
  //       font: resolve("src/assets/font"),
  //       comps: resolve("src/components"),
  //       assets: resolve("src/assets"),
  //       styles: resolve("src/styles"),
  //       utils: resolve("src/utils"),
  //       views: resolve("src/views")
  //     }
  //   }
  // });
};
