(function() {
    'use strict';

    angular.module(appName)
        .factory('weaponTypeProvider', [
            function() {
                return {
                    // Melee
                    warhammer: "Warhammer",
                    handAxe: "Handaxe",
                    battleAxe: "Battleaxe",
                    rapier: "Rapier",
                    shortsword: "Short Sword",
                    longsword: "Long Sword",

                    // Ranged
                    shortbow: "Short Bow",
                    longbow: "Long Bow",
                    handCrossbow: "Hand Crossbow",
                    throwingHammer: "Throwing Hammer"
                };
            }
        ]);
})();