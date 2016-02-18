(function () {
	'use strict';

	angular.module(appName)
		.factory('speedModel', [
			'raceModel',
            'armorModel',

			function (raceModel, armorModel) {
				var self = this;

			    self.init = function () {
			        self.userDefinedSpeed = '';
			    }

			    self.init();

				// Calculable field
				self.speed = function () {
					if (self.userDefinedSpeed)
						return self.userDefinedSpeed;

				    var baseSpeed = 0;
				    if (raceModel.race)
				        baseSpeed = (raceModel.race.speed || 0);

				    if (armorModel.reduceSpeed())
				        baseSpeed = Math.max(baseSpeed - 10, 0);

					return baseSpeed;
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