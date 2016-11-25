<style src="todomvc-app-css/index.css"></style>

<template>
	<section class="todoapp">
	    <header class="header">
	    	<h1>VUE TODOS</h1>
	    	<input class="new-todo" autofocus autocomplete="off" placeholder="请输入内容并按回车键?" @keyup.enter="addTodo">
	    </header>

	    <section class="main" v-show="todos.length">
	    	<input class="toggle-all" type="checkbox" :checked="allChecked" @change="toggleAll({ done: !allChecked })">
	    	<ul class="todo-list">
	        	<todo v-for="todo in filteredTodos" :todo="todo"></todo>
	      	</ul>
	    </section>

	    <footer class="footer" v-show="todos.length">
		    <span class="todo-count">
		        <strong>{{ remaining }}</strong>
		        {{ remaining | pluralize('个项目') }}未完成
		    </span>
		    <ul class="filters">
		        <li v-for="(val, key) in filters">
		          	<a :href="'#/' + key" :class="{ selected: visibility === key }" @click="visibility = key">{{ key | capitalize }}</a>
		        </li>
		    </ul>
		    <button class="clear-completed" v-show="todos.length > remaining" @click="clearCompleted">清除已完成</button>
	    </footer>
	</section>
</template>

<script>
	import { mapMutations } from 'vuex'
	import Todo from './Todo.vue'

	const filters = {
		all: todos => todos,
		active: todos => todos.filter(todo => !todo.done),
		computed: todos => todos.filter(todo => todo.done)
	}

	export default {
		components: { Todo },

		data () {
			return {
				visibility: 'all',
			  	filters: filters
			}
		},

		computed: {
			todos () {
			  	return this.$store.state.todos
			},

			allChecked () {
			  	return this.todos.every(todo => todo.done)
			},

			filteredTodos () {
			  	return filters[this.visibility](this.todos)
			},

			remaining () {
			  	return this.todos.filter(todo => !todo.done).length
			}
		},

		methods: {
			addTodo (e) {
				var text = e.target.value

				if (text.trim()) {
				    this.$store.commit('addTodo', { text })
				}
				e.target.value = ''
			},

			...mapMutations([
			  	'toggleAll',
			  	'clearCompleted'
			])
		},

		filters: {
			pluralize: (n, w) => n === 1 ? w : (w + ''),
			// capitalize: s => s.charAt(0).toUpperCase() + s.slice(1)
			capitalize: s => {
				var text = '';

				switch(s.toUpperCase()) {
					case 'ALL': 
						text = '所有';
					break;

					case 'ACTIVE':
						text = '未完成';
					break;

					case 'COMPUTED':
						text = '已完成';
					break;
				}

				return text;
			}
		}
	}
</script>