// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
<<<<<<< HEAD
import router from './router/platform.js'
=======
import router from './router/platform'
>>>>>>> cb67e5b1071de040a4f03983d74c58c7059b02e5
import 'element-ui/lib/theme-chalk/index.css'
import ElementUI from 'element-ui'
Vue.config.productionTip = false
Vue.use(ElementUI)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
