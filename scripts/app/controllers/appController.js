(function () {
    'use strict';

    angular.module(appName)
        .controller('appController',
        function () {
            var self = this;

            self.print = function () {
                print();
            };
        });
})();