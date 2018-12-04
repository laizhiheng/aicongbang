export default {
    namespaced: true,
    state: {
        curPage: 1,
        eachPage: 10,
        maxPage: 0,
        total: 0,
        rows: [],
        n: 0
    },
    mutations: {
        getStudentsByPage(state, payload) {
            console.log(payload)
            Object.assign(state, payload)
        },
        // removeCommdity(state, data) {
        //     console.log(data)
        //     Object.assign(state, data.n)
        // }
    },
    actions: {
        async getCommdityPageAsync(context, { curPage = 1, eachPage = 5 } = {}) {
            const data = await fetch(`/commodityRouter/commodityAll?curPage=${curPage}&eachPage=${eachPage}`)
                .then(response => response.json())
            context.commit("getStudentsByPage", data)
        },
        async addCommdity(context, obj) {
            console.log(obj)
            await fetch("/commodityRouter/addCommodity", {
                headers: {
                    "Content-Type": "application/json"
                },
                method: "POST",
                body: JSON.stringify(obj)
            })
                .then(response => response.json())

        },
        async commdityUpdataAsync(context, msg) {

            const data = await fetch(`/commodityRouter/commdityUpdata`, {
                headers: {
                    "Content-Type": "application/json"
                },
                method: "POST",
                body: JSON.stringify(msg)
            })
                .then(response => response.json())
            // console.log(data)
            // context.commit("getStudentsByPage", data)
        },
        async removeCommdityAsync(context, ID) {
            const data = await fetch('/commodityRouter/removeCommdity', {
                headers: {
                    "Content-Type": "application/json"
                },
                method: "POST",
                body: JSON.stringify({ _id: ID })
            })
                .then(response => response.json())
            // const data = await fetch(`/commodityRouter/removeCommdity?_id=${ID}`)
            //     .then(response => response.json())
            // context.commit("removeCommdity", data)
            // console.log(data)
        },
    }
}