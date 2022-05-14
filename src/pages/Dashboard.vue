<template>
    <div>
        <!--Stats cards-->
        <div class="row">
            <div class="col-lg-3 col-sm-6" v-for="stats in statsCards" :key="stats.title">
                <div class="card">
                    <div class="card-content">
                        <div class="row">
                            <div class="col-xs-5">
                                <div class="icon-big text-center" :class="`icon-${stats.type}`">
                                    <i :class="stats.icon"></i>
                                </div>
                            </div>
                            <div class="col-xs-7">
                                <div class="numbers">
                                    <p>{{ stats.title }}</p>
                                    {{ stats.value }}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="card-footer">
                        <hr/>
                        <div class="stats">
                            <i :class="stats.footerIcon"></i> {{ stats.footerText }}
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-lg-12 col-sm-12">
                <div class="card">
                    <div class="card-content">
                        <vuetable ref="vuetable"
                                  :api-url="url"
                                  :http-options="headerOptions"
                                  :fields="fields"
                                  :data="data"
                                  pagination-path
                                  @vuetable:pagination-data="onPaginationData">
                            <template slot="actions" slot-scope='props'>
                                <div class="custom-actions">
                                    <button class="btn btn-simple btn-xs btn-danger btn-icon remove"
                                        v-tooltip="{
                                        content: 'Delete this Challenge',
                                        placement: 'top-center',
                                        classes: ['info'],
                                        targetClasses: ['it-has-a-tooltip'],
                                        offset: 10,}" v-on:click="handleSurveyDeleteAction(props.rowData.title, props.rowData.id)"><i class="ti-close"></i>
                                    </button>
                                </div>
                            </template>
                        </vuetable>
                        <div class="vuetable-pagination ui basic segment grid">
                            <vuetable-pagination-info ref="paginationInfo"></vuetable-pagination-info>
                            <vuetable-pagination ref="pagination"
                                :css="css.pagination"
                                @vuetable-pagination:change-page="onChangePage">
                            </vuetable-pagination>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import Vuetable from "vuetable-2";
import dateFormatMixins from '@/mixins/dateFormat';
import { createNamespacedHelpers } from 'vuex';
import VuetableCssConfig from '@/components/Vuetable/VuetableCssConfig';
import VuetablePagination from "vuetable-2/src/components/VuetablePagination";
import VuetablePaginationInfo from "vuetable-2/src/components/VuetablePaginationInfo";

const {mapGetters: mapGettersDashboardMoudle, mapActions: mapActionsDashboardModule} = createNamespacedHelpers('dashboard');
const {mapGetters: mapGettersSurveyModule, mapActions: mapActionsSurveyModule} = createNamespacedHelpers('survey');

export default {
    components: {
        Vuetable, VuetablePagination, VuetablePaginationInfo
    },
    name: 'dashboard',
    /**
     * Chart data used to render stats, charts. Should be replaced with server data
     */
    data() {
        return {
            statsCards: [
                {
                    type: "warning",
                    icon: "ti-server",
                    title: "Capacity",
                    value: "105GB",
                    footerText: "Updated now",
                    footerIcon: "ti-reload"
                },
                {
                    type: "success",
                    icon: "ti-wallet",
                    title: "Revenue",
                    value: "$1,345",
                    footerText: "Last day",
                    footerIcon: "ti-calendar"
                },
                {
                    type: "danger",
                    icon: "ti-pulse",
                    title: "Errors",
                    value: "23",
                    footerText: "In the last hour",
                    footerIcon: "ti-timer"
                },
                {
                    type: "info",
                    icon: "ti-twitter-alt",
                    title: "Followers",
                    value: "+45",
                    footerText: "Updated now",
                    footerIcon: "ti-reload"
                }
            ],
            fields: [
                {
                    name: 'title',
                    title: 'Title'
                },
                {
                    name: 'slug',
                    title: 'Slug'
                },
                {
                    name: 'expire_date',
                    title: 'Expire Date',
                    callback: 'formatDate|DD/MM/YYYY'
                },
                {
                    name: '__slot:actions',
                    title: 'Actions',
                    titleClass: 'center aligned',
                    dataClass: 'center aligned',
                }
            ],
            data: [],
            css: VuetableCssConfig,
            url: this.$env.BACKEND_API + '/api/v1/survey',
            headerOptions: {
                headers: {
                    Authorization: "Bearer " + localStorage.getItem("token")
                }
            }
        };
    },
    mixins: [dateFormatMixins],
    mounted() {
        this.handleGetUserInfo();
        //this.handleGetSurveyList();
    },
    methods: {
        ...mapActionsDashboardModule(['handleGetUserInfo']),
        ...mapActionsSurveyModule(['handleGetSurveyList']),
        onPaginationData(paginationData) {
            this.$refs.pagination.setPaginationData(paginationData);
            this.$refs.paginationInfo.setPaginationData(paginationData);
        },
        onChangePage(page) {
            this.$refs.vuetable.changePage(page)
        },
        handleSurveyDeleteAction(title, id) {
            this.$confirm('This will delete the survey "' + title + '". Continue?', 'Warning', {
                    confirmButtonText: 'OK',
                    cancelButtonText: 'Cancel',
                    type: 'warning'
                }).then(() => {
                    console.log(id);
                }).catch(() => {
                    //this.$notification.error(this, 'Error', 'Something went wrong');
                })
        } 
    },
    computed: {
        ...mapGettersDashboardMoudle(['getIsLoggedIn', 'getMessage']),
        ...mapGettersSurveyModule(['getSurveyList']),
    },
    watch: {
        getIsLoggedIn(value) {
            if (!value) {
                this.$notification.error(this, 'Success', this.getMessage);
                this.$localStorage.clear();
                this.$router.push('/auth/login');
            }
        }
    }
};
</script>
<style>
</style>
