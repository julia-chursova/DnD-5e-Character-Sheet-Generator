(function() {
    'use strict';

    angular.module(appName)
        .factory('proficiencyProvider', [
            function() {
                return {
                    weapons: {
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
                    },

                    armor: {
                        light: "Light",
                        medium: "Medium",
                        heavy: "Heavy"
                    },

                    tools: {
                        smith: "Smith",
                        brewer: "Brewer",
                        mason: "Mason",
                        artisan: "Artisan"
                    }
                }
            }
        ]);
})();