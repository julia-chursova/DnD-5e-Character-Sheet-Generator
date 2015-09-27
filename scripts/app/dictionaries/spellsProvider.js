(function () {
    'use strict';

    angular.module(appName)
        .factory('spellsProvider', [
            function () {
                var spells = {
                    minorIllusion: {
                        name: "Minor Illusion",
                        level: 0
                    }
                };

                return spells;
            }
        ]);
})();