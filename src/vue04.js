/**
 * vue 计算属性
 */
var vm = new Vue({
    el: '.J-dom',
    data: {
        message: 'thank you very much!!!',
        question: '',
        answer: 'I cannot give you an answer until you ask a question!'
    },

    watch: {

        // 如果 question 发生改变，这个函数就会运行(监听执行异步操作)
        question: function(newQuestion) {
            this.answer = 'Waiting for you to stop typing...'
            this.getAnswer()
        }
    },

    methods: {
        reverseMessage: function() {
            return this.message.split('').reverse().join('');
        },

        getAnswer: _.debounce(
            function() {
                var vm = this
                if (this.question.indexOf('?') === -1) {
                    vm.answer = 'Questions usually contain a question mark. ;-)'
                    return
                }
                vm.answer = 'Thinking...'
                axios.get('https://yesno.wtf/api')
                    .then(function(response) {
                        vm.answer = _.capitalize(response.data.answer)
                    })
                    .catch(function(error) {
                        vm.answer = 'Error! Could not reach the API. ' + error
                    })
            },
            // 这是我们为用户停止输入等待的毫秒数
            500
        )
    },

    // 计算属性
    computed: {

        // 将用作属性 vm.reversedMessage
        reversedMessage: function() {
            return this.message.split('').reverse().join('');
        }
    }
});
