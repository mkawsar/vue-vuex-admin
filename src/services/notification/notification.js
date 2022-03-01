export default {
    notify($this, title, text) {
        let template = '<span><b>' + title + '</b> - ' + text + '</span>';
        this.notifyTemplate($this, 'top', 'right', template, 'ti-info-alt', 'success');
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
