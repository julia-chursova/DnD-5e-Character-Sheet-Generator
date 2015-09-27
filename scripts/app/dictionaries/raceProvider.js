(function() {
    "use strict";

    angular.module(appName)
        .factory("raceProvider", [
            'sizeProvider',
            'abilityProvider',
            'languagesProvider',
            'armorTypeProvider',
            'toolTypeProvider',
            'weaponTypeProvider',

            function(
                sizeProvider,
                abilityProvider,
                languagesProvider,
                armorTypeProvider,
                toolTypeProvider,
                weaponTypeProvider
            ) {

                function copyProperties(src, dest) {
                    for (var prop in src) {
                        if (prop === 'name' || prop === 'size' || prop === 'subtypes') {
                            continue;
                        }

                        if (!dest.hasOwnProperty()) {
                            dest[prop] = src[prop];
                            continue;
                        }

                        if (prop === "abilities" || prop === "spells" || prop === "toolsProficiency") {
                            dest[prop].concat(src[prop]);
                            continue;
                        }

                        dest[prop] += src[prop];
                    }
                }

                function transformData(races) {
                    var result = [];

                    for (var i = 0; i < races.length; i++) {
                        if (races[i].subtypes) {
                            for (var j = 0; j < races[i].subtypes.length; j++) {
                                var subRace = {
                                    name: races[i].name + " (" + races[i].subtypes[j].name + ")",
                                    size: races[i].subtypes[j].size || races[i].size
                                };

                                copyProperties(races[i], subRace);
                                copyProperties(races[i].subtypes[j], subRace);

                                result.push(subRace);
                            }
                        } else {
                            result.push(races[i]);
                        }
                    }

                    return result;
                }

                var data = [
                    {
                        name: "Dwarf",
                        size: sizeProvider.medium,
                        conBonus: 2,
                        speed: 25,

                        abilities: [
                            abilityProvider.darkvision,
                            abilityProvider.dwarvenResilience,
                            abilityProvider.stonecunning
                        ],

                        languages: [
                            languagesProvider.common,
                            languagesProvider.dwarvish
                        ],

                        weaponProficiency: [
                            weaponTypeProvider.battleAxe,
                            weaponTypeProvider.handAxe,
                            weaponTypeProvider.warhammer,
                            weaponTypeProvider.throwingHammer
                        ],

                        toolsProficiency: [
                            toolTypeProvider.smith,
                            toolTypeProvider.brewer,
                            toolTypeProvider.mason
                        ],

                        subtypes: [
                            {
                                name: "Mountain",
                                strBonus: 2,
                                armorProficiency: [
                                    armorTypeProvider.light,
                                    armorTypeProvider.medium
                                ]

                            },
                            {
                                name: "Hill",
                                wisBonus: 1,
                                hpBonus: function(characterLevel) {
                                    return 1 + characterLevel;
                                }
                            }
                        ]
                    },
                    {
                        name: "Elf",
                        size: sizeProvider.medium,
                        dexBonus: 2,
                        speed: 30,

                        abilities: [
                            abilityProvider.darkvision,
                            abilityProvider.keenSenses,
                            abilityProvider.feyAncestry,
                            abilityProvider.trance
                        ],

                        languages: [
                            languagesProvider.common,
                            languagesProvider.elvish
                        ],

                        subtypes: [
                            {
                                name: "High",
                                intBonus: 1,
                                weaponProficiency: [
                                    weaponTypeProvider.shortsword,
                                    weaponTypeProvider.longsword,
                                    weaponTypeProvider.shortbow,
                                    weaponTypeProvider.longbow
                                ],
                                abilities: [
                                    abilityProvider.highElfCantrip
                                ]
                            },
                            {
                                name: "Wood",
                                wisBonus: 1,
                                weaponProficiency: [
                                    weaponTypeProvider.shortsword,
                                    weaponTypeProvider.longsword,
                                    weaponTypeProvider.shortbow,
                                    weaponTypeProvider.longbow
                                ],
                                speed: 35,
                                abilities: [
                                    abilityProvider.maskOfTheWild
                                ]
                            },
                            {
                                name: "Drow",
                                chaBonus: 1,
                                abilities: [
                                    abilityProvider.superiorDarkvision,
                                    abilityProvider.sunlightSensitivity,
                                    abilityProvider.drowMagic
                                ],
                                weaponProficiency: [
                                    weaponTypeProvider.rapier,
                                    weaponTypeProvider.shortsword,
                                    weaponTypeProvider.handCrossbow
                                ]
                            }
                        ]
                    },
                    {
                        name: "Halfling",
                        dexBonus: 2,
                        size: sizeProvider.small,
                        speed: 25,
                        abilities: [
                            abilityProvider.lucky,
                            abilityProvider.brave,
                            abilityProvider.halflingNimbleness
                        ],

                        languages: [
                            languagesProvider.common,
                            languagesProvider.halfling
                        ],

                        subtypes: [
                            {
                                name: "Lightfoot",
                                chaBonus: 1,
                                abilities: [
                                    abilityProvider.naturalStealthy
                                ]
                            },
                            {
                                name: "Stout",
                                conBonus: 1,
                                abilities: [
                                    abilityProvider.stoutResilience
                                ]
                            }
                        ]
                    },
                    {
                        name: "Human",
                        strBonus: 1,
                        dexBonus: 1,
                        conBonus: 1,
                        intBonus: 1,
                        wisBonus: 1,
                        chaBonus: 1,
                        size: sizeProvider.medium,
                        speed: 30,
                        languages: [
                            languagesProvider.common
                        ]
                    },
                    {
                        name: "Dragonborn",
                        strBonus: 2,
                        chaBonus: 1,
                        size: sizeProvider.medium,
                        speed: 30,
                        // todo: draconic ancestry
                        // todo: add gragonborn block
                        languages: [
                            languagesProvider.common,
                            languagesProvider.draconic
                        ]
                    },
                    {
                        name: "Gnome",
                        intBonus: 2,
                        size: sizeProvider.small,
                        speed: 25,
                        abilities: [
                            abilityProvider.darkvision,
                            abilityProvider.gnomeCunning
                        ],
                        languages: [
                            languagesProvider.common,
                            languagesProvider.gnomish
                        ],
                        subtypes: [
                            {
                                name: "Forest",
                                dexBonus: 1,
                                abilities: [
                                    abilityProvider.speakWithSmallBeasts,
                                    abilityProvider.naturalIllusionist
                                ]
                            },
                            {
                                name: "Rock",
                                conBonus: 1,
                                abilities: [
                                    abilityProvider.artificersLore
                                ],
                                toolsProficiency: [
                                    toolTypeProvider.artisan
                                ]
                            }
                        ]
                    },
                    {
                        name: "Half-Elf",
                        chaBonus: 2,
                        size: sizeProvider.medium,
                        speed: 30,
                        abilities: [
                            abilityProvider.darkvision,
                            abilityProvider.feyAncestry,
                            abilityProvider.halfElfScore,
                            abilityProvider.skillVersatility
                        ],
                        languages: [
                            languagesProvider.common,
                            languagesProvider.elvish
                        ]
                    },
                    {
                        name: "Half-Orc",
                        strBonus: 2,
                        conBonus: 1,
                        size: sizeProvider.medium,
                        speed: 30,
                        abilities: [
                            abilityProvider.darkvision,
                            abilityProvider.menacing,
                            abilityProvider.relentlessEndurance
                        ],
                        languages: [
                            languagesProvider.common,
                            languagesProvider.orc
                        ]
                    },
                    {
                        name: "Tiefling",
                        intBonus: 1,
                        chaBonus: 2,
                        size: sizeProvider.medium,
                        speed: 30,
                        abilities: [
                            abilityProvider.darkvision,
                            abilityProvider.hellishResistance,
                            abilityProvider.infernalLegacy
                        ],
                        languages: [
                            languagesProvider.common,
                            languagesProvider.infernal
                        ]
                    }
                ];

                return transformData(data);
            }
        ]);
})();