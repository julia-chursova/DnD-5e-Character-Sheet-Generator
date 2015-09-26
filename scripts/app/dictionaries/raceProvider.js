(function() {
	"use strict";

	angular.module(appName)
		.factory("raceProvider", [
            "sizeProvider",
            function (sizeProvider) {
                function copyProperties(src, dest) {
                    for (var prop in src) {
                        if (prop !== "name" && prop !== "size" && prop !== "subtypes") {
                            if (!dest.hasOwnProperty(prop))
                                dest[prop] = src[prop];
                            else
                                dest[prop] += src[prop];
                        }
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
                        abilities: ["Darkvision", "Dwarven Resilience", "Stonecunning"],
                        languages: ["Common", "Dwarvish"],

                        weaponProficiency: [
                            "hammer", "axe"
                        ],

                        toolProficiency: [
                            "smith", "brewer", "mason"
                        ],

                        subtypes: [
                            {
                                name: "Mountain",
                                strBonus: 2,
                                hpBonus: function (characterLevel) {
                                    return 1 + characterLevel;
                                }
                            },
                            {
                                name: "Hill",
                                wisBonus: 1,
                                armorProficiency: ["light", "medium"]
                            }
                        ]
                    },
                    {
                        name: "Elf",
                        size: sizeProvider.medium,
                        dexBonus: 2,
                        speed: 30,

                        abilities: ["Darkvision", "Keen Senses", "Fey Ancestry", "Trance"],
                        languages: ["Common", "Elvish"],

                        subtypes: [
                            {
                                name: "High",
                                intBonus: 1,
                                weaponProficiency: [
                                    "longsword",
                                    "shortsword",
                                    "longbow",
                                    "shortbow"
                                ]
                                // todo: add cantrips
                                // todo: extra language
                            },
                            {
                                name: "Wood",
                                wisBonus: 1,
                                weaponProficiency: [
                                    "longsword",
                                    "shortsword",
                                    "longbow",
                                    "shortbow"
                                ],
                                speed: 35,
                                abilities: ["Mask of the Wild"]
                            },
                            {
                                name: "Drow",
                                chaBonus: 1,
                                abilities: ["Superior Darkvision", "Sunlight Sensitivity"],
                                // todo: add cantrip
                                weaponProficiency: [
                                    "rapier",
                                    "shortsword",
                                    "hand crossbow"
                                ]
                            }
                        ]
                    },
                    {
                        name: "Halfling",
                        dexBonus: 2,
                        size: sizeProvider.small,
                        speed: 25,
                        abilities: ["Lucky", "Brave", "Halfling Nimbleness"],
                        languages: ["Common", "Halfling"],
                        subtypes: [
                            {
                                name: "Lightfoot",
                                chaBonus: 1,
                                abilities: ["Natural Stealthy"]
                            },
                            {
                                name: "Stout",
                                conBonus: 1,
                                abilities: ["Stout Resilience"]
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
                        languages: ["Common"]
                    },
                    {
                        name: "Dragonborn",
                        strBonus: 2,
                        chaBonus: 1,
                        size: sizeProvider.medium,
                        speed: 30,
                        // todo: draconic ancestry
                        // todo: add gragonborn block
                        languages: ["Common", "Draconic"]
                    },
                    {
                        name: "Gnome",
                        intBonus: 2,
                        size: sizeProvider.small,
                        speed: 25,
                        abilities: ["Darkvision", "Gnome Cunning"],
                        languages: ["Common", "Gnomish"],
                        subtypes: [
                            {
                                name: "Forest",
                                dexBonus: 1,
                                // todo: add cantrip,
                                abilities: ["Speak with Small Beasts"]
                            },
                            {
                                name: "Rock",
                                conBonus: 1,
                                abilities: ["Artificer's lore"],
                                toolProficiency: ["Artisan"]
                            }
                        ]
                    },
                    {
                        name: "Half-Elf",
                        chaBonus: 2,
                        // todo: add "increase two other abilities of your choise"
                        size: sizeProvider.medium,
                        speed: 30,
                        abilities: ["Darkvision", "Fey Ancestry"],
                        // todo: proficiency in two skills of your choice
                        languages: ["Common", "Elvish"]//todo: +1 additional language of your choise
                    },
                    {
                        name: "Half-Orc",
                        strBonus: 2,
                        conBonus: 1,
                        size: sizeProvider.medium,
                        speed: 30,
                        // todo: rewrite menacing
                        abilities: ["Darkvision", "Menacing", "Relentless Endurance"],
                        languages: ["Common", "Orc"]
                    },
                    {
                        name: "Tiefling",
                        intBonus: 1,
                        chaBonus: 2,
                        size: sizeProvider.medium,
                        speed: 30,
                        abilities: ["Darkvision", "Hellish resistance"],
                        // todo: add cantrips
                        languages: ["Common", "Infernal"]
                    }
                ];

                return transformData(data);
            }]);
})();