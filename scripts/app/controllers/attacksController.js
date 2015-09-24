(function () {
    'use strict';

	angular.module(appName)
		.controller('attacksController', [
			'attacksModel',
			'statsModel',
			'characterModel', 

			function(attacksModel, statsModel, characterModel) {
				var self = this;

				self.attacks = attacksModel.attacks;
				self.stats = statsModel;
				self.character = characterModel;
			}
		]);
})();