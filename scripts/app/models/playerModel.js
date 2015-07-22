(function () {
    'use strict';

    angular.module(appName)
        .factory('playerModel', function () {
            var self = this;

            self.name = '';
            self.campaign = '';
            self.XP = 0;

            return self;
        });
})();