import Vue from 'vue'
import Router from 'vue-router'
import Header from '../components/header.vue'
import Type from '../components/type.vue'
import Buycar from '../components/buycar.vue'
import Mine from '../components/mine.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  // hashbang: false, history: true,
  routes: [
    {
      path: '/home',
      name: 'Home',
      component: Header
    },
    {
      path: '/type',
      name: 'Type',
      component: Type
    },
    {
      path: '/buycar',
      name: 'Buycar',
      component: Buycar
    },
    {
      path: '/mine',
      name: 'Mine',
      component: Mine
    },
    {
      path: '*',
      redirect: '/home'
    }
  ]
})
