const cdnDependencies = require("./cdn");
// CDN 相关
const isCDN = process.env.VUE_APP_CDN == "ON";
const externals = {};
cdnDependencies.forEach(pkg => {
  externals[pkg.name] = pkg.library;
});
const cdn = {
  css: cdnDependencies.map(e => e.css).filter(e => e),
  js: cdnDependencies.map(e => e.js).filter(e => e)
};

module.exports = config => {
  config.plugin("html").tap(args => {
    args[0].title = process.env.VUE_APP_TITLE;
    if (isCDN) {
      args[0].cdn = cdn;
    }
    args[0].debugTool = process.env.VUE_APP_DEBUG_TOOL;
    // args[0].appType = process.env.VUE_APP_TYPE;
    return args;
  });
};
