<template>
  <div id="app">
    <!-- 顶部导航容器 -->
    <div class="top-bar-wrapper">
      <div class="top-bar w">
        <div class="header-logo">
          <a href="#"><img src="" alt=""></a>
        </div>
      </div>
    </div>
    <router-view></router-view>
    <div></div>
  </div>
</template>

<script>
import Home from "./pages/Home/Home.vue";
export default {
  name: "App",
  components: {
    Home,
  },
};
</script>

<style lang='less'>
@import "./common/less/mixins.less";
#app {
  .top-bar-wrapper {
    height: 100px;
    background-color: #bfa;
  }
}
</style>
