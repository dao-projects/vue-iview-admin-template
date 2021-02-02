<template>
  <div class="layout">
    <Layout>
      <Sider breakpoint="md" collapsible :collapsed-width="78" v-model="isCollapsed">
        <Menu active-name="1-2" theme="dark" width="auto" :open-names="['1']" :class="menuitemClasses">
          <Submenu v-for="(item, i) in menus" :name="i + 1" :key="i">
            <template slot="title">
              <Icon type="ios-navigate"></Icon>
              {{ item.title || item.name }}
            </template>
            <MenuItem v-for="(ic, j) in item.children" :name="i + '-' + (j + 1)" :key="j">
              {{ ic.name || "cs" }}
            </MenuItem>
          </Submenu>
          <!--          <Submenu name="1">-->
          <!--            <template slot="title">-->
          <!--              <Icon type="ios-navigate"></Icon>-->
          <!--              Item 1-->
          <!--            </template>-->
          <!--            <MenuItem name="1-1">Option 1</MenuItem>-->
          <!--            <MenuItem name="1-2">Option 2</MenuItem>-->
          <!--            <MenuItem name="1-3">Option 3</MenuItem>-->
          <!--          </Submenu>-->
          <!--          <Submenu name="2">-->
          <!--            <template slot="title">-->
          <!--              <Icon type="ios-keypad"></Icon>-->
          <!--              Item 2-->
          <!--            </template>-->
          <!--            <MenuItem name="2-1">Option 1</MenuItem>-->
          <!--            <MenuItem name="2-2">Option 2</MenuItem>-->
          <!--          </Submenu>-->
          <!--          <Submenu name="3">-->
          <!--            <template slot="title">-->
          <!--              <Icon type="ios-analytics"></Icon>-->
          <!--              Item 3-->
          <!--            </template>-->
          <!--            <MenuItem name="3-1">Option 1</MenuItem>-->
          <!--            <MenuItem name="3-2">Option 2</MenuItem>-->
          <!--          </Submenu>-->
        </Menu>
        <div slot="trigger"></div>
      </Sider>
      <Layout>
        <Header class="layout-header-bar">嘻嘻嘻</Header>
        <Content :style="{ margin: '20px', background: '#fff', minHeight: '220px' }">
          Content
        </Content>
      </Layout>
    </Layout>
  </div>
</template>

<script>
// import HelloWorld from "@/components/HelloWorld.vue";
// import Header from "@/components/Header.vue";
// import { default as api } from "../api";

export default {
  name: "Home",
  data() {
    return {
      isCollapsed: false,
      menus: []
    };
  },
  created() {
    this.menus = this.$store.state.permission.routes;
    console.log(this.$store.state, this.menus);
  },
  computed: {
    menuitemClasses: function() {
      return ["menu-item", this.isCollapsed ? "collapsed-menu" : ""];
    }
  }
};
</script>
<style scoped>
.layout {
  position: relative;
  overflow: hidden;
}
.layout-header-bar {
  background: #fff;
  box-shadow: 0 3px 3px rgba(0, 0, 0, 0.1);
}
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
