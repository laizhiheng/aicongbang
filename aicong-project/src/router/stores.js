import Vue from 'vue'
import Router from 'vue-router'
import Platform from '../components/platform.vue'
import Users from '../components/users.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'platform',
      component: Platform
    },
    {
      path: '/users',
      name: 'users',
      component: Users
    }
  ],

})