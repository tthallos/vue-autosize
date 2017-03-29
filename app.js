var autosize = require('./index')
var loremIpsum = require('lorem-ipsum')
Vue.use(autosize)
Vue.config.devtools = true
var App = new Vue({
  replace: false,
  el: '#app',
  data: function() {
    return {
      tab: 'textarea',
      value: 'a Vue directive for autosize'
    }
  },
  methods: {
    reset: function() {
      this.value = loremIpsum({count: Math.floor(Math.random() * 30)})
    }
  }
})
