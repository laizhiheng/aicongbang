import Vue from 'vue'
import Router from 'vue-router'
<<<<<<< HEAD:aicong-project/src/router/platform.js
import Platform from '../components/platform.vue'
import Users from '../components/users.vue'
=======
import Platform from '../views/platform/platform.vue'
>>>>>>> cb67e5b1071de040a4f03983d74c58c7059b02e5:aicong-project/src/router/platform.js

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
