/**
 * vue 实例
 */
var data = {
    'age': 24
};

var vm = new Vue({
    el: '.J-dom',
    data: data,

    // 组件属性计算之前被调用，如:data
    beforeCreate: function() {
        console.log('beforeCreate:' + this.age);
    },

    // 属性绑定完成，但 DOM 为生成
    created: function() {
        console.log('created age:' + this.age);
    },

    // el 或 template 编译挂载之前(存在 el 或者 template 则执行)
    beforeMount: function() {
        console.log('beforeMount:' + this.age);
    },

    // el 或 template 编译挂载之后(存在 el 或者 template 则执行)
    mounted: function() {
        console.log('mounted:' + this.age);
    },

    // 组件更新之前（TODO:未执行）
    beforeUpdate: function() {
        console.log('beforeUpdate:' + this.age);
    },

    // 组件更新之后（TODO:未执行）
    updated: function() {
        console.log('updated:' + this.age);
    },

    // 组件被激活时调用（TODO:未执行）
    activated: function() {
        console.log('activated:' + this.age);
    },

    // 组件被移除时调用（TODO:未执行）
    deactivated: function() {
        console.log('deactivated:' + this.age);
    },

    // 组件被销毁之前
    beforeDestory: function() {
        console.log('beforeDestory:' + this.age);
    },

    // 组件被销毁之后
    destory: function() {
        console.log('destory:' + this.age);
    }
});

// 设置属性会影响原始数据
console.log('data age:' + data.age);
vm.age = 30;
console.log('data age changed:' + data.age);

console.log('vue age:' + vm.age);
data.age = 18;
console.log('vue age changed:' + vm.age);

// vue 暴露属性及方法
console.log('vue data:' + vm.$data);
vm.$watch('age', function(newVal, oldVal) {
	console.log('watch vue new age:' + newVal);
	console.log('watch vue old age:' + oldVal);
});
