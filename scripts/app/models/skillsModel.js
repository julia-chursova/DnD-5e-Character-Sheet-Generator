(function () {
	'use strict';

	angular.module(appName)
		.factory('skillsModel', [
			'skillsProvider',
            'abilityProvider',
            'abilitiesModel',
            'statsModel',
            'characterModel',

			function (skillsProvider, abilitiesProvider, abilitiesModel, statsModel, characterModel) {
			    var self = this;

			    var baseSkills = skillsProvider.getSkills();

				// Fields
			    self.skills = function () {
			        var skills = baseSkills.slice();

				    if (abilitiesModel.abilities.indexOf(abilitiesProvider.stonecunning) >= 0) {
				        skills.push(skillsProvider.originsOfStone);
                    }

				    return skills;
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