
import Vue from 'vue'
import Router from 'vue-router'
import Store from './views/stores/app.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/platform',
      name: 'platform',
      component: () => import('./views/platform/info.vue'),
      children: [{
          path: 'storeList',
          name: 'storeList',
          component: () => import('./components/platform/storeList/app.vue')
        }, {
          path: 'platformUsers',
          name: 'platformUsers',
          component: () => import('./components/platform/platformUsers/app.vue')
        }, {
          path: 'storesUsers',
          name: 'storesUsers',
          component: () => import('./components/platform/storesUsers/app.vue')
        }, {
          path: 'petMasterList',
          name: 'petMasterList',
          component: () => import('./components/platform/petMaster/petMasterList.vue')
        }, {
          path: 'addPetMaster',
          name: 'addPetMaster',
          component: () => import('./components/platform/addPetMaster/app.vue')
        }, {
          path: 'auditingList',
          name: 'auditingList',
          component: () => import('./components/platform/auditing/auditingList.vue')
        }, {
          path: 'supplier',
          name: 'supplier',
          component: () => import('./components/platform/supplier/app.vue')
        }]
    }, {
      path: '/store',
      name: 'store',
      component: Store
    }]

})
