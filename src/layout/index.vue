<template>
  <div class="layout">
    <Layout>
      <Header>
        <Menu mode="horizontal" theme="dark" active-name="1">
          <div class="layout-logo">dao-projects</div>
          <div class="layout-nav">
            <MenuItem name="1">
              <Icon type="ios-navigate"></Icon>
              Item 1
            </MenuItem>
            <MenuItem name="2">
              <Icon type="ios-keypad"></Icon>
              Item 2
            </MenuItem>
            <MenuItem name="3">
              <Icon type="ios-analytics"></Icon>
              Item 3
            </MenuItem>
            <MenuItem name="4">
              <Icon type="ios-paper"></Icon>
              Item 4
            </MenuItem>
          </div>
        </Menu>
      </Header>
      <Layout>
        <Sider hide-trigger :style="{ background: '#fff' }">
          <Menu active-name="1-2" theme="light" width="auto" :open-names="['1']">
            <Submenu name="1">
              <template slot="title">
                <Icon type="ios-navigate"></Icon>
                Item 1
              </template>
              <MenuItem name="1-1">Option 1</MenuItem>
              <MenuItem name="1-2">Option 2</MenuItem>
              <MenuItem name="1-3">Option 3</MenuItem>
            </Submenu>
            <Submenu name="2">
              <template slot="title">
                <Icon type="ios-keypad"></Icon>
                Item 2
              </template>
              <MenuItem name="2-1">Option 1</MenuItem>
              <MenuItem name="2-2">Option 2</MenuItem>
            </Submenu>
            <Submenu name="3">
              <template slot="title">
                <Icon type="ios-analytics"></Icon>
                Item 3
              </template>
              <MenuItem name="3-1">Option 1</MenuItem>
              <MenuItem name="3-2">Option 2</MenuItem>
            </Submenu>
          </Menu>
        </Sider>
        <Layout :style="{ padding: '0 24px 24px' }">
          <Breadcrumbs />
          <Content :style="{ padding: '24px', minHeight: '280px', background: '#fff' }">
            <app-main />
          </Content>
        </Layout>
      </Layout>
    </Layout>
  </div>
</template>

<script>
import { AppMain, Breadcrumbs } from "./components";
import { mapState } from "vuex";
export default {
  name: "layout",
  components: {
    AppMain,
    Breadcrumbs
  },
  data() {
    return {
      isCollapsed: false
    };
  },
  computed: {
    ...mapState({
      // sidebar: state => state.app.sidebar,
      // device: state => state.app.device,
      // showSettings: state => state.settings.showSettings,
      // needTagsView: state => state.settings.tagsView
      // fixedHeader: state => state.settings.fixedHeader
    })
    // rotateIcon() {
    //   return ["menu-icon", this.isCollapsed ? "rotate-icon" : ""];
    // },
    // menuitemClasses() {
    //   return ["menu-item", this.isCollapsed ? "collapsed-menu" : ""];
    // }
  },
  methods: {
    // collapsedSider() {
    //   this.$refs.side1.toggleCollapse();
    // }
  }
};
</script>
<style scoped>
.layout {
  position: relative;
  overflow: hidden;
}
.layout-logo {
  width: 100px;
  height: 30px;
  line-height: 30px;
  text-align: center;
  color: #fff;
  background: #000000;
  border-radius: 3px;
  float: left;
  position: relative;
  top: 15px;
  left: 20px;
}
.layout-nav {
  width: 420px;
  margin: 0 auto;
  margin-right: 20px;
}
</style>
