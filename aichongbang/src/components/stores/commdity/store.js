export default {
    namespaced: true,
    state: {
        curPage: 1,
        eachPage: 10,
        maxPage: 0,
        total: 0,
        row: []
    },
    mutations: {
        getStudentsByPage(state, payload) {
            Object.assign(state, payload)
        },
        setCurPage(state, curPage) {
            state.curPage = curPage
        }
    },
    actions: {
        async getStuentsPageAsync(context, { curPage = 1, eachPage = 10 } = {}) {
            const data = await fetch(`/commodityRouter/commodityAll?curPage=${curPage}&eachPage=${eachPage}`)
                .then(response => response.json())
            console.log(data)
            context.commit("getStudentsByPage", data)
        },
        async addCommdity(context, obj) {
            await fetch("/commodityRouter/addCommodity", {
                headers: {
                    "Content-Type": "application/json"
                },
                method: "POST",
                body: JSON.stringify(obj)
            })
                .then(response => response.json())

        }
    }
}