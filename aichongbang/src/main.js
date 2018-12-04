import Vue from 'vue'
import App from './App'
import "./components/_globals.js"

import router from './router.js'
import store from './store.js'

import 'element-ui/lib/theme-chalk/index.css'
import ElementUI from 'element-ui'

Vue.config.productionTip = false
Vue.use(ElementUI)

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')