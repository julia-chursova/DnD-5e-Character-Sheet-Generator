(function () {
    'use strict';

    angular.module(appName)
        .factory('armorTypeProvider', function () {
            return {
                light: "Light",
                medium: "Medium",
                heavy: "Heavy"
            }
        });
})();