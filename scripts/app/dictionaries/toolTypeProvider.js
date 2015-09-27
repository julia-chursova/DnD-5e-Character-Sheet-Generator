(function () {
    'use strict';

    angular.module(appName)
        .factory('toolTypeProvider', function () {
            return {
                smith: "Smith",
                brewer: "Brewer",
                mason: "Mason",
                artisan: "Artisan"
            }
        });
})();