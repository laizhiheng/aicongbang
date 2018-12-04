export default {
    namespaced: true,
    strict: true,
    state: {
        curPage: 1,
        eachPage: 10,
        maxPage: 0,
        total: 0,
        rows: []
    },
    mutations: {
        getPetsByPage(state, payload) {
            Object.assign(state, payload)

        },
        setCurPage(state, curPage) {
            state.curPage = curPage
        }
    },
    getters: {
    },
    actions: {
        async addPetsAsync(context, obj) {
            await fetch("/pets/addPets", {
                headers: {
                    "Content-Type": "application/json"
                },
                method: "POST",
                body: JSON.stringify(obj)
            })
                .then(response => response.json())
        },
        async getPetsByPageAsync(context, { curPage = 1, eachPage = 5 } = {}) {
            const data = await fetch(`/pets/petsListByPage?curPage=${curPage}&eachPage=${eachPage}`)
                .then(response => response.json())
            context.commit("getPetsByPage", data)
        },
        // async getPetsByPageAsync(context, { curPage = 1, eachPage = 5 } = {}) {
        //     const data = await fetch(`/pets/petsListByPage?curPage=${curPage}&eachPage=${eachPage}`)
        //         .then(response => response.json())
        //     context.commit("getPetsByPage", data)
        // },
        async updateByIdAsync(context, obj) {
            console.log(obj)
                await fetch("/pets/updateById", {
                headers: {
                    "Content-Type": "application/json"
                },
                method: "POST", 
                body:JSON.stringify(obj)
            })
        },
        async removePetsAsync(context, _id) {
            console.log(_id)
                await fetch("/pets/removePets", {
                headers: {
                    "Content-Type": "application/json"
                },
                method: "POST", 
                body:JSON.stringify(_id)
            })
        },

    }
}