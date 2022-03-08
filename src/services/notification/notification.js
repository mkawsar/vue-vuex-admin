export default {
    notify($this, title, text) {
        let template = '<span><b>' + title + '</b> - ' + text + '</span>';
        this.notifyTemplate($this, 'top', 'right', template, 'ti-info-alt', 'success');
    },

    error($this, title, text) {
        let template = '<span><b>' + title + '</b> - ' + text + '</span>';
        this.notifyTemplate($this, 'top', 'right', template, 'ti-info-alt', 'danger');
    },

    notifyValidationErrors($this, notifications) {
        if (typeof notifications === 'string') {
            let template = '<span><b>' + title + '</b> - ' + text + '</span>';
            this.notifyTemplate($this, 'top', 'right', template, 'ti-info-alt', 'danger');
        } else if (notifications.constructor === Array) {
            let template = '<ul style="list-style-type: disc">';
            for (let key in notifications) {
                if (notifications.hasOwnProperty(key)) {
                    template += '<li>' + notifications[key] + '</li>';
                }
            }
            template += '</ul>';
            this.notifyTemplate($this, 'top', 'right', template, 'ti-info-alt', 'danger');
        }

    },

    notifyError($this, notifications) {
        if (notifications.hasOwnProperty('message')) {
            if (typeof notifications.message === 'string') {
                let template = '<span><b>Oops!</b> - ' + notifications.message + '</span>';
                this.notifyTemplate($this, 'top', 'right', template, 'ti-info-alt', 'danger');
            } else if (typeof notifications.message === 'object') {
                let template = '<ul>';
                for (let key in notifications.message) {
                    if (notifications.message.hasOwnProperty(key)) {
                        template += '<li>' + notifications.message[key][0] + '</li>';
                    }
                }
                template += '</ul>';
                this.notifyTemplate($this, 'top', 'right', template, 'ti-info-alt', 'danger');
            }
        }
    },

    notifyTemplate($this, verticalAlign, horizontalAlign, template, icon, type) {
        $this.$notify({
            component: {
                template: template
            },
            icon: icon,
            horizontalAlign: horizontalAlign,
            verticalAlign: verticalAlign,
            type: type
        });
    }
}
