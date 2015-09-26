(function () {
	'use strict';

	angular.module(appName)
		.controller('skillsController', [
			'skillsModel',

			function(skillsModel) {
				var self = this;

				self.model = skillsModel.skills;
			}
		]);
})();