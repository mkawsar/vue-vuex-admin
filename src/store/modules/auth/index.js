import Vue from 'vue';
export default {
    namespaced: true,
    state: () => ({
        email: '',
        password: '',
        success: false,
        message: ''
    }),

    getters: {
        getSuccessStatus: state => state.success,
        getMessage: state => state.message
    },

    mutations: {
        setSuccessStatus(state, status) {
            state.success = status;
        },
        setMessage(state, message) {
            state.message = message;
        }
    },

    actions: {
        handleAuthLogin({ commit }, user) {
            commit('setSuccessStatus', true);
            commit('setMessage', 'Successfully logged in!');
        }
    }
}