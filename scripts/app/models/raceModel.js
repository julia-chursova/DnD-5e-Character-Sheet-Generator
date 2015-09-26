(function() {
	'use strict';

	angular.module(appName)
		.factory('raceModel', [
            'abilitiesModel',
            'spellcastingModel',
            'languagesModel',

			function (abilitiesModel, spellcastingModel, languagesModel) {
			    self.race = null;

                // Events
			    self.raceChanged = function () {
			        angular.extend(abilitiesModel.abilities, self.race.abilities);
			        angular.extend(spellcastingModel.spells, self.race.spells);
			        angular.extend(languagesModel.languages, self.race.languages);
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