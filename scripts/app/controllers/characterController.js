(function () {
    'use strict';

    angular.module(appName)
        .controller('characterController', [
            'characterModel',
            'statsModel',
            'traitsModel',
            'raceProvider',
			'classProvider',
            function (characterModel, statsModel, traitsModel, raceProvider, classProvider) {
                var self = this;

                self.model = characterModel;
                self.stats = statsModel;
                self.availableRaces = raceProvider;
	            self.availableClasses = classProvider;

                self.effectiveLevel = function () {
                    var level = self.model.effectiveLevel();

                    return level > 0 ? level : '-';
                };

                self.initiativeBonus = function () {
                    return self.model.initiativeBonus == 0 ? '' : self.model.initiativeBonus;
                };

                self.traitInitiativeBonus = function () {
                    return traitsModel.haveAlertFeat() ? '5' : '';
                }
            }]);
})();