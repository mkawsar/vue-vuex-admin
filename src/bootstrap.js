// lodash
window._ = require('lodash');

import AppLocalStorage from './services/localStorage/localStorage';

window.axios = require('axios');

window.axios.interceptors.request.use(function (config) {
    config.headers['Authorization'] = 'Bearer ' + AppLocalStorage.get('token');
    return config;
});

window.axios.interceptors.response.use(function (response) {
    return response;
}, function (error) {
    if (error.response.status === 401 && window.location.pathname !== '/auth/login') {
        AppLocalStorage.clear();
        app.$router.push('/auth/login');
        return Promise.reject(error);
    } else {
        if (error.response.status === 401) {
            AppLocalStorage.clear();
            app.$router.push('/auth/login');
            return Promise.reject(error);
        }

        return Promise.reject(error);
    }
});