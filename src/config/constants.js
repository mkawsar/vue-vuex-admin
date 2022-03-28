import localStorage from "@/services/localStorage";

const token = localStorage.get("token");

export default {
    HOST_URL: 'http://127.0.0.1:8000/',
    headers: {
        'Accept': 'application/json',
        Authorization: token ? `Bearer ${token}` : '',
    },
};
