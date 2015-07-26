(function () {
    'use strict';

    angular.module(appName)
        .factory('weaponModel', function () {
            var weapons = [{
                name: 'Example',
                attack: '+3',
                damage: '1d6',
                range: 3,
                ammo: null,
                weight: 0
            }];

            var attacks = function () {
                return weapons;
            };

            return {
                weapons: weapons,
                attacks: attacks
            }
        });
})();