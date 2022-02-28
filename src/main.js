import Vue from "vue";
import App from "./App";
import router from "./router/index";
import store from './store/index';

import localStorage from "./services/localStorage";

import PaperDashboard from "./plugins/paperDashboard";
import "vue-notifyjs/themes/default.css";

Vue.use(PaperDashboard);
Vue.use(store)

Vue.prototype.$localStorage = localStorage;

/* eslint-disable no-new */
new Vue({
    router,
    store,
    render: h => h(App)
}).$mount("#app");
