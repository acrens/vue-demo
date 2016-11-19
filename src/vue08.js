/**
 * vue 深入响应式原理、过渡效果、过渡状态
 */

// Object.defineProperty

var vm = new Vue({
    el: '.J-dom',
    data: {
        message: 'acrens',
        show: true,
        hide: false
    },
    methods: {
        beforeEnter: function(el) {
            el.style.opacity = 0;
        },
        enter: function(el, done) {
            Velocity(el, { opacity: 1, fontSize: '1.4em' }, { duration: 300 });
            Velocity(el, { fontSize: '1em' }, { complete: done });
        },
        leave: function(el, done) {
            Velocity(el, { translateX: '15px', rotateZ: '50deg' }, { duration: 600 });
            Velocity(el, { rotateZ: '100deg' }, { loop: 2 });
            Velocity(el, {
                rotateZ: '45deg',
                translateY: '30px',
                translateX: '30px',
                opacity: 0
            }, { complete: done });
        }
    }
});

vm.message = 'james';
console.log(vm.$el.textContent.trim() === 'james');

// Vue.nextTick(callback) callback 回调会在 DOM 更新完成之后会被调用
Vue.nextTick(function() {

    // el 里面只有 message 时才为 true
    console.log(vm.$el.textContent.trim() === 'james');
});

var vm1 = new Vue({
    el: '#list-demo',
    data: {
        items: [1, 2, 3, 4, 5, 6, 7, 8, 9],
        nextNum: 10
    },
    methods: {
        randomIndex: function() {
            return Math.floor(Math.random() * this.items.length)
        },
        add: function() {
            this.items.splice(this.randomIndex(), 0, this.nextNum++)
        },
        remove: function() {
            this.items.splice(this.randomIndex(), 1)
        },
    }
});
