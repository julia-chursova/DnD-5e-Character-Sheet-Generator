(function() {
	'use strict';

	angular.module(appName)
		.factory('speedModel', [
			'raceModel',
			function (raceModel) {
				var self = this;

				self.userDefinedSpeed = '';

				self.speed = function() {
					if (self.userDefinedSpeed)
						return self.userDefinedSpeed;

					if (raceModel.race)
						return raceModel.race.speed || 0;

					return 0;
				}

				return self;
			}
		]);
})();