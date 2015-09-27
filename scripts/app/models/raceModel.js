(function() {
	'use strict';

	angular.module(appName)
		.factory('raceModel', [
            'abilitiesModel',
            'spellcastingModel',
            'languagesModel',
            'proficienciesModel',

			function (abilitiesModel, spellcastingModel, languagesModel, proficienciesModel) {
			    self.race = null;

                // Events
			    self.raceChanged = function () {
			        angular.extend(abilitiesModel.abilities, self.race.abilities);
			        angular.extend(languagesModel.languages, self.race.languages);

			        var i;
			        if (race.armorProficiency) {
			            for (i = 0; i < race.armorProficiency.length; i++) {
			                proficienciesModel.armor[race.armorProficiency[i]] = true;
			            }
			        }

			        if (race.weaponProficiency) {
			            for (i = 0; i < race.weaponProficiency.length; i++) {
			                proficienciesModel.weapons[race.weaponProficiency[i]] = true;
			            }
			        }

			        if (race.toolsProficiency) {
			            proficienciesModel.tools =[];

                        for (i = 0; i < race.toolsProficiency.length; i++) {
                            proficienciesModel.tools.push(race.toolsProficiency[i]);
                        }
                    }

			        proficienciesModel.shieldProficiency = race.shieldProficiency || false;
			    }

                self.backgroundChanged = function() {
                    
                }

                // Methods
				self.exportData = function() {
					return self.race;
				}

				self.importData = function(data) {
					self.race = data.race;
				}

				return self;
			}
		]);
})();