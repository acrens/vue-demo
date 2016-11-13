/**
 * vue 模板语法
 */
var vm = new Vue({
    el: '.J-dom',
    data: {
        message: 'i want you!!!',
        isDisabled: false
    },
    filters: {
        capitalize: function(value) {
            if (!value) return ''

            value = value.toString()

            return value.charAt(0).toUpperCase() + value.slice(1);
        }
    }
});
