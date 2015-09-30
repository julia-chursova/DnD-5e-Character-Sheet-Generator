(function () {
    'use strict';

    angular.module(appName)
        .controller('characterController', [
            'characterModel',
			'raceModel',
            'statsModel',
            'featsModel',

            'raceProvider',
            'sizeProvider',
			'classProvider',
			'backgroundProvider',
            'featsProvider',

            function (
                characterModel,
                raceModel,
                statsModel,
                featsModel,

                raceProvider,
                sizeProvider,
                classProvider,
                backgroundProvider,
                featsProvider
            ) {
                var self = this;

                self.model = characterModel;
                self.raceModel = raceModel;
                self.stats = statsModel;
                self.availableRaces = raceProvider;
                self.availableSizes = sizeProvider;
                self.availableClasses = classProvider;
                self.availableBackgrounds = backgroundProvider;

                self.effectiveLevel = function () {
                    var level = self.model.effectiveLevel();

                    return level > 0 ? level : '-';
                };

                self.proficiencyBonus = function () {
                    var proficiencyBonus = self.model.proficiencyBonus();

                    return proficiencyBonus > 0 && self.model.effectiveLevel() > 0 ? proficiencyBonus : '-';
                }

                self.initiativeBonus = function () {
                    return self.model.initiativeBonus == 0 ? '' : self.model.initiativeBonus;
                };

                self.traitInitiativeBonus = function () {
                    return featsModel.haveFeat(featsProvider.alert) ? featsProvider.alert.bonus : '';
                }

                self.raceChanged = function() {
                    self.raceModel.raceChanged();
                }
            }]);
})();