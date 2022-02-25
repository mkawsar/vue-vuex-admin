export default {
    namespaced: true,
    state: () => ({
        users: [
            {
                id: 1,
                name: 'John Doe',
                email: 'john@example.com'
            }
        ]
    }),
    getters: {
        getUserList: state => state.users,
    },

    mutations: {
        setUser(state, user) {
            state.users = user;
        }
    },
    actions: {
        handleAdduser({ commit }, user) {
            commit('setUser', user);
        }
    }
}