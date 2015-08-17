(function() {
	'use strict';

	angular.module(appName)
		.controller('hitPointsController', [
			'hitPointsModel',
			function(hitPointsModel) {
				var self = this;

				self.model = hitPointsModel;
			}
		]);
})();