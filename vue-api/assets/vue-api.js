/**
 * Vue API 练习
 */

// 取消所有的日志与警告
Vue.util.warn('foo'); // 发出一条警告
Vue.config.silent = true;
Vue.util.warn('foo');

// 自定义未捕获错误处理函数
Vue.config.errorHanlder = function(err, vm) {
    console.log('error handler vm constant ...')
};

// 自定义 v-on 键位别名，如：v-on:keyup.f1 = “submit”
Vue.config.keyCodes = {
    v: 86,
    f1: 112,
    mediaPlayPause: 179
};

// 创建构造器【TODO：error】
var Personal = Vue.extend({
	// template 必须要有一个根元素，如：p
    template: '<p>my name is {{name}}，I am age {{age}}，I love {{love}}</p>',
    data: function() {
        return {
            name: 'acrens',
            age: '24',
            love: 'xingxing'
        };
    }
});

// 挂载到 id="J-extend-component" 元素上，template 会替换挂在元素
new Personal().$mount('#J-extend-component');

var vm = new Vue({
    el: '.J-dom',	// 和 $mount 同作用，均为 Vue 实例挂载元素 
    data: {
        message: 'i love you'
    },
    methods: {
        submit: function(e) {
            console.log(e.target.value);
        }
    }
});

// DOM 下一次更新之后调用
vm.message = 'hello world!!!';
Vue.nextTick(function() {
    console.log(vm.message + ' DOM 已经更新了。');
});

// 编译字符串模板
var res = Vue.compile('<div><span>{{ msg }}</span></div>');
new Vue({
	el: '.J-dom1',
    data: {
        msg: 'yo yo yo yo ...'
    },
    render: res.render,
    staticRenderFns: res.staticRenderFns
});

// data 是 Object，或者定义组件时，必须是 function
// props 用于组件接收父组件传参
// propsData 创建实例时传递参数给 props
