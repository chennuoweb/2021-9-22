// 路由器对象模块
import Vue from 'vue';
import VueRouter from 'vue-router';

// 懒加载
const Home = () => import('../pages/Home/Home.vue');

Vue.use(VueRouter);

const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

export default new VueRouter({
  // 所有路由
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      component: Home
    }
  ]
})