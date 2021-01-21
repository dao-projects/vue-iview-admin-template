module.exports = app => {
  app.get("/api/login", function(req, res) {
    res.json({ code: 200, data: "/get/api/login", mes: "请求成功！" });
  });
  app.post("/api/login", function(req, res) {
    res.json({
      code: 200,
      data: {
        token: "xxxxxxxxxxxxxxxxxxx"
      },
      mes: "请求成功！"
    });
  });
  app.post("/api/user/info", function(req, res) {
    res.json({
      code: 200,
      data: {
        name: "张先生",
        role: ["admin", "super_editor"]
      },
      mes: "请求成功！"
    });
  });
  app.post("/api/logout", function(req, res) {
    res.json({ code: 200, data: "/api/logout", mes: "请求成功！" });
  });
};
