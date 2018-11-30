import Vue from 'vue'
<<<<<<< HEAD
import Vuex from 'vuex'
import Login from "./components/login/store.js"
import Reg from "./components/reg/store.js"
import StoreReg from "./components/storeReg/store.js"
Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    Login,
    Reg,
    StoreReg
}
=======
import Vuex from 'vuex';
import Commdity from "./components/stores/commdity/store.js"

Vue.use(Vuex)

export default new Vuex.Store({
  modules:  {
    Commdity
  }
>>>>>>> 7970f754a6230fd7cedc3e7bcef8a4c20a880cc0
})
