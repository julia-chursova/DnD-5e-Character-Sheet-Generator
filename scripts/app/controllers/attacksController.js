(function () {
    'use strict';

	angular.module(appName)
		.controller('attacksController', [
			'attacksModel',
			'statsModel',
			function(attacksModel, statsModel) {
				var self = this;

				self.attacks = attacksModel.attacks;
				self.stats = statsModel;
			}
		]);
})();