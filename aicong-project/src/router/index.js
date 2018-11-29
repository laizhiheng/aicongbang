import Vue from 'vue'
import Router from 'vue-router'
import Platform from '../views/platform.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'platform',
      component: Platform
    }
  ]
})
