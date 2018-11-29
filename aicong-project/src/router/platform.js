import Vue from 'vue'
import Router from 'vue-router'
import Users from '../components/users.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/platform',
      name: 'platform',
      component: () => import('../views/platform/info.vue'),
      children:[{
        path:'platformList',
        name:'platformList',
        component: () => import('../components/platform/platformList/app.vue')
      },{
        path: '/users',
      name: 'users',
      component: Users
      }]
    }
  ],

})
