(function () {
    'use strict';

    angular.module(appName)
        .factory('characterModel', function () {
            var self = this;

            self.name = '';

            return self;
        });
})();