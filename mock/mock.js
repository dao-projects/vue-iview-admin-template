const Mock = require("mockjs");

Mock.mock(/mock-api/, function(options) {
  const mockJsonFile = options.url.substring(7).replace("/", "_") + ".json";
  return Mock.mock(require("./data/" + mockJsonFile));
});

// app.get("/api/before", function(req, res) {
//   res.json({ code: 200, data: "/api/before", mes: "请求成功！" });
// });
// app.get("/api/index/banner", function(req, res) {
//   res.json({ code: 200, data: "/api/index/banner", mes: "请求成功！" });
// });
// app.get("/api/mock", function(req, res) {
//   res.json(
//     Mock.mock({
//       "code|200": 200,
//       data: { "string|1-10": "★" },
//       mes: "请求成功！"
//     })
//   );
// });
// app.get("/api/user", function(req, res) {
//   res.json(Mock.mock("/user", "get", require("./data/user.data")));
// });
// };
