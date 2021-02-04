<template>
  <fragment>
    <Header class="layout-header-bar"><Breadcrumbs /></Header>
    <Content :style="{ margin: '20px', background: '#fff', minHeight: '220px' }">
      <transition name="fade-transform" mode="out-in">
        <keep-alive :include="cachedViews">
          <router-view :key="key" />
        </keep-alive>
      </transition>
    </Content>
  </fragment>
</template>

<script>
import Breadcrumbs from "@/layout/components/Breadcrumbs";
export default {
  name: "DAppMain",
  computed: {
    cachedViews() {
      return this.$store.state.tagsView.cachedViews;
    },
    key() {
      return this.$route.path;
    }
  },
  components: {
    Breadcrumbs
  }
};
</script>

<style scoped>
.layout-header-bar {
  background: #fff;
  box-shadow: 0 3px 3px rgba(0, 0, 0, 0.1);
}
</style>
