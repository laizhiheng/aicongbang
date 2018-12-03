
export default {
    namespaced: true,
    state: {
      curPage: 1,
      eachPage: 10,
      maxPage: 0,
      total: 0,
      rows: []
    },
    mutations: {
      getStoresByPage(state, payload) {
        Object.assign(state, payload)
      },
      setCurPage(state, curPage) {
        state.curPage = curPage
      }
    },
    actions: {
      async getStoreListByPageAsync(context, { curPage = 1, eachPage = 10 } = {}) {
        const data = await fetch(`/stores/getStoreByPage?curPage=${curPage}&eachPage=${eachPage}`)
          .then(response => response.json())
        context.commit("getStoresByPage", data)
      }
    }
  }