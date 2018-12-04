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
      Object.assign(state, payload)
    },
    setCurPage(state, curPage) {
      state.curPage = curPage
    }
  },
  actions: {
    async getUsersByTypeAsync(context,{userType =1 ,curPage = 1, eachPage = 10}={}) {
      const data = await fetch(`/users/getUsersByType?userType=${userType}&curPage=${curPage}&eachPage=${eachPage}`).then(response => response.json())
      context.commit("getUsersByPage", data)
    }
  }
}