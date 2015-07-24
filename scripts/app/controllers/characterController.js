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
            }]);
})();