<template>
  <div>
    <input type="text" name="username" v-model="userInfo.username" />
    <br />
    <input type="text" name="password" v-model="userInfo.password" />
    <br />
    <button @click="userLogin">提交</button>
    <br />
    {{ userInfo.username }}
  </div>
</template>

<script>
export default {
  name: "index",
  data: function() {
    return {
      userInfo: {
        username: "",
        password: ""
      }
    };
  },
  methods: {
    userLogin() {
      this.$store
        .dispatch("userLogin", this.userInfo)
        .then(res => {
          console.log(res);
          // 登陆成功跳转主页
          this.$router.push("/home");
        })
        .catch(error => {
          console.log(error);
        });
    }
  }
};
</script>

<style scoped></style>
