(function() {
    'use strict';

    angular.module(appName)
        .factory('backgroundProvider', [
            'skillsProvider',
            'toolTypeProvider',

            function(skills, tools) {
                return {
                    acolyte: {
                        name: "Acolyte",

                        skillsProficiencies: [
                            skills.insight,
                            skills.religion
                        ]
                    },

                    charlatan: {
                        name: "Charlatan",

                        skillsProficiencies: [
                            skills.deception,
                            skills.sleightOfHand
                        ],

                        toolsProficiencies: [
                            tools.disguiseKit,
                            tools.forgeryKit
                        ]
                    },

                    criminal: {
                        name: "Criminal",

                        skillsProficiencies: [
                            skills.deception,
                            skills.stealth
                        ],

                        toolsProficiencies: [
                            tools.gamingSet,
                            tools.thievesTools
                        ]
                    },

                    entertainer: {
                        name: "Entertainer",

                        skillsProficiencies: [
                            skills.acrobatics,
                            skills.performance
                        ],

                        toolsProficiencies: [
                            tools.disguiseKit,
                            tools.musicalInstrument
                        ]
                    },

                    folkHero: {
                        name: "Folk Hero",

                        skillsProficiencies: [
                            skills.animalHandling,
                            skills.survival
                        ],

                        toolsProficiencies: [
                            tools.artisan,
                            tools.landVehicles
                        ]
                    },

                    guildArtisan: {
                        name: "Guild Artisan",

                        skillsProficiencies: [
                            skills.insight,
                            skills.persuation
                        ],

                        toolsProficiencies: [
                            tools.artisan
                        ]
                    },

                    hermit: {
                        name: "Hermit",

                        skillsProficiencies: [
                            skills.medicine,
                            skills.religion
                        ],

                        toolsProficiencies: [
                            tools.herbalismKit
                        ]
                    },

                    noble: {
                        name: "Noble",

                        skillsProficiencies: [
                            skills.history,
                            skills.persuation
                        ],

                        toolsProficiencies: [
                            tools.gamingSet
                        ]
                    },

                    outlander: {
                        name: "Outlander",

                        skillsProficiencies: [
                            skills.athletics,
                            skills.survival
                        ],

                        toolsProficiencies: [
                            tools.musicalInstrument
                        ]
                    },

                    sage: {
                        name: "Sage",

                        skillsProficiencies: [
                            skills.arcana,
                            skills.history
                        ]
                    },

                    sailor: {
                        name: "Sailor",

                        skillsProficiencies: [
                            skills.athletics,
                            skills.perception
                        ],

                        toolsProficiencies: [
                            tools.navigatorTools,
                            tools.waterVehicles
                        ]
                    },

                    soldier: {
                        name: "Soldier",

                        skillsProficiencies: [
                            skills.athletics,
                            skills.intimidation
                        ],

                        toolsProficiencies: [
                            tools.gamingSet,
                            tools.landVehicles
                        ]
                    },

                    urchin: {
                        name: "Urchin",

                        skillsProficiencies: [
                            skills.sleightOfHand,
                            skills.stealth
                        ],

                        toolsProficiencies: [
                            tools.disguiseKit,
                            tools.thievesTools
                        ]
                    }
                };
            }
        ]);
})();