import Vue from 'vue'
import Vuex from 'vuex'

import PlatformUsers from "./components/platform/platformUsers/store.js"
import StoresUsers from "./components/platform/storesUsers/store.js"
import PlatformList from "./components/platform/platformList/store.js"
import PetMaster from "./components/platform/petMaster/store.js"
import Auditing from "./components/platform/auditing/store.js"

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
    Auditing
  }
})
