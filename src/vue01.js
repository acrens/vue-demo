/**
 * vue 核心基础属性介绍
 */
// 自定义组件
Vue.component('todo-item', {
	props: ['item'],
	template: '<li>{{ item.text }}</li>'
});

var app = new Vue({
    el: '.J-dom',	// 盒子

    // 数据模型
    data: {
        message: 'hello word!!!',
        seen: true,
        items: [
            { text: 'Learn JavaScript' },
            { text: 'Learn Vue' },
            { text: 'Build something awesome' }
        ],
        todos: {
        	'acrens': 24,
        	'james': 31,
        	'wade': 33
        }
    },

    // 方法
    methods: {
    	reverseMsg: function() {
    		console.log(this);
    		var that = this;

    		that.message = that.message.split('').reverse().join('');
    	}
    }
});