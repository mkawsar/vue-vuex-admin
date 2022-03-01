import {
    postRequest
} from '@/config/axios.client.js';
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
            try {
                commit('setSuccessStatus', true);
                commit('setMessage', 'Successfully logged in!');
                const response = postRequest('login', user);
                response.then(res => {
                    console.log('test');
                }).catch(err => {
                    console.log(err);
                })

                // console.log(response);
            } catch (err) {
                console.log(err.response.data.message);
            }
        }
    }
}