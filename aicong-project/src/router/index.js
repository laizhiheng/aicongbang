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
      children: [{
          path: 'platformList',
          name: 'platformList',
          component: () => import('../components/platform/platformList/app.vue')
        }, {
          path: 'platformUsers',
          name: 'platformUsers',
          component: () => import('../components/platform/platformUsers/users.vue')
        }, {
          path: 'storesUsers',
          name: 'storesUsers',
          component: () => import('../components/platform/storesUsers/users.vue')
        }, {
          path: 'petMasterList',
          name: 'petMasterList',
          component: () => import('../components/platform/petMaster/petMasterList.vue')
        }, {
          path: 'auditingList',
          name: 'auditingList',
          component: () => import('../components/platform/auditing/auditingList.vue')
        }]
    }, {
      path: '/users',
      name: 'users',
      component: Users
    }]

})
