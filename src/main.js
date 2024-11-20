import Vue from 'vue';
import ElementUI from 'element-ui';
import App from './App.vue';
import router from './router';
import store from './store';
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.css';

Vue.use(ElementUI);
Vue.use(Loading);

import VueSelect from 'vue-cool-select';

Vue.use(VueSelect, {
  theme: 'material-design' // 'bootstrap" or 'material-design'
});

Vue.config.productionTip = false;

import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style/_custom.scss'; // 客製化 BS、vue-cool-select

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
