/**
 * vue 组件(组件也可以是原生 HTML 元素的形式，以 is 特性扩展)
 */

// 全局注册一个组件
Vue.component('component01', {
    template: '<div>global A custom component {{ message }}!</div>',

    // data 必须是一个函数
    data: function() {
    	return {
    		message: 'i love you...'
    	};
    }
});


// 局部注册一个组件
var Child = {
    template: '<div>local A custom component {{ result }} - {{ dynamicResult }}!</div>',

    // 声明 props（单向数据流）
    // 1、props 可以是一个对象，可以为每个属性指定类型、验证规则及是否必填等
    props: ['result', 'dynamicResult']	// 父组件通过 props 传递参数给子组件（dynamicResult -》 dynamic-result)
};

var vm = new Vue({
    el: '.J-dom',
    data: {
    	message: 'i love you'	// 动态改变子组件内容 - dynamicResult
    },
    methods: {

    },
    computed: {

    },
    components: {
        'component02': Child
    }
});
