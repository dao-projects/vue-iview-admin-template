<template>
  <Breadcrumb :style="{ margin: '2px 0' }">
    <BreadcrumbItem to="/dashboard" v-if="!!crum[0].path"><span @click="toActive">Dashboard</span></BreadcrumbItem>
    <BreadcrumbItem>{{ crum[0].meta.title }}</BreadcrumbItem>
    <BreadcrumbItem>{{ crum[1].meta.title }}</BreadcrumbItem>
  </Breadcrumb>
</template>

<script>
// import { mapGetters } from "vuex";
export default {
  name: "Breadcrumbs",
  data() {
    return {
      crum: []
    };
  },
  created() {
    this.crum = this.$route.matched;
    // console.log(this.$route.matched);
  },
  // computed: {
  //   ...mapGetters({ crum: "setting/pathArr" })// crum.child.meta.title
  // },
  methods: {
    toActive() {
      this.$store.dispatch("setting/set_active", {
        active: "1-1",
        open: 1
      });
    }
  },
  watch: {
    "$route.matched": function(crum) {
      this.crum = crum;
      // console.log("xxxxx", v, this.$route.matched);
    }
  }
};
</script>

<style scoped></style>
