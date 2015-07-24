(function () {
    'use strict';

    angular.module(appName)
        .controller('armorController', [
            'armorModel',
            function (armorModel) {
                var self = this;

                self.armor = armorModel.armor;
                self.shield = armorModel.shield;
                self.armorClass = armorModel.armorClass;
            }
        ]);
})();