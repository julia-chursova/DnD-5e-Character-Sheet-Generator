(function() {
    'use strict';

    angular.module(appName)
        .factory('weaponTypeProvider', [
            function() {
                return {
                    // Melee
                    hammer: "Hammer",
                    axe: "Axe",
                    rapier: "Rapier",
                    shortsword: "Short Sword",
                    longsword: "Long Sword",

                    // Ranged
                    shortbow: "Short Bow",
                    longbow: "Long Bow",
                    handCrossbow: "Hand Crossbow"
                };
            }
        ]);
})();