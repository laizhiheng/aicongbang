import Vue from 'vue'
import Router from 'vue-router'
import Store from '../views/stores/app.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/platform',
      name: 'platform',
      component: () => import('../views/platform/info.vue'),
      children: [{
        path: 'platformList',
        name: 'platformList',
        component: () => import('../components/platform/platformList/app.vue')
      }, {
        path: 'platformUsers',
        name: 'platformUsers',
        component: () => import('../components/platform/platformUsers/users.vue')
      }]
    }, {
      path: '/store',
      name: 'store',
      component: Store
    }]

})
