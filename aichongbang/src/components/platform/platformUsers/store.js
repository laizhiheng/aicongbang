export default {
  namespaced: true,
  state: {
    curPage: 1,
    eachPage: 10,
    maxPage: 0,
    total: 0,
    rows: [],
  },
  mutations: {
    getUsersByPage(state, payload) {
      Object.assign(state.rows, payload)
    }
  },
  actions: {
    async getUsersByTypeAsync(context,{userType = 0}={}) {
      const data = await fetch(`/users/getUsersByType?userType=${userType}`).then(response => response.json())
      context.commit("getUsersByPage", data)
    }
  }
}