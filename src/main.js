import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './store'
import './utils/globalFun' // 全局函数
import './utils/globalFilters' // 全局过滤器

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(ElementUI);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
