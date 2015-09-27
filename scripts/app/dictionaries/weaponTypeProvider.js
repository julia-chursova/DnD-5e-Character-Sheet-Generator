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

                    club: "Club",
                    dagger: "Dagger",
                    mace: "Mace",
                    quarterstaff: "Quarterstaff",
                    scimitar: "Scimitar",
                    sickle: "Sickle",
                    sling: "Sling",
                    spear: "Spear",

                    // Ranged
                    shortbow: "Short Bow",
                    longbow: "Long Bow",
                    handCrossbow: "Hand Crossbow",
                    throwingHammer: "Throwing Hammer",
                    dart: "Dart",
                    javelin: "Javelin",
                    lightCrossbow: "Light Crossbow",
                    heavyCrossbow: "Heavy Crossbow",

                    // Cumulative
                    melee: function() {
                        return [];
                    },
                    ranged: function() {
                        return [];
                    },
                    simple: function() {
                        return [];
                    },
                    martial: function() {
                        return [];
                    }
                };
            }
        ]);
})();