<template>
  <div id="app">
    <!-- 顶部导航容器 -->
    <HeaderTopBar class="header-style"/>
    <router-view class="home-style"></router-view>
    <FooterBar class="footer-style"/>
  </div>
</template>

<script>
import HeaderTopBar from './components/HeaderTopBar/HeaderTopBar.vue';
import Home from "./pages/Home/Home.vue";
import FooterBar from './components/FooterBar/FooterBar.vue';
import { mapActions } from 'vuex';
export default {
  name: "App",
  methods: {
    ...mapActions(['getNews']),
  },
  mounted() {
    this.getNews();
  },
  components: {
    HeaderTopBar,
    Home,
    FooterBar,
  },
};
</script>

<style lang='less'  rel="stylesheet/less" scope>
@import "./common/less/mixins.less";
#app {
  background-color: rgb(244, 244, 244);
  .header-style{
    position: absolute;
    z-index: 9999;
  }
  .home-style{
  }
}
</style>
