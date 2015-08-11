(function () {
    'use strict';

    angular.module(appName)
        .factory('raceProvider', function () {
            return [
                {
                	name: 'Dwarf',
                	conBonus: 2,
					size: 'Medium'
                },
                {
                	name: 'Elf'
                },
                {
                    name: 'Gnome'
                },
                {
                    name: 'Half-Elf'
                },
                {
                    name: 'Half-Orc'
                },
                {
                    name: 'Halfling'
                },
                {
                    name: 'Human'
                }

            ];
        });
})();