<template>
  <fragment>
    <Header class="layout-header-bar">嘻嘻嘻</Header>
    <Content :style="{ margin: '20px', background: '#fff', minHeight: '220px' }">
      <router-view></router-view>
    </Content>
  </fragment>
</template>

<script>
export default {
  name: "DAppMain",
  created() {
    console.log(this.$route);
  }
};
</script>

<style scoped>
.layout-header-bar {
  background: #fff;
  box-shadow: 0 3px 3px rgba(0, 0, 0, 0.1);
}
</style>
