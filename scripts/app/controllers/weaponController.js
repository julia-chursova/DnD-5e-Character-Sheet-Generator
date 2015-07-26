(function () {
    'use strict';

    angular.module(appName)
        .controller('weaponController', [
            'weaponModel',
            function (weaponModel) {
                var self = this;

                self.attacks = weaponModel.attacks();
            }
        ])
})();