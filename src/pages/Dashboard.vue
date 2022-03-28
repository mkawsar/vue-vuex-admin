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
                                    <p>{{stats.title}}</p>
                                    {{ stats.value }}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="card-footer">
                        <hr />
                        <div class="stats">
                            <i :class="stats.footerIcon"></i> {{ stats.footerText }}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { createNamespacedHelpers } from 'vuex';

const {mapGetters, mapActions} = createNamespacedHelpers('dashboard');

export default {
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
            ]
        };
    },
    mounted() {
        this.handleGetUserInfo();
    },
    methods: {
        ...mapActions(['handleGetUserInfo']),
    },
    computed: {
        ...mapGetters([
            'getIsLoggedIn',
            'getMessage'
        ]),
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
