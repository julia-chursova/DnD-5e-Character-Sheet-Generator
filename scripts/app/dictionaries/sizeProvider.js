(function () {
    'use strict';

    angular.module(appName)
        .factory('sizeProvider', function () {
            return {
                defaultSize: "Race Default",
                small: "Small",
                medium: "Medium"
            };
        });
})();