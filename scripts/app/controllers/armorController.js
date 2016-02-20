(function () {
    'use strict';

    angular.module(appName)
        .controller('armorController', [
            'armorModel',
            'proficienciesModel',
            'armorTypeProvider',

            function (armorModel, proficienciesModel, armorTypeProvider) {
                var self = this;

                self.model = armorModel;

                self.armor = function () { return armorModel.armor; }
                self.shield = function () { return armorModel.shield; }

                self.armorClass = armorModel.armorClass;
                self.proficiencyModel = proficienciesModel;
                self.armorTypes = armorTypeProvider;
            }
        ]);
})();