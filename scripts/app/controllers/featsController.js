(function () {
	'use strict';

	angular.module(appName)
		.controller('featsController', [
			'featsModel',
			function (featsModel) {
				var self = this;

				self.model = featsModel;
			}
		]);
})();