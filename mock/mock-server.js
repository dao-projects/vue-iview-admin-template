module.exports = app => {
  app.post("/api/user/login", function(req, res) {
    res.json({ code: 200, data: { token: `uid-${new Date()}` }, mes: "请求成功！" });
  });
  app.get("/api/user/info", function(req, res) {
    res.json({ code: 200, data: { name: "张先生", roles: ["admin", "super_editor"] }, mes: "请求成功！" });
  });
  // app.post("/api/user/login", function(req, res) {
  //   res.json({ code: 200, data: "/api/logout", mes: "请求成功！" });
  // });
  app.post("/api/user/logout", function(req, res) {
    res.json({ code: 200, data: "/api/logout", mes: "请求成功！" });
  });
  app.get("/api/news/list", function(req, res) {
    res.json({ code: 200, data: "/api/news/list", mes: "请求成功！" });
  });
  app.post("/api/news/list/add", function(req, res) {
    res.json({ code: 200, data: "/api/news/list/add", mes: "请求成功！" });
  });
};
