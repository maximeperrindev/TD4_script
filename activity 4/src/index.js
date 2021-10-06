import $ from 'jquery';

$(document).ready(function() {
    console.log('Ready')
});
Vue.component('button-counter', {
    template: `
    <div class="counter">
      <h3>Counter</h3>
      <input type="number" v-model="incr">
      <div>
        <input type="number" v-model="value">
        <button v-on:click="setCounter">Set the counter to {{value}}</button>
      </div>
      <button v-on:click="addIncr">You clicked {{count}}</button>
    </div>
  `,
    methods: {
        addIncr: function() {
            this.count = this.count + parseInt(this.incr)
        },
        setCounter: function() {
            this.count = parseInt(this.value)
        }
    },
    data: function() {
        return {
            count: 0,
            incr: 1,
            value: 0
        }
    }
})
new Vue({ el: '#btn-grp' })