<template>
  <Menu active-name="1-2" theme="dark" width="auto" :open-names="['1']" :class="menuitemClasses">
    <fragment v-for="(item, i) in menus" :key="i">
      <Submenu v-if="!item.hidden" :name="i + 1">
        <template slot="title">
          <router-link :to="item.path">
            <Icon :type="item.meta.icon"></Icon>
            {{ item.meta.title }}
          </router-link>
        </template>
        <MenuItem v-for="(ic, j) in item.children" :name="i + 1 + '-' + (j + 1)" :key="j">
          <router-link :to="item.path === '/' ? '/' + ic.path : item.path + '/' + ic.path">
            {{ ic.meta.title }}
          </router-link>
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
    };
  },
  computed: {
    ...mapGetters({ menus: "permission_routes" }),
    menuitemClasses: function() {
      return ["menu-item", this.isCollapsed ? "collapsed-menu" : ""];
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
