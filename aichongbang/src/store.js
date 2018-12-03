import Vue from 'vue'
import Vuex from 'vuex'

import PlatformUsers from "./components/platform/platformUsers/store.js"
import StoresUsers from "./components/platform/storesUsers/store.js"
import PlatformList from "./components/platform/storeList/store.js"
import PetMaster from "./components/platform/petMaster/store.js"
import AddPetMaster from "./components/platform/addPetMaster/store.js"
import Auditing from "./components/platform/auditing/store.js"
import Supplier from "./components/platform/supplier/store.js"

Vue.use(Vuex)

export default new Vuex.Store({
  state: {

  },
  mutations: {

  },
  actions: {

  },
  modules:{
    PlatformUsers,
    StoresUsers,
    PlatformList,
    PetMaster,
    Auditing,
    AddPetMaster,
    Supplier
  }
})
