import moment from 'moment';
export default {
    methods: {
        formatDate(value, fmt) {
            if (value == null) return '';
            fmt = (typeof fmt == 'undefined') ? 'D MMM YYYY' : fmt;
            return moment(value, 'YYYY-MM-DD').format(fmt)
        }
    }
}