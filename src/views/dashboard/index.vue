<template>
  <div>dashboard == {{ aa }}===={{ qq }}</div>
</template>

<script>
export default {
  name: "dashboard",
  data() {
    return {
      aa: "",
      qq: ""
    };
  },
  created() {
    this.aa = this.$dayjs().format("YYYY-MM-DD");
    this.qq = this.$qs.stringify({ a: "c" });
    // console.log(this.$dayjs().format("YYYY-MM-DD"));
    console.log(this.$dayjs("2018 三月 15", "YYYY MMMM DD", "zh-cn").format("YYYY-MM-DD"));
  }
};
</script>

<style scoped></style>
