(function () {
    'use strict';

    angular.module(appName)
        .factory('traitsModel', function () {
            return [{
                name: 'example',
                description: 'wtf'
            }];
        });
})();