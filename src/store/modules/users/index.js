import localStorage from '@/services/localStorage/localStorage';
import { postRequest, getRequest } from '@/config/axios.client.js';

export default {
    namespaced: true,
    state: () => ({
        users: [
            {
                id: 1,
                name: 'John Doe',
                email: 'john@example.com'
            }
        ],
        user: {}
    }),
    getters: {
        getUserList: state => state.users,
        getUserInfo: state => state.user,
    },

    mutations: {
        setUser(state, user) {
            state.users = user;
        },

        setUserInfo(state, user) {
            state.user = user;
        }
    },
    actions: {
        handleAdduser({ commit }, user) {
            commit('setUser', user);
        },

        handleGetUserInfo({ commit }, user) {
            getRequest('api/v1/user/info')
            .then(res => {
                console.log(res.data);
            })
            .catch(err => {
                console.log(err);
            })
        }
    }
}