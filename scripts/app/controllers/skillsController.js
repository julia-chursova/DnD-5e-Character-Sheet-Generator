(function () {
	'use strict';

	angular.module(appName)
		.controller('skillsController', [
			'skillsModel',

			function (skillsModel) {
			    var lineCount = 25;

				var self = this;

				self.skills = function() {
                    return skillsModel.skills.toArray().concat(new Array(lineCount - skillsModel.count()));
                }
			}
		]);
})();