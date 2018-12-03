
import Vue from 'vue'
import Router from 'vue-router'

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
        path: '/',//登陆
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
    
    {
      path: '/store',
      name: 'store',
      component: () => import('./views/stores/app.vue'),
      children:[
        {
          path:"commdityList",
          name:"commdityList",
          component: () => import('./components/stores/commdity/commdityList.vue')
        },
        {
          path:"addCommdity",
          name:"addCommdity",
          component: () => import('./components/stores/commdity/addCommdity.vue')
        },
        {
          path:"serveList",
          name:"serveList",
          component: () => import('./components/stores/serve/serveList.vue')
        },
        {
          path:"addServe",
          name:"addServe",
          component: () => import('./components/stores/serve/addServe.vue')
        },
        {
          path:"petsList",
          name:"petsList",
          component: () => import('./components/stores/pets/petsList.vue')
        },
        {
          path:"addPets",
          name:"addPets",
          component: () => import('./components/stores/pets/addPets.vue')
        }
      ]
    }]
    
})
