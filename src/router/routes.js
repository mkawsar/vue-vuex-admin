import DashboardLayout from "@/layout/dashboard/DashboardLayout.vue";
// GeneralViews
import NotFound from "@/pages/NotFoundPage.vue";

// Admin pages
import Dashboard from "@/pages/Dashboard.vue";
import AuthLogin from "@/pages/Auth/Login.vue";
// import UserProfile from "@/pages/UserProfile.vue";
import Notifications from "@/pages/Notifications.vue";
import Icons from "@/pages/Icons.vue";
// import Maps from "@/pages/Maps.vue";
// import Typography from "@/pages/Typography.vue";
// import TableList from "@/pages/TableList.vue";

import userRoutes from './users';

const baseRoutes = [
    {
        path: "/",
        component: DashboardLayout,
        redirect: "/dashboard",
        children: [
            {
                path: "dashboard",
                name: "dashboard",
                component: Dashboard,
                meta: {title: 'Dasboard', icon: 'ti-panel', affix: true, requiresAuth: true, roles: ['user']}
            },
            {
                path: "notifications",
                name: "notifications",
                component: Notifications,
                meta: {title: 'Notifications', icon: 'ti-announcement', affix: true, requiresAuth: true, roles: ['user']}
            },
            {
                path: "icons",
                name: "icons",
                component: Icons,
                meta: {title: 'Icons', icon: 'ti-themify-favicon-alt', affix: true, requiresAuth: true, roles: ['admin']}
            },
        ]
    },
    {
        path: "/auth/login",
        name: "login",
        component: AuthLogin,
        meta: {title: 'Login', requiresAuth: false}
    },
    {
        path: "*", 
        component: NotFound,
        meta: {title: 'Not Found'}
    },
];

const routes = baseRoutes.concat(
    userRoutes
);

// const routes = [
//     {
//         path: "/",
//         component: DashboardLayout,
//         redirect: "/dashboard",
//         children: [
//             {
//                 path: "dashboard",
//                 name: "dashboard",
//                 component: Dashboard,
//                 meta: {title: 'Dasboard', icon: 'dashboard', affix: true, requireAuth: true}
//             },
//             {
//                 path: "stats",
//                 name: "stats",
//                 component: UserProfile
//             },
//             {
//                 path: "notifications",
//                 name: "notifications",
//                 component: Notifications
//             },
//             {
//                 path: "icons",
//                 name: "icons",
//                 component: Icons
//             },
//             {
//                 path: "maps",
//                 name: "maps",
//                 component: Maps
//             },
//             {
//                 path: "typography",
//                 name: "typography",
//                 component: Typography
//             },
//             {
//                 path: "table-list",
//                 name: "table-list",
//                 component: TableList
//             }
//         ]
//     },
// ];

export default routes;
