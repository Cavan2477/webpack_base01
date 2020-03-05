import $ from 'jquery'
import './main.css'
import './main.scss'
import './main.less'
import Vue from 'vue'
import test from './test.vue'

$('#test').text('August')

// class Person {
//   static info = {
//     name: 'cavan',
//     age: 20
//   }
// }

// console.log(Person.info)

var vm = new Vue({
  el: '#app',
  render: function(h) {
    return h(test)
  }
})