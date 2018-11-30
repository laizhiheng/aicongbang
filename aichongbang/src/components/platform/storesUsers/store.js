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
      getPlatformUsersByPage(state, payload) {
        // for(let key in state) {
        //   console.log(key)
        //   state[key] = payload[key]
        // }
        Object.assign(state, payload)
      },
      setCurPage(state, curPage) {
        state.curPage = curPage
      }
    },
    actions: {
      async getPlatformUsersByPageAsync(context, { curPage = 1, eachPage = 10 } = {}) {
        const data = await fetch(`/platformUsers/getPlatformUsersByPage?curPage=${curPage}&eachPage=${eachPage}`)
          .then(response => response.json())
        context.commit("getPlatformUsersByPage", data)
      }
    }
  }