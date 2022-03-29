import localStorage from '@/services/localStorage/localStorage';
import { postRequest, getRequest } from '@/config/axios.client.js';

export default {
    namespaced: true,
    state: () => ({
        user: {},
        isLoggedIn: true,
        message: ''
    }),
    getters: {
        getUserInfo: state => state.user,
        getIsLoggedIn: state => state.isLoggedIn,
        getMessage: state => state.message
    },

    mutations: {
        setUserInfo(state, user) {
            state.user = user;
        },
        seIsLoggedIn(state, isLoggedIn) {
            state.isLoggedIn = isLoggedIn;
        },
        setMessage(state, message) {
            state.message = message;
        }
    },
    actions: {
        handleAdduser({ commit }, user) {
            commit('setUser', user);
        },

        handleGetUserInfo({ commit }) {
            getRequest('api/v1/user/info')
            .then(res => {
                //TODO
            })
            .catch(err => {
                if (err.response.status === 401) {
                    commit('setMessage', err.response.data.data)
                    commit('seIsLoggedIn', false);
                }
            })
        }
    }
}