
import Vue from 'vue'
import Router from 'vue-router'
import Store from './views/stores/app.vue'

import Login from "./components/login/login.vue"
import Reg from "./components/reg/reg.vue"
import StoreReg from "./components/storeReg/storeReg.vue"
import Info from "./info.vue"

Vue.use(Router)

export default new Router({
  routes:

    [
      {
        path: '/platform',
        name: 'platform',
        component: () => import('./views/platform/info.vue'),
        children: [{
          path: 'platformList',
          name: 'platformList',
          component: () => import('./components/platform/platformList/app.vue')
        }, {
          path: 'platformUsers',
          name: 'platformUsers',
          component: () => import('./components/platform/platformUsers/users.vue')
        }, {
          path: 'storesUsers',
          name: 'storesUsers',
          component: () => import('./components/platform/storesUsers/users.vue')
        }, {
          path: 'petMasterList',
          name: 'petMasterList',
          component: () => import('./components/platform/petMaster/petMasterList.vue')
        }, {
          path: 'auditingList',
          name: 'auditingList',
          component: () => import('./components/platform/auditing/auditingList.vue')
        }]
      }, 
      {
        path: '/store',
        name: 'store',
        component: Store
      },
      {
        path: '/login',//登陆
        name: 'login',
        component: Login
      },
      {
        path: '/reg',//注册店主
        name: 'reg',
        component: Reg
      },
      {
        path: '/storeReg/:usersId',//注册店铺
        name: '_storeReg',
        component: StoreReg
      },
      {
        path: '/info',//随便写的Info
        name: 'info',
        component: Info
      },

    ]
})
