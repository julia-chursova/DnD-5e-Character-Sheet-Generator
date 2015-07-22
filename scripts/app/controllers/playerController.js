(function () {
    'use strict';

    angular.module(appName)
        .controller('playerController', [
            'playerModel',
            function (playerModel) {
                var self = this;

                self.model = playerModel;
            }]);
})();