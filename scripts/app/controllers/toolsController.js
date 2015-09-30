(function () {
	'use strict';

	angular.module(appName)
		.controller('toolsController', [
			'proficienciesModel',
            'toolTypeProvider',

			function (proficienciesModel, toolTypeProvider) {
			    var self = this;

			    self.proficiencies = proficienciesModel.tools;
			    self.availableTools = toolTypeProvider;
			}
		]);
})();