import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'

import 'bootstrap/dist/css/bootstrap.css'

import store from './store'
import App from './App'
import Home from './components/Home'
import TimeEntries from './components/TimeEntries.vue'

Vue.use(VueRouter)
Vue.use(VueResource)

const routes = [{
    path: '/',
    component: Home
}, {
    path: '/home',
    component: Home
}, {
    path: '/time-entries',
    component: TimeEntries,
    children: [{  // /time-entries/log-time 自路由，被 TimeEntries 模板渲染
        path: 'log-time',

        // 提升性能，懒加载
        component: resolve => require(['./components/LogTime.vue'], resolve),
    }]
}];

const router = new VueRouter({
    routes
})

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    store,
    template: '<App/>',
    components: { App }
})
