kindling.module(function () {
	'use strict';

	var isEnabled = false;

	function enableMinimalTitle(title) {
    var previousTitle = title;
    return previousTitle.substring(10);
	}

	function disableMinimalTitle(title) {
    var previousTitle = title;
    return "Campfire: " + previousTitle;
	}

	function onOptionsChanged(e, options) {
		if (!options) {
			return;
		}
		var newValue = options.minimalTitle === 'true';
		if (newValue !== isEnabled) {
			isEnabled = newValue;
      var oldTitle = document.title;
			if (isEnabled) {
				document.title = enableMinimalTitle(oldTitle);
			} else {
				document.title = disableMinimalTitle(oldTitle);
			}
		}
	}

	return {
		init: function () {
			$.subscribe('loaded optionsChanged', onOptionsChanged);
		}
	};
}());