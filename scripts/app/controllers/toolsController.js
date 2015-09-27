(function () {
	'use strict';

	angular.module(appName)
		.controller('toolsController', [
			'proficienciesModel',

			function (proficienciesModel) {
			    var self = this;

			    self.proficiencies = proficienciesModel;
			}
		]);
})();