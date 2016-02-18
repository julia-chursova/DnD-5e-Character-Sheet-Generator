(function () {
	'use strict';

	angular.module(appName)
		.factory('skillsModel', [
			'skillsProvider',

			function (skillsProvider) {
			    var self = this;

				self.init = function() {
			        self.skills = skillsProvider.skillList();
				}

			    self.init();

			    // Calculable Properties
                self.count = function() {
                    return Object.keys(self.skills).length;
                }

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