export default {
    namespaced: true,

    mutations: {

    },
    actions: {
        async createStoreAsync(context, obj) {
            const data = fetch("/users/storeReg", {
                headers: { 
                    "Content-Type": "application/json"
                },
                method: "POST",
                body: JSON.stringify(obj)
              })
              .then(res => res.json())
              console.log(data)
        }
    }
}