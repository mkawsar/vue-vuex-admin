import Vue from "vue";
import VueRouter from "vue-router";
import routes from "./routes";
import authService from '../services/auth';

Vue.use(VueRouter);

const router = createRouter();

// configure router

router.beforeEach((to, from, next) => {
    if (to.meta.requiresAuth) {
        const token = window.localStorage.getItem('token');
        if (!token) {
            next({ path: '/auth/login' });
            return false;
        } else {
            let routeRoles = to.meta.roles;
            let storageRoles = authService.roles();
            if (routeRoles && storageRoles) {
                if (routeRoles.some(routeRole => storageRoles.includes(routeRole))) {
                    next();
                } else {
                    next({path: '/auth/login' });
                    return false;
                }
            } else {
                next({path: '/auth/login'});
                return false;
            }
        }
    }
    next();
});

router.afterEach((to, from) => {
    Vue.nextTick(() => {
        document.title = Object.keys(to.meta).length > 0 ? to.meta.title : "No title";
    });
});

export default router;

function createRouter() {
    const router = new VueRouter({
        mode: 'history',
        routes, // short for routes: routes
        linkActiveClass: "active"
    });
    return router
}
