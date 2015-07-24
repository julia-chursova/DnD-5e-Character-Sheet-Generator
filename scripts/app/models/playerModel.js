(function () {
    'use strict';

    angular.module(appName)
        .factory('playerModel', function () {
            var self = this;

            self.name = '';
            self.campaign = '';
            self.XP = '';

            return self;
        });
})();