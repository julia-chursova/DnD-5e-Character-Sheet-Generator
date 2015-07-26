(function () {
    'use strict';

    angular.module(appName)
        .factory('characterModel', [
            'statsModel',
            function (statsModel) {
                var self = this;

                self.race = null;
                self.name = '';
                self.alignment = 5;
                self.isMale = true;
                self.classes = [
                    {
                        name: 'Rogue',
                        archetype: 'Assassin',
                        skillRanks: 2,
                        hitDie: 'd8',
                        level: 5
                    }
                ];

                self.proficiencyBonus = 0;
                self.initiative = function(){
                    return statsModel.dexModifier();
                };

                return self;
            }]);
})();