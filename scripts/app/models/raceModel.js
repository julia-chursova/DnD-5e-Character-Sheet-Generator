(function() {
	'use strict';

	angular.module(appName)
		.factory('raceModel', [
			function () {
				// Absolutely useless. We need it to fix circular dependency.
				self.race = null;

				return self;
			}
		]);
})();