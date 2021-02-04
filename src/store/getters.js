/**
 * getter
 * @example
 *     import { mapGetters } from "vuex";
 *     computed: {
 *        ...mapGetters({ menus: "permission_routes" })
 *        ...mapGetters(["permission_routes"]),
 *        menus(){return this.$store.state.todos.filter(todo => todo.done.length)}
 *     }
 *     <fragment v-for="(item, i) in menus" :key="i"></fragment>
 *     <fragment v-for="(item, i) in permission_routes" :key="i"></fragment>
 */
const getters = {
  // sidebar: state => state.app.sidebar,
  // size: state => state.app.size,
  // device: state => state.app.device,
  visitedViews: state => state.tagsView.visitedViews,
  cachedViews: state => state.tagsView.cachedViews,
  // token: state => state.user.token,
  // avatar: state => state.user.avatar,
  // name: state => state.user.name,
  // introduction: state => state.user.introduction,
  // roles: state => state.user.roles,
  permission_routes: state => state.permission.addRoutes,
  routeArr: state => state.permission.addRoutes.filter(v => !v.auth && v)
  // errorLogs: state => state.errorLog.logs
};
export default getters;
