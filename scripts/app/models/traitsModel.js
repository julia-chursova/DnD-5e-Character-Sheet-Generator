(function () {
    'use strict';

    angular.module(appName)
        .factory('traitsModel', function () {
            var traits = [
                {
                    name: 'example',
                    description: 'wtf'
                }];

            var haveAlertFeat = function () {
                return false;
            };

            return {
                traits: traits,
                haveAlertFeat: haveAlertFeat
            }
        });
})();