(function () {
    'use strict';

    angular.module(appName)
        .factory('armorModel', [
            'statsModel',
            'proficienciesModel',
            'helpers',

            function (statsModel, proficienciesModel, helpers) {
                var self = this;

                // Constants
                self.baseAC = 10;

                // Fields
                self.init = function () {
                    self.armor = {
                        name: '',
                        type: null,
                        armorClass: '',
                        weight: '',
                        stealsDisadvantage: false,
                        maxDexBonus: '',
                        isProficient: false,
                        minStrength: ''
                    };

                    self.shield = {
                        name: '',
                        armorClass: '',
                        weight: ''
                    };

                    self.miscBonus = '';
                }

                self.init();

                // Calculable properties
                self.shieldWeight = function () {
                    return self.shield ? self.shield.weight || 0 : 0;
                };

                self.armorWeight = function () {
                    return self.armor ? self.armor.weight || 0 : 0;
                };

                self.dexBonus = function () {
                    return self.armor && (self.armor.armorClass || 0) > 0 &&
					(self.armor.maxDexBonus === 0 || self.armor.maxDexBonus)
                        ? Math.min(self.armor.maxDexBonus, statsModel.dexModifier())
                        : statsModel.dexModifier();
                };

                self.armorClass = function () {
                    var result = self.baseAC;

                    if (self.armor)
                        result += (self.armor.armorClass || 0);

                    if (self.shield)
                        result += (self.shield.armorClass || 0);

                    if (self.miscBonus)
                        result += (self.miscBonus || 0);

                    result += self.dexBonus();

                    return result;
                };

                self.proficientWithArmor = function () {
                    return proficienciesModel.proficientWithArmor(self.armor.type);
                }

                self.reduceSpeed = function () {
                    return helpers.isInteger(self.armor.minStrength) && (statsModel.strength || 0) < (self.armor.minStrength || 0);
                }

                // Methods
                self.exportData = function () {
                    return {
                        armor: self.armor,
                        shield: self.shield,
                        miscBonus: self.miscBonus
                    }
                }

                self.importData = function (data) {
                    self.armor = data.armor;
                    self.shield = data.shield;
                    self.miscBonus = data.miscBonus;
                }

                return self;
            }
        ]);
})();