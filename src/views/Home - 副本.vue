<template>
  <div class="home">
    <Header />
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" info="Hello Info!" />
    <div id="nav">
      <router-link to="/">Home</router-link>
      |
      <router-link to="/about">About</router-link>
      <Button>Default</Button>
      <Button type="primary">Primary</Button>
      <Button type="dashed">Dashed</Button>
      <Button type="text">Text</Button>
      <br /><br />
      <Button type="info">Info</Button>
      <Button type="success">Success</Button>
      <Button type="warning">Warning</Button>
      <Button type="error">Error</Button>
      <p>{{ list }}</p>
      <p>{{ listAdd }}</p>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import Header from "@/components/Header.vue";
import { default as api } from "../api";

export default {
  name: "Home",
  data: function() {
    return {
      list: undefined,
      listAdd: ""
    };
  },
  created() {
    console.log(this.$route);
    // this.$Modal.error({
    //   title: "响应错误提示",
    //   content: "Error"
    // });
  },
  mounted: function() {
    api.news.list();
    // api.v(this);
    // api.news.list({
    //   data: { params: { id: 333 } },
    //   config: {
    //     headers: { "x-Token": "1111111" }
    //   }
    // });
    // api.news.v(this);
    // api
    //   // .datasets({
    //   //   data: { id: 123 },
    //   //   config: {
    //   //     headers: { "x-Token": "sdfsdfsf" }
    //   //   },
    //   //   success: res => {
    //   //     console.log(res);
    //   //   }
    //   // })
    // api.news.listAdd({
    //   data: { id: 456 },
    //   type: "post",
    //   config: {
    //     headers: { "x-Token": "1111111" }
    //   },
    //   success: res => {
    //     console.log(res);
    //   }
    // });
    // api.v(this);
  },
  components: {
    HelloWorld,
    Header
  }
};
</script>
