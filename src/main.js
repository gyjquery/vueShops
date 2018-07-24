// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import './common/css/reset.css'
import store from '../src/store'
import '../src/mock/mockServer'
import './filters'
import VueLazyload from 'vue-lazyload'
import loading from './common/images/1.jpg'
 Vue.use(VueLazyload, {
  loading
})
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
  router,
  store
})
