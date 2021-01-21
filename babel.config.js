module.exports = {
  presets: [
    "@vue/cli-plugin-babel/preset",
    // Vue CLI 项目会使用 @vue/babel-preset-app，内置转译插件，不需要单独下载，在网上很常见的@vue/app就是它的简写，基于@babel/env；
    [
      "@babel/preset-env",
      {
        modules: false, // 对ES6的模块文件不做转化，以便使用tree shaking、sideEffects等
        useBuiltIns: "entry", // browserslist环境不支持的所有垫片都导入
        // https://babeljs.io/docs/en/babel-preset-env#usebuiltins
        // https://github.com/zloirock/core-js/blob/master/docs/2019-03-19-core-js-3-babel-and-a-look-into-the-future.md
        corejs: {
          version: 3, // 使用core-js@3
          proposals: true
        }
      }
    ]
    // [
    //   "@vue/app",
    //   {
    //     useBuiltIns: "entry",
    //     corejs: 3
    //   }
    // ],
    // 需在入口main.js文件导入
    // import 'core-js/stable';
    // import 'regenerator-runtime/runtime';
    // [
    //   "@vue/app",
    //   {
    //     polyfills: ["es.promise", "es.symbol","es.iterator"]
    //   }
    // ]
  ],
  plugins: ["@babel/plugin-transform-runtime"]
  // plugins: [
  //   [
  //     "import",
  //     {
  //       libraryName: "view-design",
  //       libraryDirectory: "src/components"
  //     }
  //   ]
  // ]
};

// core-js@3升级之后弃用了@babel/polyfill，以下是等价实现
// // babel.config.js
// presets: [
//   ["@babel/preset-env", {
//     useBuiltIns: "entry", // or "usage"
//     corejs: 3,
//   }]
// ]
// import "core-js/stable";
// import "regenerator-runtime/runtime";

// yarn add babel-loader@8 @babel/core @babel/preset-env -D
// yarn add core-js regenerator-runtime
// js代码里取代原先的import '@babel/polyfill'，做如下修改：
// import "core-js/stable"
// import "regenerator-runtime/runtime"
// {
//   "presets": [
//   [
//     "@babel/preset-env",
//     {
//       "modules": false, // 对ES6的模块文件不做转化，以便使用tree shaking、sideEffects等
//       "useBuiltIns": "entry", // browserslist环境不支持的所有垫片都导入
//       // https://babeljs.io/docs/en/babel-preset-env#usebuiltins
//       // https://github.com/zloirock/core-js/blob/master/docs/2019-03-19-core-js-3-babel-and-a-look-into-the-future.md
//       "corejs": {
//         "version": 3, // 使用core-js@3
//         "proposals": true,
//       }
//     }
//   ]
// ],
//   "plugins": []
// }
// 而@babel/plugin-transform-runtime，也随着core-js@3有更新：
// 安装依赖
// yarn add babel-loader@8 @babel/core @babel/preset-env @babel/plugin-transform-runtime -D
// yarn add @babel/runtime-corejs3
// {
//   "presets": [
//   [
//     "@babel/preset-env",
//     {
//       "modules": false,
//     }
//   ]
// ],
//   "plugins": [
//   [
//     "@babel/plugin-transform-runtime",
//     {
//       "corejs": {
//         "version": 3,
//         "proposals": true
//       },
//       "useESModules": true
//     }
//   ]
// ]
// }
