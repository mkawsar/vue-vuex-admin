import Vue from "vue";
import Vuex from "vuex";
import auth from "./modules/auth";

import authModule from './modules/auth';
import usersModule from './modules/users';

Vue.use(Vuex);

export default new Vuex.Store({
    namespaced: true,
    modules: {
        auth: authModule,
        user: usersModule
    }
});
