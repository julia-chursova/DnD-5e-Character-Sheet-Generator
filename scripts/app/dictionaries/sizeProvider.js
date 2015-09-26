(function () {
    'use strict';

    angular.module(appName)
        .factory('sizeProvider', function () {
            return {
                defaultSize: "Default",
                small: "Small",
                medium: "Medium"
            };
        });
})();