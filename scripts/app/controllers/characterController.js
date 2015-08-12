(function () {
    'use strict';

    angular.module(appName)
        .controller('characterController', [
            'characterModel',
			'raceModel',
            'statsModel',
            'traitsModel',
            'raceProvider',
			'classProvider',
            function (characterModel, raceModel, statsModel, traitsModel, raceProvider, classProvider) {
                var self = this;

                self.model = characterModel;
	            self.raceModel = raceModel;
                self.stats = statsModel;
                self.availableRaces = raceProvider;
	            self.availableClasses = classProvider;

                self.effectiveLevel = function () {
                    var level = self.model.effectiveLevel();

                    return level > 0 ? level : '-';
                };

				self.proficiencyBonus = function() {
					var proficiencyBonus = self.model.proficiencyBonus();

					return proficiencyBonus > 0 && self.model.effectiveLevel() > 0 ? proficiencyBonus : '-';
				}

                self.initiativeBonus = function () {
                    return self.model.initiativeBonus == 0 ? '' : self.model.initiativeBonus;
                };

                self.traitInitiativeBonus = function () {
                    return traitsModel.haveAlertFeat() ? '5' : '';
                }
            }]);
})();