(function () {
    'use strict';

    angular.module(appName)
        .factory('characterModel', [
            'statsModel',
            function (statsModel) {
                var self = this;

                // Fields
                self.race = null;
                self.name = '';
                self.alignment = 5;
                self.isMale = true;

                self.classes = [
                    {
                        name: 'Rogue',
                        archetype: 'Assassin',
                        skillRanks: 2,
                        hitDie: 8,
                        level: 5
                    }
                ];

                self.proficiencyBonus = 0;

                // Calculated properties
                self.effectiveLevel = function () {
                    var result = 0;

                    for (var i = 0; i < self.classes.length; i++)
                        result += self.classes[i].level;

                    return result;
                };

                self.initiative = function () {
                    return statsModel.dexModifier();
                };

                // Methods
                self.removeClass = function (characterClass) {
                    self.classes.remove(characterClass);
                };

                return self;
            }]);
})();