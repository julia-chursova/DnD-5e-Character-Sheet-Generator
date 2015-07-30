(function () {
    'use strict';

    angular.module(appName)
        .factory('armorModel', [
            'statsModel',
            function (statsModel) {
                var self = this;

                self.baseAC = 10;

                self.armorTypes = [
                    'Light',
                    'Medium',
                    'Heavy'
                ];

                self.armor = {
                    name: '',
                    type: '',
                    armorClass: 10,
                    weight: 5,
                    stealsDisadvantage: false,
                    maxDexBonus: 2
                };

                self.shield = {
                    name: '',
                    armorClass: 2,
                    weight: 6
                };
                
                self.miscBonus = '';

                self.shieldWeight = function () {
                    return self.shield ? self.shield.weight || 0 : 0;
                };

                self.armorWeight = function () {
                    return self.armor ? self.armor.weight || 0 : 0;
                };

                self.armorClass = function () {
                    var result = self.baseAC;

                    if (self.armor)
                        result += (self.armor.armorClass || 0);

                    if (self.shield)
                        result += (self.shield.armorClass || 0);

                    if (self.miscBonus)
                        result += (self.miscBonus || 0);

                    result += self.armor && (self.armor.armorClass || 0) > 0
                        ? Math.min(self.armor.maxDexBonus, statsModel.dexModifier())
                        : statsModel.dexModifier();

                    return result;
                };

                return self;
            }
        ]);
})();