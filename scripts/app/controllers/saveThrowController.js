(function() {
	'use strict';

	angular.module(appName)
		.controller('saveThrowController', [
			'saveThrowModel',
			'characterModel',
			'statsModel',

			function(saveThrowModel, characterModel, statsModel) {
				var self = this;

				self.saveThrows = saveThrowModel;
				self.character = characterModel;
				self.stats = statsModel;
			}
		]);
})();