import {
    postRequest, getRequest
} from '@/config/axios.client.js';
import localStorage from '../../../services/localStorage/localStorage';
export default {
    namespaced: true,
    state: () => ({
        email: '',
        password: '',
        success: false,
        message: '',
        error: false
    }),

    getters: {
        getSuccessStatus: state => state.success,
        getMessage: state => state.message,
        getErrorStatus: state => state.error
    },

    mutations: {
        setSuccessStatus(state, status) {
            state.success = status;
        },
        setMessage(state, message) {
            state.message = message;
        },
        setErrorStatus(state, status) {
            state.error = status;
        }
    },

    actions: {
        handleAuthLogin({ commit }, user) {
            const response = postRequest('api/v1/employer/login', user);
            response.then(res => {
                let userRole = [];
                userRole.push(res.data.response.user.role.name);
                localStorage.set('roles', userRole);
                localStorage.set('token', res.data.response.token);
            }).finally(() => {
                commit('setSuccessStatus', true);
                commit('setMessage', 'Successfully logged in!');
            }).catch(err => {
                commit('setErrorStatus', true);
                commit('setMessage', err.response.data.error);
            });
        }
    }
}