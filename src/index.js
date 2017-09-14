var autosize = require('autosize')
var autoSizeInput = require('autosize-input')

exports.install = function(Vue) {
  Vue.directive('autosize', {
    bind: function(el, binding) {
      var tagName = el.tagName
      if (tagName == 'TEXTAREA') {
        autosize(el)
      } else if (tagName == 'INPUT' && el.type == 'text') {
        autoSizeInput(el)
      }
    },

    componentUpdated: function(el, binding, vnode) {
      var tagName = el.tagName
      if (tagName == 'TEXTAREA') {
        autosize.update(el)
      } else if (tagName == 'INPUT' && el.type == 'text') {
        autoSizeInput(el)
      }
    },

    unbind: function(el) {
      autosize.destroy(el)
    }
  })
}
