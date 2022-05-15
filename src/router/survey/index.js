import DashboardLayout from "@/layout/dashboard/DashboardLayout.vue";
import SurveyList from '@/pages/Survey/List.vue';

export default [
    {
        path: "/survey",
        component: DashboardLayout,
        redirect: "/dashboard",
        children: [
            {
                path: "list",
                name: "surveyList",
                component: SurveyList,
                meta: {title: 'Survey List', icon: 'fa fa-poll', affix: true, requiresAuth: true, roles: ['admin']}
            }
        ]
    },
];