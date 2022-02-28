import Vue from "vue";
import _ from 'lodash';
import App from "./App";
import router from "./router/index";
import store from './store/index';

import localStorage from "./services/localStorage";
import auth from "./services/auth";

import PaperDashboard from "./plugins/paperDashboard";
import "vue-notifyjs/themes/default.css";

Vue.use(PaperDashboard);
Vue.use(store)

Vue.prototype.$_ = _;
Vue.prototype.$localStorage = localStorage;
Vue.prototype.$auth = auth;

/* eslint-disable no-new */
new Vue({
    router,
    store,
    render: h => h(App)
}).$mount("#app");
