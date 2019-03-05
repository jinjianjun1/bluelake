import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component:()=> import('./views/Home.vue')
    },
    {
      path: '/getStar',
      name: 'getStar',
      component: () => import( './views/getStar.vue')
    },
    {
      path: '/store',
      name: 'store',
      component: () => import( './views/store.vue')
    },
    {
      path: '/my',
      name: 'my',
      component: () => import( './views/my.vue')
    }
  ]
})
