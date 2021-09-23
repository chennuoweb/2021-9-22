<template>
  <div id="app">
    <!-- 顶部导航容器 -->
    <HeaderTopBar/>
    <router-view></router-view>
    <FooterBar/>
  </div>
</template>

<script>
import HeaderTopBar from './components/HeaderTopBar/HeaderTopBar.vue';
import Home from "./pages/Home/Home.vue";
import FooterBar from './components/FooterBar/FooterBar.vue';
export default {
  name: "App",
  components: {
    HeaderTopBar,
    Home,
    FooterBar,
  },
};
</script>

<style lang='less'>
@import "./common/less/mixins.less";
#app {
  background-color: rgb(244, 244, 244);
}
</style>
