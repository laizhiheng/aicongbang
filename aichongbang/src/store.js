import Vue from 'vue'
<<<<<<< HEAD
import Vuex from 'vuex'
<<<<<<< HEAD

import PlatformUsers from "./components/platform/platformUsers/store.js"
import StoresUsers from "./components/platform/storesUsers/store.js"
import PlatformList from "./components/platform/platformList/store.js"
import PetMaster from "./components/platform/petMaster/store.js"
import Auditing from "./components/platform/auditing/store.js"

=======
import Login from "./components/login/store.js"
import Reg from "./components/reg/store.js"
import StoreReg from "./components/storeReg/store.js"
>>>>>>> 7e0e34571e834a691421d1d0c40ca1e3356573f4
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

<<<<<<< HEAD
  },
  modules:{
    PlatformUsers,
    StoresUsers,
    PlatformList,
    PetMaster,
    Auditing
=======
export default new Vuex.Store({
  modules:  {
    Commdity
>>>>>>> 7e0e34571e834a691421d1d0c40ca1e3356573f4
  }
>>>>>>> 7970f754a6230fd7cedc3e7bcef8a4c20a880cc0
})
