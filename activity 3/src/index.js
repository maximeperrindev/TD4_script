import $ from 'jquery';

$(document).ready(function() {
    console.log('Ready')
});

var app = new Vue({
    el: '#myDiv',
    data: {
        seen: true
    }
})
var app3 = new Vue({
    el: '#form-user',
    data: {
        message: "",
        users: []
    },
    methods: {
        submitUser: function() {
            this.users.push(this.message)
        }
    }
})