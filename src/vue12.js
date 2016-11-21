/**
 * vue 路由、状态管理
 * @type {Object}
 */

// 为引入其他插件的简单路由
const NotFound = { template: '<p>Page not found</p>' }
const Home = { template: '<p>home page</p>' }
const About = { template: '<p>about page</p>' }
const routes = {
    '/': Home,
    '/about': About
}
new Vue({
    el: '.J-dom',
    data: {
        currentRoute: window.location.pathname
    },
    computed: {
        ViewComponent() {
            return routes[this.currentRoute] || NotFound
        }
    },
    render(h) {
        return h(this.ViewComponent);
    }
});

var store = {
    debug: true,
    state: {
        message: 'Hello!'
    },
    setMessageAction(newValue) {
        this.debug && console.log('setMessageAction triggered with', newValue)
        this.state.message = newValue
    },
    clearMessageAction() {
        this.debug && console.log('clearMessageAction triggered')
        this.state.message = 'action B triggered'
    }
};

var vmA = new Vue({
    data: {
        privateState: {},
        sharedState: store.state
    }
});

var vmB = new Vue({
    data: {
        privateState: {},
        sharedState: store.state
    }
});
