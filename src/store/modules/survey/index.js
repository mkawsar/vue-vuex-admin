import { getRequest } from '@/config/axios.client.js';

export default {
    namespaced: true,
    state: () => ({
        survey: [],
    }),

    getters: {
        getSurveyList: state => state.survey,
    },

    mutations: {
        setSurveyList(state, data) {
            state.survey = data;
        },
    },

    actions: {
        handleGetSurveyList({ commit }) {
            getRequest('api/v1/survey')
            .then(res => {
                commit('setSurveyList', res)
            })
            .catch(err => {
                console.log(err);
            })
        }
    }
};