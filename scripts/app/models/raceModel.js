(function() {
	'use strict';

	angular.module(appName)
		.factory('raceModel', [
			function () {
				// Absolutely useless. We need it to fix circular dependency.
				self.race = null;

				self.exportData = function() {
					return self.race;
				}

				self.importData = function(data) {
					self.race = data.race;
				}

				return self;
			}
		]);
})();