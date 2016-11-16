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

Vue.component('button-counter', {
    template: '<button v-on:click="increment">{{ counter }}</button>',
    data: function() {
        return {
            counter: 0
        }
    },
    methods: {
        increment: function() {
            var that = this;
            that.counter += 1;
            that.$emit('increments');    // 触发父组件上的 increment 自定义事件
        }
    },
});

Vue.component('hello-world', {
    template: '#hello-world-template'
});

Vue.component('my-input', {
    template: '\
        <div class="form-group">\
          <label v-bind:for="randomId">{{ label }}:</label>\
          <input v-bind:id="randomId" v-bind:value="value" v-on:input="onInput">\
        </div>\
    ',
    props: ['value', 'label'],
    data: function() {
        return {
            randomId: 'input-' + Math.random()
        }
    },
    methods: {
        onInput: function(event) {
            this.$emit('input', event.target.value);    // 触发父组件 input
        }
    }
});

// 局部注册一个组件
var Child = {
    template: '<div>local A custom component {{ result }} - {{ dynamicResult }}!</div>',

    // 声明 props（单向数据流）
    // 1、props 可以是一个对象，可以为每个属性指定类型、验证规则及是否必填等
    props: ['result', 'dynamicResult'] // 父组件通过 props 传递参数给子组件（dynamicResult -》 dynamic-result)
};

var Child03 = {
    template: '<div>local A custom component03 {{ result }} - {{ dynamicResult }}!</div>',

    // 声明 props（单向数据流）
    // 1、props 可以是一个对象，可以为每个属性指定类型、验证规则及是否必填等
    props: ['result', 'dynamicResult'] // 父组件通过 props 传递参数给子组件（dynamicResult -》 dynamic-result)
};

var vm = new Vue({
    el: '.J-dom',
    data: {
        message: 'i love you', // 动态改变子组件内容 - dynamicResult
        currentView: 'component02'
    },
    methods: {

    },
    computed: {

    },
    components: {
        'component02': Child,
        'component03': Child03
    }
});

new Vue({
    el: '#counter-event-example',
    data: {
        total: 0
    },
    methods: {
        incrementTotal: function() {
            this.total += 1;
        }
    }
});

new Vue({
    el: '#v-model-example',
    data: {
        message: 'hello 你们在干嘛'
    }
});

