var Vue = require('vue')
var autosize = require('./index')
var loremIpsum = require('lorem-ipsum')
Vue.use(autosize)

var App = new Vue({
  replace: false,
  el: '#app',
  data: function() {
    return {
      value: 'a Vue directive for autosize'
    }
  },
  methods: {
    reset: function() {
      this.value = loremIpsum({count: Math.floor(Math.random() * 30)})
    }
  }
})
