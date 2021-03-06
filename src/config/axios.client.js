import axios from 'axios';
import constants from './constants';
import swal from 'sweetalert2';
import router from '../router';
// axios client
const axiosClient = axios.create({
    baseURL: constants.HOST_URL,
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    }
});


axiosClient.interceptors.request.use((config) => {
    const token = localStorage.getItem('token');
    if (token) {
        config.headers["Authorization"] = "Bearer " + token
    }
    return config
})

axiosClient.interceptors.response.use(function (response) {
    return response;
}, function (error) {
    if (error.response.status === 401 && window.location.pathname !== '/auth/login') {
        swal.fire({
            type: 'error',
            allowOutsideClick: false,
            allowEscapeKey: false,
            title: 'Oops...',
            text: error.response.data.data
        }).then((result) => {
            localStorage.clear()
            router.push('/auth/login');
            return Promise.reject(error);
        });
    } else {
        if (error.response.status === 401) {
            localStorage.clear()
            router.push('/auth/login');
            return Promise.reject(error);
        }

        return Promise.reject(error);
    }
});

export function getCustomRequest(url) {
    return axiosClient.get(`/${url}`).then(response => response.data).catch(error => error);
}

export function getRequest(url) {
    return axiosClient.get(`/${url}`).then(response => response.data);
}

export function postRequest(url, payload) {
    return axiosClient.post(`/${url}`, payload).then(response => response.data).catch(error => error);
}

export function putRequest(url, payload) {
    return axiosClient.put(`/${url}`, payload).then(response => response).catch(error => error);
}

export function deleteRequest(url) {
    return axiosClient.delete(`/${url}`).then(response => response).catch(error => error);
}

