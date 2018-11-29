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
    }, 
    {
      path: '/store',
      name: 'store',
      component: () => import('../views/stores/app.vue'),
      children:[
        {
          path:"commdityList",
          name:"commdityList",
          component: () => import('../components/stores/commdity/commdityList.vue')
        },
        {
          path:"addCommdity",
          name:"addCommdity",
          component: () => import('../components/stores/commdity/addCommdity.vue')
        },
        {
          path:"serveList",
          name:"serveList",
          component: () => import('../components/stores/serve/serveList.vue')
        },
        {
          path:"addServe",
          name:"addServe",
          component: () => import('../components/stores/serve/addServe.vue')
        },
        {
          path:"petsList",
          name:"petsList",
          component: () => import('../components/stores/pets/petsList.vue')
        },
        {
          path:"addPets",
          name:"addPets",
          component: () => import('../components/stores/pets/addPets.vue')
        }
      ]
    }]

})
