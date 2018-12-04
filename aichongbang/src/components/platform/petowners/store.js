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
        getPetownersByPage(state, payload) {
        Object.assign(state, payload)
      },
      setCurPage(state, curPage) {
        state.curPage = curPage
      }
    },
    actions: {
      async getPetownersByPageAsync(context,{curPage = 1, eachPage = 10}={}) {
        const data = await fetch(`/petowners/getPetownersByPage?curPage=${curPage}&eachPage=${eachPage}`).then(response => response.json())
        context.commit("getPetownersByPage", data)
      }
    }
  }