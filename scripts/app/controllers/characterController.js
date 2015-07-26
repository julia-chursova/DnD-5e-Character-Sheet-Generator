(function () {
    'use strict';

    angular.module(appName)
        .controller('characterController', [
            'characterModel',
            'raceProvider',
            function (characterModel, raceProvider) {
                var self = this;

                self.model = characterModel;
                self.availableRaces = raceProvider;

                self.effectiveLevel = function () {
                    var level = self.model.effectiveLevel();

                    return level > 0 ? level : '-';
                };

                self.removeClass = function (characterClass) {
                    self.model.removeClass(characterClass);
                };
            }]);
})();