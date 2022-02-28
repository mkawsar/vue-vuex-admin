<template>
    <card title="Notifications Places" sub-title="Click to view notifications">
        <div class="card-content">
            <div class="places-buttons">
                <div class="row d-flex justify-content-center">
                    <div class="col-md-3">
                        <p-button round outline block @click.native="notifyVue('top', 'left')">Top Left</p-button>
                    </div>
                    <div class="col-md-3">
                        <p-button round outline block @click.native="notifyVue('top', 'center')">Top Center</p-button>
                    </div>
                    <div class="col-md-3">
                        <p-button round outline block @click.native="notifyVue('top', 'right')">Top Right</p-button>
                    </div>
                </div>
                <div class="row d-flex justify-content-center">
                    <div class="col-md-3">
                        <p-button round outline block @click.native="notifyVue('bottom', 'left')">Bottom Left</p-button>
                    </div>
                    <div class="col-md-3">
                        <p-button round outline block @click.native="notifyVue('bottom', 'center')">Bottom Center
                        </p-button>
                    </div>
                    <div class="col-md-3">
                        <p-button round outline block @click.native="notifyVue('bottom', 'right')">Bottom Right
                        </p-button>
                    </div>

                </div>
            </div>
        </div>
    </card>
</template>
<script>
import NotificationTemplate from './Notifications/NotificationTemplate';

export default {
    data() {
        return {
            type: ["", "info", "success", "warning", "danger"],
            notifications: {
                topCenter: false
            }
        };
    },
    methods: {
        notifyVue(verticalAlign, horizontalAlign) {
            const color = Math.floor(Math.random() * 4 + 1);
            this.$notify({
                component: NotificationTemplate,
                icon: "ti-gift",
                horizontalAlign: horizontalAlign,
                verticalAlign: verticalAlign,
                type: this.type[color]
            });
        }
    }
};
</script>
<style>
</style>
