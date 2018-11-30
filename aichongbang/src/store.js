import Vue from 'vue'
import Vuex from 'vuex';
import Commdity from "./components/stores/commdity/store.js"

Vue.use(Vuex)

export default new Vuex.Store({
  modules:  {
    Commdity
  }
})
