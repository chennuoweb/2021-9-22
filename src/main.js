import Vue from 'vue'
import App from './App.vue'
import router from './router/index';
import store from './store';

import less from 'less';
import '../static/css/reset.css';
import '../static/cssfont/css/all.min.css';
Vue.use(less);
Vue.config.productionTip = false

new Vue({
  el: '#app',
  render: h => h(App),
  router,
  store,
});
