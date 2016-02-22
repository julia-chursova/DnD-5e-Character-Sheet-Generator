(function () {
	'use strict';

	angular.module(appName)
		.controller('toolsController', [
			'proficienciesModel',
            'toolTypeProvider',

			function (proficienciesModel, toolTypeProvider) {
			    var self = this;

			    self.tools = function() {
			        return proficienciesModel.tools;
			    }

			    self.availableTools = toolTypeProvider;
			}
		]);
})();