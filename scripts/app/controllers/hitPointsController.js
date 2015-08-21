(function() {
	'use strict';

	angular.module(appName)
		.controller('hitPointsController', [
			'hitPointsModel',
			function(hitPointsModel) {
				var self = this;

				self.model = hitPointsModel;

				self.maxHitPoints = function() {
					return self.model.maxHitPoints() === 0 ? '' : self.model.maxHitPoints();
				}
			}
		]);
})();