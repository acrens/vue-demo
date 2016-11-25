// 浏览器存储数据 key
export const STORAGE_KEY = 'todos-vuejs'
if(navigator.userAgent.indexOf('PhantomJS') > -1) {
	window.localStorage.clear();
}

// 组件状态
export const state = {
	todos: JSON.parse(window.localStorage.getItem(STORAGE_KEY) || '[]')
};

// mutations 对象
export const mutations = {
	addTodo (state, { text }) {
		state.todos.push({
			text,
			done: false
		});
	},

	deleteTodo (state, { todo }) {
		state.todos.splice(state.todos.indexOf(todo), 1);
	},

	toggleTodo (state, { todo }) {
		todo.done = !todo.done;
	},

	editTodo (state, { todo, value }) {
		todo.text = value;
	},

	toggleAll (state, { done }) {
		state.todos.forEach((todo) => {
			todo.done = done;
		});
	},

	clearCompleted (state) {
		state.todos = state.todos.filter(todo => !todo.done);
	}
};