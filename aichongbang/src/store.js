import Vue from 'vue'
import Vuex from 'vuex'
import Login from "./components/login/store.js"
import Reg from "./components/reg/store.js"
import StoreReg from "./components/storeReg/store.js"
import Commdity from "./components/stores/commdity/store.js"
import StoresPetsAddPets from "./components/stores/pets/store.js"
Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    Login,
    Reg,
    StoreReg,
    Commdity,
    StoresPetsAddPets
}
})
