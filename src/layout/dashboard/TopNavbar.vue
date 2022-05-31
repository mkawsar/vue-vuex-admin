<template>
    <nav class="navbar navbar-default">
        <div class="container-fluid">
            <div class="navbar-minimize">
                <button class="btn btn-fill btn-icon" @click="minimizeSidebar">
                    <i :class="$sidebar.showSidebar ? 'ti-menu-alt' : 'ti-more-alt'"></i>
                </button>
            </div>
            <div class="navbar-header">
                <button type="button" class="navbar-toggle" :class="{toggled: $sidebar.showSidebar}" @click="toggleSidebar">
                    <span class="sr-only">Toggle navigation</span>
                    <span class="icon-bar bar1"></span>
                    <span class="icon-bar bar2"></span>
                    <span class="icon-bar bar3"></span>
                </button>
                <a class="navbar-brand">{{this.$route.meta.title || 'Title Goes Here' }}</a>
            </div>
        </div>
    </nav>
</template>
<script>
export default {
    computed: {
        routeName() {
            const {meta, name} = this.$route;
            let headerName = meta.title || name;
            return this.capitalizeFirstLetter(headerName);
        }
    },
    data() {
        return {
            activeNotifications: false
        };
    },
    methods: {
        capitalizeFirstLetter(string) {
            return string.charAt(0).toUpperCase() + string.slice(1);
        },
        toggleNotificationDropDown() {
            this.activeNotifications = !this.activeNotifications;
        },
        closeDropDown() {
            this.activeNotifications = false;
        },
        toggleSidebar() {
            this.$sidebar.displaySidebar(!this.$sidebar.showSidebar);
        },
        hideSidebar() {
            this.$sidebar.displaySidebar(false);
        },
        minimizeSidebar () {
            this.$sidebar.displaySidebar(!this.$sidebar.showSidebar)
            //this.$sidebar.toggleMinimize(this.$store);
        }
    }
};
</script>
<style>
</style>
