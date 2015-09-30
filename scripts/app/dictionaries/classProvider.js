(function() {
    'use strict';
    angular.module(appName)
        .factory('classProvider', [
            'armorTypeProvider',
            'weaponTypeProvider',
            'saveThrowModel',
            function(armorType, weaponType, saveThrowModel) {
                return {
                    barbarian: {
                        name: "Barbarian",
                        hitDie: 12,

                        armorProficiency: [
                            armorType.light,
                            armorType.medium
                        ],

                        proficientWithShield: true,

                        weaponProficiency: angular.extend([], weaponType.simple(), weaponType.martial()),

                        saveThrowProficiency: {
                            str: true,
                            con: true
                        },

                        specializationName: "Path",
                        specializations: [
                            {
                                name: "Berserker"
                            },
                            {
                                name: "Totem Warrior"
                            }
                        ]
                    },
                    bard: {
                        name: "Bard",
                        hitDie: 8,

                        armorProficiency: [
                            armorType.light
                        ],

                        proficientWithShield: false,

                        weaponProficiency: angular.extend([
                            weaponType.handCrossbow,
                            weaponType.longsword,
                            weaponType.rapier,
                            weaponType.shortSword
                        ], weaponType.simple()),

                        saveThrowProficiency: {
                            dex: true,
                            cha: true
                        },

                        specializationName: "College",
                        specializations: [
                            {
                                name: "Lore"
                            },
                            {
                                name: "Valor"
                            }
                        ]
                    },
                    cleric: {
                        name: "Cleric",
                        hitDie: 8,

                        armorProficiency: [
                            armorType.light,
                            armorType.medium
                        ],

                        proficientWithShield: true,

                        weaponProficiency: weaponType.simple(),

                        saveThrowProficiency: {
                            wis: true,
                            cha: true
                        },

                        specializationName: "",
                        specializations: [
                        ]
                    },
                    druid: {
                        name: "Druid",
                        hitDie: 8,

                        armorProficiency: [
                            armorType.light,
                            armorType.medium
                        ],

                        proficientWithShield: true,

                        weaponProficiency: [
                            weaponType.club,
                            weaponType.dagger,
                            weaponType.dart,
                            weaponType.javelin,
                            weaponType.mace,
                            weaponType.querterstaff,
                            weaponType.scimitar,
                            weaponType.sickle,
                            weaponType.sling,
                            weaponType.spear
                        ],

                        saveThrowProficiency: {
                            int: true,
                            wis: true
                        },

                        specializationName: "",
                        specializations: [
                        ]
                    },
                    fighter: {
                        name: "Fighter",
                        hitDie: 10,

                        armorProficiency: [
                            armorType.light,
                            armorType.medium,
                            armorType.heavy
                        ],

                        proficientWithShield: true,

                        weaponProficieny: angular.extend([], weaponType.simple(), weaponType.martial()),

                        saveThrowProficiency: {
                            str: true,
                            con: true
                        },

                        specializationName: "",
                        specializations: [
                        ]
                    },
                    monk: {
                        name: "Monk",
                        hieDie: 8,

                        armorProficiency: [],
                        proficientWithShield: false,
                        weaponProficiency: angular.extend([
                            weaponType.shortsword
                        ], weaponType.simple()),

                        saveThrowProficiency: {
                            str: true,
                            dex: true
                        },

                        specializationName: "",
                        specializations: [
                        ]
                    },
                    paladin: {
                        name: "Paladin",
                        hieDie: 10,

                        armorProficiency: [
                            armorType.light,
                            armorType.medium,
                            armorType.heavy
                        ],
                        proficientWithShield: true,
                        weaponProficiency: angular.extend([], weaponType.simple(), weaponType.martial()),

                        saveThrowProficiency: {
                            wis: true,
                            cha: true
                        },

                        specializationName: "",
                        specializations: [
                        ]
                    },
                    ranger: {
                        name: "Ranger",
                        hitDie: 10,

                        armorProficiency: [
                            armorType.light,
                            armorType.medium
                        ],
                        proficientWithShield: true,
                        weaponProficiency: angular.extend([], weaponType.simple(), weaponType.martial()),

                        saveThrowProficiency: {
                            str: true,
                            dex: true
                        },

                        specializationName: "",
                        specializations: [
                        ]
                    },
                    rogue: {
                        name: "Rogue",
                        hitDie: 8,

                        armorProficiency: [
                            armorType.light,
                        ],
                        proficientWithShield: false,
                        weaponProficiency: angular.extend([
                            weaponType.handCrossbow,
                            weaponType.longsword,
                            weaponType.rapier,
                            weaponType.shortsword
                        ], weaponType.simple()),

                        saveThrowProficiency: {
                            dex: true,
                            int: true
                        },

                        specializationName: "",
                        specializations: [
                        ]
                    },
                    sorcerer: {
                        name: "Sorcerer",
                        hitDie: 6,

                        proficientWithShield: false,
                        weaponProficiency: [
                            weaponType.dagger,
                            weaponType.sling,
                            weaponType.quarterstaff,
                            weaponType.lightCrossbow
                        ],

                        saveThrowProficiency: {
                            con: true,
                            cha: true
                        },

                        specializationName: "",
                        specializations: [
                        ]
                    },
                    warlock: {
                        name: "Warlock",
                        hitDie: 8,

                        armorProficiency: [
                            armorType.light
                        ],
                        proficientWithShield: false,
                        weaponProficiency: weaponType.simple(),

                        saveThrowProficiency: {
                            wis: true,
                            cha: true
                        },

                        specializationName: "",
                        specializations: [
                        ]
                    },
                    wizard: {
                        name: "Wizard",
                        hitDie: 6,

                        proficientWithShield: false,
                        weaponProficiency: [
                            weaponType.dagger,
                            weaponType.dart,
                            weaponType.sling,
                            weaponType.quarterstaff,
                            weaponType.lightCrossbow
                        ],

                        saveThrowProficiency: {
                            int: true,
                            wis: true
                        },

                        specializationName: "",
                        specializations: [
                        ]
                    }
                };
            }
        ]);
})();
