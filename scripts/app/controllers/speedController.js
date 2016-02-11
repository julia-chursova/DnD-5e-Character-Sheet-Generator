(function() {
	'use strict';

	angular.module(appName)
		.controller('speedController', [
			'speedModel',

			function(speedModel) {
				var self = this;

				self.model = speedModel;
			}
		]);
})();