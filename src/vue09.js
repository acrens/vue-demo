/**
 * vue Render 函数、自定义指令
 */

// 组件,实际上 Vue 模板编译成 render 函数
Vue.component('anchored-heading', {
    render: function(createElement) {
        return createElement(
            'h' + this.level, // tag name 标签名称
            this.$slots.default // 子组件中的阵列
        )
    },
    props: {
        level: {
            type: Number,
            required: true
        }
    }
});

// 自定义全局聚焦指令
Vue.directive('focus', {

    // 当绑定元素插入到 DOM 中。
    inserted: function(el) {
        el.focus();
    }
});

Vue.directive('demo', {
    bind: function(el, binding, vnode) {
        var s = JSON.stringify;
        el.innerHTML =
            'name: ' + s(binding.name) + '<br>' +
            'value: ' + s(binding.value) + '<br>' +
            'expression: ' + s(binding.expression) + '<br>' +
            'argument: ' + s(binding.arg) + '<br>' +
            'modifiers: ' + s(binding.modifiers) + '<br>' +
            'vnode keys: ' + Object.keys(vnode).join(', ');
    }
});

// 简写
Vue.directive('color-swatch', function(el, binding) {
    el.style.backgroundColor = binding.value
});

var vm = new Vue({
    el: '.J-dom',
    data: {
        message: 'i love you'
    }
});
