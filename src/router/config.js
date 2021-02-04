/* Layout */
import Layout from "@/layout/index";

// 授权管理
const auth = {
  admin: ["admin", "manage", "user", "editor", "delete"], //超级管理员
  manage: ["manage", "user", "editor", "delete"], //平台管理员
  user: ["user", "editor", "delete"], //平台管理员（部分限制）
  delete: ["editor", "delete"], //增加删除修改权限
  editor: ["editor"] //编辑权限
};
export { Layout, auth };
