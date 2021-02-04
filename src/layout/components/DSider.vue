<template>
  <Menu
    ref="side_menu"
    :active-name="active"
    theme="dark"
    width="auto"
    :open-names="[open]"
    :class="menuitemClasses"
    :accordion="true"
    @on-select="OnSelect"
    @on-open-change="OpenChange"
  >
    <fragment v-for="(item, i) in menus" :key="i">
      <Submenu v-if="!item.hidden" :name="i + 1">
        <template slot="title">
          <router-link :to="item.path">
            <Icon :type="item.meta.icon"></Icon>
            {{ item.meta.title }}
          </router-link>
        </template>
        <MenuItem
          v-for="(ic, j) in item.children"
          :name="i + 1 + '-' + (j + 1)"
          :key="j"
          class="menu-list"
          :to="item.path === '/' ? '/' + ic.path : item.path + '/' + ic.path"
        >
          {{ ic.meta.title }}
        </MenuItem>
      </Submenu>
    </fragment>
  </Menu>
  <!--        <div slot="trigger"></div>-->
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "DSider",
  data() {
    return {
      isCollapsed: false
      // active: "1-1"
    };
  },
  created() {
    let pathArr = this.$route.path;
    const routeArr = this.$store.getters.routeArr;
    this.$store.dispatch("setting/set_route_active", { pathArr, routeArr });
    // pathArr = pathArr.length && pathArr.shift();
    // console.log(pathArr);
  },
  methods: {
    OnSelect(e) {
      // this.$store.dispatch("setting/set_active", e);
      this.$store.dispatch("setting/set_active", { active: e, open: e[0] });
    },
    OpenChange(e) {
      e[0] && this.$store.dispatch("setting/set_active", { active: `${e[0]}-1`, open: e[0] });
    }
  },
  computed: {
    ...mapGetters({ menus: "permission_routes" }),
    ...mapGetters({ active: "setting/active" }),
    ...mapGetters({ open: "setting/open" }),
    menuitemClasses: function() {
      return ["menu-item", this.isCollapsed ? "collapsed-menu" : ""];
    }
  },
  watch: {
    // "$route.path": function(nval, oval) {
    //   console.log("$route", nval, oval);
    // },
    open() {
      this.$nextTick(() => {
        this.$refs.side_menu.updateOpened();
        this.$refs.side_menu.updateActiveName();
      });
    }
  }
};
</script>

<style scoped>
.menu-item span {
  display: inline-block;
  overflow: hidden;
  width: 69px;
  text-overflow: ellipsis;
  white-space: nowrap;
  vertical-align: bottom;
  transition: width 0.2s ease 0.2s;
}

.menu-item i {
  transform: translateX(0px);
  transition: font-size 0.2s ease, transform 0.2s ease;
  vertical-align: middle;
  font-size: 16px;
}
.menu-list {
  /*padding: 0;*/
}
.menu-link {
  /*padding: 10px 0;*/
  /*display: block;*/
}

.collapsed-menu span {
  width: 0px;
  transition: width 0.2s ease;
}

.collapsed-menu i {
  transform: translateX(5px);
  transition: font-size 0.2s ease 0.2s, transform 0.2s ease 0.2s;
  vertical-align: middle;
  font-size: 22px;
}
</style>
