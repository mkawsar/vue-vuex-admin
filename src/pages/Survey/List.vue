<template>
    <div class="row">
        <div class="col-md-12 card">
            <div class="card-content row">
                <div class="col-sm-12">
                    <template>
                        <div class="row" style="margin-bottom: 10px">
                            <div class="col-sm-6">
                                <form class="form-inline">
                                    <label>Search for:</label>
                                    <input type="text"
                                        v-model="filterText"
                                        class="form-control"
                                        @keyup.enter.prevent="doFilter(filterText)"
                                        placeholder="Name">
                                    <button class="btn btn-primary btn-sm" @click.prevent="doFilter(filterText)">Go</button>
                                    <button class="btn btn-default btn-sm" @click.prevent="resetFilter">Reset</button>
                                </form>
                            </div>
                            <div class="col-sm-6">
                                <router-link :to="{name: 'SurveyCreate'}" class="btn btn-outline btn-success pull-right">Add Survey</router-link>
                            </div>
                        </div>
                        <vuetable
                                ref="vuetable"
                                :api-url="url"
                                :http-options="headerOptions"
                                :fields="fields"
                                pagination-path
                                :css="css.table"
                                @vuetable:loading="showLoader"
                                @vuetable:loaded="hideLoader"
                                @vuetable:pagination-data="onPaginationData"
                        >
                            <template slot="actions" slot-scope="props">
                                <div class="custom-actions">
                                    <!-- <router-link
                                            :to="{name: 'GymLocationEdit', params: { id: props.rowData.id }}"
                                            class="btn btn-simple btn-xs btn-warning btn-icon edit"
                                    >
                                        <i class="ti-pencil-alt"></i>
                                    </router-link> -->
                                    <button
                                            class="btn btn-simple btn-xs btn-danger btn-icon remove"
                                            v-tooltip="{
                                            content: 'Delete this Location',
                                            placement: 'top-center',
                                            classes: ['info'],
                                            targetClasses: ['it-has-a-tooltip'],
                                            offset: 10,}"
                                            @click="handleDelete(props.rowData)"
                                    >
                                        <i class="ti-close"></i>
                                    </button>
                                </div>
                            </template>
                        </vuetable>
                        <div class="vuetable-pagination ui basic segment grid">
                            <vuetable-pagination-info ref="paginationInfo"></vuetable-pagination-info>

                            <vuetable-pagination
                                    ref="pagination"
                                    :css="css.pagination"
                                    @vuetable-pagination:change-page="onChangePage"
                            ></vuetable-pagination>
                        </div>
                    </template>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Vuetable from "vuetable-2";
import { createNamespacedHelpers } from 'vuex';
import dateFormatMixins from '@/mixins/dateFormat';
import VuetableCssConfig from '@/components/Vuetable/VuetableCssConfig';
import VuetablePagination from "vuetable-2/src/components/VuetablePagination";
import VuetablePaginationInfo from "vuetable-2/src/components/VuetablePaginationInfo";

export default {
    components: {
        Vuetable, VuetablePagination, VuetablePaginationInfo
    },
    name: 'SurveyList',
    mixins: [dateFormatMixins],
    data() {
        return {
            css: VuetableCssConfig,
            url: this.$env.BACKEND_API + '/api/v1/survey',
            headerOptions: {
                headers: {
                    Authorization: "Bearer " + localStorage.getItem("token")
                }
            },
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
            filterText: ''
        };
    },
    methods: {
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
        },
        resetFilter() {
            //TODO
        },
        doFilter(query) {
            console.log(query);
        },
        showLoader() {
            this.loading = true;
        },
        hideLoader() {
            this.loading = false;
        },
    },
}
</script>