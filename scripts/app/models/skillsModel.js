(function () {
	'use strict';

	angular.module(appName)
		.factory('skillsModel', [
			'skillsProvider',

			function (skillsProvider) {
			    var self = this;

				// Fields
                self.skills = skillsProvider.skillList();

				// Methods
				self.exportData = function() {
					return {
						skills: self.skills
					}
				}

				self.importData = function(data) {
					self.skills = data.skills;
				}

				return self;
			}
		]);
})();