(function () {
    'use strict';

    angular.module(appName)
        .factory('raceProvider', function () {
            return [
                {
                    name: 'Human'
                },
                {
                    name: 'Elf'
                },
                {
                    name: '-- Half-elf'
                }
            ];
        });
})();