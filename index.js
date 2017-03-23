// autosize will enable autosizing of textareas with the autosize plugin
import autosize from 'autosize';

const AutosizePlugin = {
	install: function(Vue, options) {

		Vue.directive('autosize', {
			// add autosize functionality for textareas (requires the autosize library)
			bind(el) {
				Vue.nextTick(function() {
					autosize(el);
				});

			},
			update(el) {
				Vue.nextTick(function() {
					autosize.update(el);
				});
			},
			unbind(el) {
				autosize.destroy(el);
			}
		});

	}
};

export default AutosizePlugin;
