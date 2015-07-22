(function () {
    'use strict';

    angular.module(appName)
        .factory('statsModel', function () {
            function getModifier(statValue) {
                return Math.floor((statValue - 10) / 2);
            }

            var self = this;

            self.strength = 0;

            self.strBonus = 0;

            self.strModifier = function () {
                return getModifier(self.strength) + parseInt(self.strBonus);
            };

            return self;
        });
})();