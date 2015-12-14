var autosize = require('autosize')

exports.install = function(Vue) {
  Vue.directive('autosize', {
    bind: function() {
      autosize(this.el)
    },

    update: function(value) {
      this.el.value = value
      autosize.update(this.el)
    },

    unbind: function() {
      autosize.destroy(this.el)
    }
  })
}