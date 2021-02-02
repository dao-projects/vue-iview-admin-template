<template>
  <div>
    <h2>Header</h2>
    <Button type="primary" @click="logout">退出</Button>
  </div>
</template>

<script>
export default {
  name: "Header",
  methods: {
    logout() {
      this.$store
        .dispatch("user/logout")
        .then(res => {
          console.log(res);
          if (res) {
            this.$router.push({ path: "/login" });
          } else {
            this.$Message.error("退出异常请稍后再试!");
          }
        })
        .catch(err => {
          console.log(err);
          this.$Message.error("退出异常请稍后再试!");
        });
    }
  }
};
</script>

<style scoped></style>
