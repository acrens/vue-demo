/**
 * vue Class 与 Style 绑定 & 条件渲染 & 列表渲染
 */
var vm = new Vue({
    el: '.J-dom',
    data: {
        isActive: false, // ''、null、undefined、0 均表示为 false
        hasError: true,
        classObject: {
            active: true,
            'text-danger': false
        },
        activeClass: 'active',
        errorClass: 'text-danger',
        styleObject: {
        	color: 'red',
        	fontSize: '20px'
        },

        ok: true,

        items: [
            {text: 1},
            {text: 2},
            {text: 3},
            {text: 4}
        ],
        objs: {
            1: 'acrens',
            2: 'james',
            3: 'iverson',
            4: 'wade'
        }
    }
});

// todo list 示例
var vmTodos = new Vue({
    el: '.J-todos-lst',
    data: {
        newTodoText: '',
        todos: [
            'hello, coco',
            'you see see'
        ]
    },
    methods: {
        addNewTodo: function() {
            var that = this;
            that.todos.push(that.newTodoText);
            that.newTodoText = '';
        }
    }
});