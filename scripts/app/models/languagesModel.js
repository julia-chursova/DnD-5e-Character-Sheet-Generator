(function () {
    'use strict';

    angular.module(appName)
        .factory('languagesModel', function () {
            var self = this;

            self.languages = [];

            return self;
        })
})();