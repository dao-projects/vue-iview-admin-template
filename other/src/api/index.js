const modulesFiles = require.context("./modules", true, /\.js$/);
const modules = modulesFiles.keys().reduce((modules, modulePath) => {
  const moduleName = modulePath.replace(/^\.\/(.*)\.\w+$/, "$1");
  const value = modulesFiles(modulePath);
  modules[moduleName] = value.default || value;
  return modules;
}, {});
export default modules;
// import * as user from "./modules/user";
// console.log(user);
// console.log(modules);

// /**
//  * 使用帮助
//  * 1. 导入api   import { default as api } from "@/api";
//  * 2. 如果需要自动绑定到data   可以用以下代码初始化：api.v(this); （注意：自定义接收success或回调信息此接口不会自动绑定）
//  * 3. 一般使用实例： api.user.list()  即获取user模块下的list接口 （如设置了：api.v(this) ，页面组件即可直接打印list）
//  * 4. 参数传递: api.user.list({type,data,config,bindName,success,error})  (注意：get方法的内容也是在 data.params)
//  * 5. 支持url动态参数： "/api/news/list/{lx}"  只需动态传入api.user.list({data:{lx:123}}) 即可生成  "/api/news/list/123"
//  * 6. 如何添加headers: api.user.list({config:{headers: { "x-Token": "xt0001"}})
//  * 7. 注意：官方文档添加headers建议
//  *    axios.post("/api/user",{'id':123},{headers: {'token':'xt0001'}}).then((res)=>{console.log(res)})
//  *    axios.get("/api/user",{params:{'id':123},headers: {'token':'xt0001'}}).then((res)=>{console.log(res)})
//
//  */
// import daoServer from "../request/getRequest";
// // import { default as news } from "./news";
// // import { default as aa } from "./aa";
// // import { default as user } from "./user";
// // daoServer.parseRouter("news", news);
// // daoServer.parseRouter("aa", aa);
// // daoServer.parseRouter("user", user);
// // export default daoServer;
//
// const modulesFiles = require.context("./modules", true, /\.js$/);
// const modules = modulesFiles.keys().reduce((modules, modulePath) => {
//   const moduleName = modulePath.replace(/^\.\/(.*)\.\w+$/, "$1");
//   const value = modulesFiles(modulePath);
//   modules[moduleName] = value.default;
//   return modules;
// }, {});
// Object.keys(modules).forEach(apiname => {
//   daoServer.parseRouter("user", modules[apiname]);
// });
// export default daoServer;
//
// // ---------------------------
// // import api from "../../api";
// // api.news.list();
// //自动绑定数据到data下的list => data:{list:{}}
// // mounted: () => {
// //   // api.news.list();
// //   // api.v(this)
// // },
//
// // import { default as api } from "../api";
// // api.v(this).news.list();
// // api.news.list();
// // api.v(this);
//
// // api.datasets({ data: { params: { id: 123 } } }).news.list().v(this);
// // api.datasets({ data: { id: 123 } }).news.listAdd();
//
// // api.v(this);
// // api.news.list();
// // api.news.v(this);
// // api
// //   .datasets({
// //     data: { id: 123 },
// //     config: { headers: { "x-Token": "sdfsdfsf" } },
// //     success: res => {
// //       console.log(res);
// //     }
// //   })
// //   .news.listAdd({
// //     data: { id: 456 },
// //     type: "post",
// //     config: {
// //       headers: { "x-Token": "1111111" }
// //     }
// //   });
