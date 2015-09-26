(function () {
	'use strict';

	angular.module(appName)
		.factory('speedModel', [
			'raceModel',

			function (raceModel) {
				var self = this;

				// Fields
				self.userDefinedSpeed = '';


				// Calculable field
				self.speed = function () {
					if (self.userDefinedSpeed)
						return self.userDefinedSpeed;

					if (raceModel.race)
						return raceModel.race.speed || 0;

					return 0;
				}

				// Methods
				self.exportData = function () {
					return {
						userDefinedSpeed: self.userDefinedSpeed
					}
				}

				self.importData = function (data) {
					self.userDefinedSpeed = data.userDefinedSpeed;
				}

				return self;
			}
		]);
})();