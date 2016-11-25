/**
 * 应用入口文件
 */
import 'babel-polyfill'
import Vue from 'vue'
import store from './store'
import App from './components/App.vue'

new Vue({
	el: '#app',
	store,
	render: h => h(App)
});