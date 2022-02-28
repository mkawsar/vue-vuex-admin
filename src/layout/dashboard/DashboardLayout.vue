<template>
    <div class="wrapper">
        <side-bar>
            <template slot="links">
                <sidebar-link v-for="(route, index) in routes" :key="`${index}`" :to="`${route.path}`" :name="`${route.name}`" :icon="`${route.icon}`"/>
                <!-- <sidebar-link to="/stats" name="User Profile" icon="ti-user"/>
                <sidebar-link to="/table-list" name="Table List" icon="ti-view-list-alt"/>
                <sidebar-link to="/typography" name="Typography" icon="ti-text"/>
                <sidebar-link to="/icons" name="Icons" icon="ti-pencil-alt2"/>
                <sidebar-link to="/maps" name="Map" icon="ti-map"/>
                <sidebar-link to="/notifications" name="Notifications" icon="ti-bell"/> -->
            </template>
        </side-bar>
        <div class="main-panel">
            <top-navbar></top-navbar>

            <dashboard-content @click.native="toggleSidebar">

            </dashboard-content>

            <content-footer></content-footer>
        </div>
    </div>
</template>
<style lang="scss">
</style>
<script>
import TopNavbar from "./TopNavbar.vue";
import ContentFooter from "./ContentFooter.vue";
import DashboardContent from "./Content.vue";
import MobileMenu from "./MobileMenu";

export default {
    data() {
        return {
            routes: []
        }
    },
    components: {
        TopNavbar,
        ContentFooter,
        DashboardContent,
        MobileMenu
    },
    methods: {
        toggleSidebar() {
            if (this.$sidebar.showSidebar) {
                this.$sidebar.displaySidebar(false);
            }
        }
    },
    created() {
        let roles = this.$localStorage.get('roles');
        this.$router.getRoutes().forEach(route => {
            if (Object.keys(route.meta).length > 0 && route.meta['requiresAuth'] == true) {
                let routeRoles = route.meta;
                if (routeRoles.hasOwnProperty('roles') && routeRoles['roles'] !== 'undefined') {
                    const intersection = roles.filter(element => routeRoles['roles'].indexOf(element) !== -1);
                    if (intersection.length > 0) {
                        let obj = {};
                        obj.name = route.meta.title;
                        obj.icon = route.meta.icon;
                        obj.path = route.path;
                        this.routes.push(obj);
                    }
                }
            }
        });
    }
};
</script>
