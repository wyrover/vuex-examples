import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count: 6
  },
  getters: {
    count(state) {
      return state.count
    }
  },
  mutations: {

  },
  actions: {

  }
})
