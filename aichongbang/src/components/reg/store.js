export default {
    namespaced: true,
    state: {
        usersId: 1
    },
    mutations: {
        getUserId(state, payload) {
            console.log(payload)
            state.usersId = payload
        }
    },
    actions: {
        async createUser(context, obj) {
            const data = await fetch("/users/userReg", {
                headers: {
                    "Content-Type": "application/json"
                },
                method: "POST",
                body: JSON.stringify(obj)
            })
                .then(res => res.json())
                .then((res) => {
                    console.log(res)
                    context.commit("getUserId", res)
                })
        }
    }
}