(function () {
	'use strict';

	angular.module(appName)
		.factory('hitPointsModel', [
			function () {
				var self = this;

				self.baseHitPoints = '';
				self.hitPointsBonus = '';

				self.maxHitPoints = function () {
					return (self.hitPointsBonus || 0) + (self.baseHitPoints || 0);
				}

				return self;
			}
		]);
})();