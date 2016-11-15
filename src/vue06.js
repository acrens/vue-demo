/**
 * Vue 事件处理器、表单控件绑定
 */
var vm = new Vue({
    el: '.J-dom',
    data: {
        counter: 0,
        message: ' acrens james  '
    },
    methods: {
        greet: function(e) {
            alert(e.target.tagName);
        },
        warn: function(message, event) {

            // 现在我们可以访问原生事件对象
            if (event) event.preventDefault()
            alert(message)
        },
        submit: function(e) {
        	alert(e.target.value);
        }
    }
});

// 按键修饰符别名设置
// Vue.config.keyCodes.f1 = 112;