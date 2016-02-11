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
                self.armor = armorModel.armor;
                self.shield = armorModel.shield;
                self.armorClass = armorModel.armorClass;
                self.proficiencyModel = proficienciesModel;
                self.armorTypes = armorTypeProvider;
            }
        ]);
})();