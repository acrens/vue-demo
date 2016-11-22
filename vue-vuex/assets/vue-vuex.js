/**
 * vue vuex 练习
 */
'use strict';

// new Vue({
// 	// state
// 	data() {
// 		return {
// 			count: 0
// 		};
// 	},
// 	// view
// 	template: `
// 		<div>{{ count }}</div>
// 	`,
// 	// actions
// 	methods: {
// 		increment() {
// 			this.count++;
// 		}
// 	}
// });

// import { SOME_MUTATION } from './vue-mutation-const';

const store = new Vuex.Store({
	state: {
		count: 0,
		todos: [
			{id: 3, text: 'iverson', done: true},
			{id: 23, text: 'james', done: true},
			{id: 1, text: 'acrens', done: false},
			{id: 24, text: 'kobe', done: true}
		]
	},
	getters: {
		doneTodos: state => {
			return state.todos.filter(todo => todo.done);
		}
	},
	// 必须是同步函数
	mutations: {

		// n 为 payload
		increment(state, n) {
			state.count += (n || 0);
		},

		objIncrement(state, payload) {
			state.count += (payload.amount || 0);
		},

		// [SOME_MUTATION] (state) {
		// 	state.count *= 100;
		// }
	},
	// 可以使用异步函数
	actions: {
		// 上下文对象 (context object) 不是 store 实例自身
		// increment (content) {
		// 	content.commit('objIncrement');
		// }
		incrementAsync ({ commit }, payload) {
			setTimeout(() => {
		    	commit('objIncrement', payload);
		    }, 1000);
		}
	}
});

// 实际改变 状态(state) 的唯一方式是通过 提交(commit) 一个 mutation
/**
 * mutation:
 * 	type: increment
 * 	callback: param（state）
 */
store.commit('increment', 100);
store.commit({
	type: 'objIncrement',
	amount: 100
});

// 使用 store.dispatch 方法触发 action
store.dispatch('incrementAsync', {
	amount: 1000
});

const Counter = {
    template: `<div>{{ count }}</div>`,
    computed: {
        count() {
        	// 组件中下发 action
        	this.$store.dispatch('incrementAsync', {
				amount: 1000
			});

            return this.$store.state.count;
        }
    }
};

const vm = new Vue({
	// el: '.J-dom',
	// 使用 store 选项后，可以注册 store 对象。将会把 store 实例注入到所有子组件
	store,
	components: {
		Counter
	},
	template: `
		<div class="app">
			<counter></counter>
		</div>
	`
});

// 组件模块
const moduleA = {
	state: {
		num1: 0
	},
	mutations: {
		add(state, payload) {
			state.num1 += 10;
		}
	},
	actions: {
		addSync ({ commit }, payload) {
			setTimeout(() => {
		    	commit('add', payload);
		    }, 1000);
		}
	}
};

const moduleB = {
	state: {
		num2: 5
	},
	mutations: {
		multi(state, n) {
			state.num2 *= 5;
		}
	},
	actions: {
		multiSync ({ commit }, payload) {
			commit('multi', payload.n);
		}
	}
};

// sotre 多个模块
const module = new Vuex.Store({
	modules: {
		moduleA: moduleA,
		moduleB: moduleB
	}
});

