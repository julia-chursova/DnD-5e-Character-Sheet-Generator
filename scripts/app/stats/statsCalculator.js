(function () {
    'use strict';

    angular.module(appName)
        .factory('statsCalculator', function () {
            var getModifier = function (statValue) {
                return Math.floor((statValue - 10) / 2);
            };

            return {
                getModifier: getModifier
            };
        });
})();