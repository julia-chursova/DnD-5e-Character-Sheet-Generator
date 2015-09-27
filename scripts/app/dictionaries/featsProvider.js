(function() {
    'use strict';

    angular.module(appName)
        .factory('featsProvider', function() {
            return {
                alert: {
                    name: "Alert"
                }
            }
        });
})();