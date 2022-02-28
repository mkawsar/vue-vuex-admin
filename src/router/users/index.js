import DashboardLayout from "@/layout/dashboard/DashboardLayout.vue";
import UserProfile from "@/pages/UserProfile.vue";

export default [
    {
        path: "/",
        component: DashboardLayout,
        redirect: "/dashboard",
        children: [
            {
                path: "stats",
                name: "stats",
                component: UserProfile,
                meta: {title: 'User Profile', icon: 'ti-user', affix: true, requiresAuth: true, roles: ['admin']}
            }
        ]
    },
];