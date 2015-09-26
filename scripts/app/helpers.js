(function() {
    'use strict';

    angular.module(appName)
        .factory('helpers', function () {
            function isInteger(value) {
                var parsed = parseInt(value);

                return !isNaN(parsed) && isFinite(parsed);
            }

            return {
                isInteger: isInteger
            }
        });
})();