/**
 * vue 混合、插件
 */

// 定义一个混合对象(注：混合对象的钩子将在组件自身钩子之前调用)
var myMixin = {
    created: function() {
        this.hello()
    },
    methods: {
        hello: function() {
            console.log('hello from mixin!')
        }
    }
};

// 定义一个使用混合对象的组件
var Component = Vue.extend({
    mixins: [myMixin]
});

var component = new Component();

var vm = new Vue({
    el: '.J-dom',
    mixins: [myMixin],
    created: function() {
        console.log('component hook called')
    }
});

// 选项合并(注：methods, components 和 directives，将被混合为同一个对象。 两个对象键名冲突时，取组件对象的键值对)
var mixin = {
    methods: {
        foo: function() {
            console.log('foo')
        },
        conflicting: function() {
            console.log('from mixin')
        }
    }
};

var vm1 = new Vue({
    el: '.J-dom',
    mixins: [mixin],
    methods: {
        bar: function() {
            console.log('bar')
        },
        conflicting: function() {
            console.log('from self')
        }
    }
});

vm1.foo() // -> "foo"
vm1.bar() // -> "bar"
vm1.conflicting() // -> "from self"

// Vue 插件开发
var MyPlugin = {};

MyPlugin.install = function(Vue, options) {

    // 1. 添加全局方法或属性
    Vue.myGlobalMethod = function() {
    	console.log('myGlobalMethod ... ');
   	};
    
    // 2. 添加全局资源
    Vue.directive('my-directive', {
        bind(el, binding, vnode, oldVnode) {
        	console.log('directive ... ' + binding.value);
        }
    });

	// 3. 注入组件
    Vue.mixin({
        created: function() {
        	console.log('mixin created ... ');
       	}
    });

    // 4. 添加事例方法
    Vue.prototype.$myMethod = function(options) {
    	console.log('prototype mtMethod ... ');
    }
};

// MyPlugin.install(Vue);
Vue.use(MyPlugin, { someOption: true });
Vue.myGlobalMethod();

var vm2 = new Vue({
	el: '.J-direct',
	data: {
		message: 'i love you'
	}
});

vm2.$myMethod({});
