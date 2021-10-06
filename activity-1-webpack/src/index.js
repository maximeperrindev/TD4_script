var app = new Vue({
    el: '#app',
    data: {
        message: 'Hello Vue !'
    }
})
var app2 = new Vue({
    el: '#app-2',
    data: {
        message: 'hello',
        count: '0'
    },
    methods: {
        reverseMessage: function() {
            this.message = this.message.split('').reverse().join('')
            this.count = (parseInt(this.count) + 1).toString()
        }
    }
})