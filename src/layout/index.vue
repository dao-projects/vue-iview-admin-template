<template>
  <div class="layout">
    <Layout>
      <Sider breakpoint="md" collapsible :collapsed-width="78" v-model="isCollapsed">
        <DSider />
      </Sider>
      <Layout>
        <DAppMain />
      </Layout>
    </Layout>
  </div>
</template>

<script>
import DSider from "@/layout/components/DSider";
import DAppMain from "@/layout/components/DAppMain";
export default {
  name: "Home",
  data() {
    return {
      isCollapsed: false
    };
  },
  computed: {
    menuitemClasses: function() {
      return ["menu-item", this.isCollapsed ? "collapsed-menu" : ""];
    }
  },
  components: {
    DSider,
    DAppMain
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
</style>
