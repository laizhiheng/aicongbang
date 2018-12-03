import Vue from 'vue'
import Vuex from 'vuex'

import PlatformUsers from "./components/platform/platformUsers/store.js"
import StoresUsers from "./components/platform/storesUsers/store.js"
import PlatformList from "./components/platform/platformList/store.js"
import PetMaster from "./components/platform/petMaster/store.js"
import Auditing from "./components/platform/auditing/store.js"

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
    PlatformUsers,
    StoresUsers,
    PlatformList,
    PetMaster,
    Auditing,
    Commdity,
    StoresPetsAddPets
}
})
