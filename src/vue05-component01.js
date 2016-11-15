/**
 * 自定义组件
 */
Vue.component('todo-item', {
	template: '\
		<li>\
			{{ title }}\
			<button v-on:click="$emit(\'remove\')">❌</button>\
		</li>\
	',
	props: ['title']
});