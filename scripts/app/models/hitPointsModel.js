(function() {
	'use strict';

	angular.module(appName)
		.factory('hitPointsModel', [
			function() {
				var self = this;

				self.maxHitPoints = 0;

				return self;
			}
		]);
})();