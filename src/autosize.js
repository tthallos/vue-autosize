var autosize = require('autosize')

module.exports = {
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
}
