(function () {
	'use strict';

	angular.module(appName)
		.controller('moneyController', [
			'moneyModel',

			function (moneyModel) {
				var self = this;

				self.model = moneyModel;
			}
		]);
})();