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
                self.exportData = function () {
                    var result = [];

                    for (var skillName in self.skills) {
                        if (self.skills.hasOwnProperty(skillName)) {
                            var skill = self.skills[skillName];
                            result.push({
                                id: skillName,
                                haveProficiency: skill.haveProficiency,
                                miscBonus: skill.miscBonus
                            });
                        }
                    }

					return {
						skills: result
					}
				}

                self.importData = function (data) {
                    for (var i = 0; i < data.skills.length; i++) {
                        var info = data.skills[i];
                        var skill = self.skills[info.id];

                        if (skill) {
                            skill.haveProficiency = info.haveProficiency;
                            skill.miscBonus = info.miscBonus;
                        }
                    }
				}

				return self;
			}
		]);
})();