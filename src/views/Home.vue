<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" info="Hello Info!" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Home",
  created() {
    console.log(this);
    this.$Modal.error({
      title: "响应错误提示",
      content: "Error"
    });
  },
  components: {
    HelloWorld
  }
};
</script>
