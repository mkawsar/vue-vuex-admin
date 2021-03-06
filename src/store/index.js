import Vue from "vue";
import Vuex from "vuex";

import authModule from './modules/auth';
import usersModule from './modules/users';
import dashboardModule from './modules/dashboard';
import SurveyModule from './modules/survey'

Vue.use(Vuex);

export default new Vuex.Store({
    namespaced: true,
    modules: {
        auth: authModule,
        user: usersModule,
        dashboard: dashboardModule,
        survey: SurveyModule,
    }
});
