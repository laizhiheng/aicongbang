export default {
    namespaced: true,
    state: {
        loginState: false,
        userType:0
    },
    mutations: {
        getManage(state, payload) {
            if (payload.isOk) {
                state.loginState = true;
                state.userType = payload.userType
            }

        }
    },
    actions: {
        async getManageAsync(context, obj) {

            const data = await fetch("/users/manageLogin", {
                headers: {
                    "Content-Type": "application/json"
                },
                method: "POST",
                body: JSON.stringify(obj)
            })
                .then(res => res.json())
                .then((res) => context.commit("getManage", res))


        }
    }
}