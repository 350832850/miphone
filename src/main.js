import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
// import ElementUI from 'element-ui'
// import 'element-ui/lib/theme-default/index.css'

import header from './component/header.vue'

Vue.use(VueRouter);

const router = new VueRouter({
	routes:[
		{path:'/home',component:header},
        // {path:'/type',component:},
        // {path:'/buycar',component:},
        // {path:'/my',component:},
        {path:'*',redirect:'/home'}
	]
})

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})

