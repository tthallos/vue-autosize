var autosize = require('autosize')

exports.install = function(Vue) {
  Vue.directive('autosize', {
    bind: function() {
      var self = this
      Vue.nextTick(function() {
        autosize(self.el)
      })
    },

    update: function(value) {
      var self = this
      Vue.nextTick(function() {
        self.el.value = value
        autosize.update(self.el)
      })
    },

    unbind: function() {
      autosize.destroy(this.el)
    }
  })
}
