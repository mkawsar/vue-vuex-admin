import DashboardLayout from "@/layout/dashboard/DashboardLayout.vue";
import SurveyList from '@/pages/Survey/List.vue';
import SurveyCreate from '@/pages/Survey/Create.vue';

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
                meta: {title: 'Survey List', icon: 'fa fa-bar-chart', affix: true, requiresAuth: true, roles: ['admin'], isNav: true}
            },
            {
                path: "list/create",
                name: "SurveyCreate",
                component: SurveyCreate,
                meta: {title: 'Survey Create', icon: 'fa fa-poll', affix: true, requiresAuth: true, roles: ['admin'], isNav: false}
            }
        ]
    },
];