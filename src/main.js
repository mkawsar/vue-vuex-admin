import Vue from "vue";
import _ from 'lodash';
import vToolTip from "v-tooltip";
import VueNotify from 'vue-notifyjs';
import {MessageBox} from 'element-ui';
import lang from 'element-ui/lib/locale/lang/en';
import locale from 'element-ui/lib/locale';

import App from "./App";
import router from "./router/index";
import store from './store/index';

import env from './env'

import auth from "./services/auth";
import notification from "./services/notification";
import localStorage from "./services/localStorage";

import PaperDashboard from "./plugins/paperDashboard";
import "vue-notifyjs/themes/default.css";

Vue.use(vToolTip);
Vue.use(VueNotify);
Vue.use(PaperDashboard);
Vue.use(store);

locale.use(lang);

import 'element-ui/lib/theme-chalk/index.css';


Vue.prototype.$env = env;
Vue.prototype.$lodash = _;
Vue.prototype.$auth = auth;
Vue.prototype.$localStorage = localStorage;
Vue.prototype.$notification = notification;
Vue.prototype.$confirm = MessageBox.confirm;

window.$ = window.jQuery = require('jquery');
/* eslint-disable no-new */
new Vue({
    router,
    store,
    render: h => h(App)
}).$mount("#app");
