// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import '../static/js/common.js'
import '../static/css/swiper-3.4.2.min.css'
import '../static/css/base.css'
import '../static/css/iconfont.css'

// import global from '../static/js/global'
// Vue.prototype.GLOBAL = global

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: {App}
})

