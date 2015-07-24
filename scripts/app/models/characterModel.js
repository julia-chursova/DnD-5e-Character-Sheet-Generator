(function () {
    'use strict';

    angular.module(appName)
        .factory('characterModel', function () {
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

            return self;
        });
})();