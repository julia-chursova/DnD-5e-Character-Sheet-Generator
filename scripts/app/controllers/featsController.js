(function () {
	'use strict';

	angular.module(appName)
		.controller('featsController', [
			'featsModel',
            'featsProvider',

			function (featsModel, featsProvider) {
				var self = this;

				self.feats = featsModel.feats;
			    self.availableFeats = featsProvider;
			}
		]);
})();