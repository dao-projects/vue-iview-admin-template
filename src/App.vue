<template>
  <div id="app">
    <!--    <div id="nav">-->
    <!--      <router-link to="/">Home</router-link>-->
    <!--      |-->
    <!--      <router-link to="/about">About</router-link>-->
    <!--      <Button>Default</Button>-->
    <!--      <Button type="primary">Primary</Button>-->
    <!--      <Button type="dashed">Dashed</Button>-->
    <!--      <Button type="text">Text</Button>-->
    <!--      <br /><br />-->
    <!--      <Button type="info">Info</Button>-->
    <!--      <Button type="success">Success</Button>-->
    <!--      <Button type="warning">Warning</Button>-->
    <!--      <Button type="error">Error</Button>-->
    <!--    </div>-->
    <keep-alive>
      <router-view v-if="$route.meta.keepAlive"></router-view>
    </keep-alive>
    <router-view v-if="!$route.meta.keepAlive"></router-view>
  </div>
</template>

<style lang="less">
html,
body,
#app,
.layout,
.ivu-layout {
  height: 100%;
  padding: 0;
  margin: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  //text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
