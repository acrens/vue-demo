/**
 * vue 实例
 */
var data = {
	'age': 24
};

var vm = new Vue({
	data: data,

	// 钩子函数
	created: function() {
		console.log('钩子函数 age:' + this.age);
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