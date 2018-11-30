export default {
  namespaced: true,
  state: {
    curPage: 1,
    eachPage: 10,
    maxPage: 0,
    total: 0,
    rows: [],
    userType:0
  },
  mutations: {
    getUsersByType(state, payload) {
      console.log(state);
      
      Object.assign(state, payload)
    },
    setCurPage(state, curPage) {
      state.curPage = curPage
    }
  },
  actions: {
    async getUsersByTypeAsync(context,{userType = 0}={}) {
      console.log(1);
      
      const data = await fetch(`/users/getUsersByType?userType=${userType}`)
        .then(response => response.json())
        console.log(data);
        
      context.commit("getUsersByType", data)
    }
  }
}