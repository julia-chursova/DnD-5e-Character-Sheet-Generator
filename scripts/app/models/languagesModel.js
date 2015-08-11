(function () {
    'use strict';

	angular.module(appName)
		.factory('languagesModel', function () {
			var maxLanguages = 15;

			var languages = [];

			for (var i = 0; i < maxLanguages; i++) {
				languages.push('');
			}

			return languages;
		});
})();