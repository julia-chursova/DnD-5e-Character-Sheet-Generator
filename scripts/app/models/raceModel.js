(function() {
	'use strict';

	angular.module(appName)
		.factory('raceModel', [
            'abilitiesModel',
            'spellcastingModel',

			function (abilitiesModel, spellcastingModel) {
			    self.race = null;

                // Events
			    self.raceChanged = function () {
			        angular.extend(abilitiesModel.abilities, self.race.abilities);
			        angular.extend(spellcastingModel.spells, self.race.spells);
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