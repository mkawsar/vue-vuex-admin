import localStorage from "../localStorage";

export default {
    roles: function() {
        return localStorage.get('roles');
    },

    can: function ($this, link) {
        if (! _.isUndefined(link.meta) && ! _.isUndefined(link.meta.roles)) {
            let storedRoles = this.roles();
            let linkRoles = link.meta.roles;
            if (_.isEqual(_.intersection(linkRoles , storedRoles), storedRoles)) {
                return true;
            } else {
                return false;
            }
        }
        return true;
    },

    hasRole: function (role) {
        let roles = this.roles();
        return roles.indexOf(role) >= 0;
    }
}