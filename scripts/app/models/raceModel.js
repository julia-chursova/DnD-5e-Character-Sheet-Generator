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
			    self.raceChanged = function() {
			        if (!self.race)
			            return;

			        if (self.race.abilities) {
			            abilitiesModel.abilities = angular.extend([], self.race.abilities);
			        }

			        if (self.race.languages) {
			            languagesModel.languages = angular.extend([], self.race.languages);
			        }

			        if (self.race.armorProficiency) {
			            proficienciesModel.armor = { };

			            for (var i = 0; i < self.race.armorProficiency.length; i++) {
			                proficienciesModel.armor[race.armorProficiency[i]] = true;
			            }
			        }

			        if (race.weaponProficiency) {
			            proficienciesModel.weapons = {};

			            for (var i = 0; i < race.weaponProficiency.length; i++) {
			                proficienciesModel.weapons[race.weaponProficiency[i]] = true;
			            }
			        }

			        if (race.toolsProficiency) {
			            proficienciesModel.tools = angular.extend([], race.toolsProficiency);
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