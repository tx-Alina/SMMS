import Vue from 'vue'
import Router from 'vue-router'
import Index from './pages/Index.vue'
import Login from './pages/Login.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: Login
    },
    {
      path: '/main',
      name: 'main',
      
      component: () => import('./pages/Index.vue')
    }
  ]
})
