(function() {
    'use strict';

    angular.module(appName)
        .factory('abilityProvider', [
            'skillsModel',
            'skillsProvider',
            'spellcastingModel',
            'spellsProvider',
            function(skillsModel, skillsProvider, spellcastingModel, spellsProvider) {
                return {
                    darkvision: {
                        name: "Darkvision",
                        shortDescription: "60ft",
                        description: "You can see in dim light within 60ft of you as if it were bright light, and in darkness if it were dim light. You can't discern colors, only shades of gray"
                    },
                    dwarvenResilience: {
                        name: "Dwarven Resilience",
                        description: "Advantage against save throws against poison, resist against poison damage"
                    },
                    stonecunning: {
                        name: "Stonecunning",
                        description: "Whenever you make an Intelligence (History) check related to the origin of stonework, you add doubled proficiency bonus to the check.",
                        activate: function() {
                            skillsModel.skills.originsOfStone = skillsProvider.originsOfStone;
                        },
                        deactivate: function() {
                            delete skillsModel.skills.originsOfStone;
                        }
                    },
                    keenSenses: {
                        name: "Keen Senses",
                        description: "Proficiency in Perception skill",
                        activate: function() {
                            skillsModel.skills.perception.haveProficiency = true;
                        },
                        deactivate: function() {
                            skillsModel.skills.perception.haveProficiency = false;
                        }
                    },
                    feyAncestry: {
                        name: "Fey Ancestry",
                        description: "Advantage on saving throws against beign charmed"
                    },
                    trance: {
                        name: "Trance",
                        description: "You don't need to sleep. Instead, you meditate deepely for 4 hours."
                    },
                    maskOfTheWild: {
                        name: "Mask of the Wild",
                        description: "You can attempt to hide even when you are only lightly obscured by foliage, heavy rain, falling snow, mist or other natural pfenomena."
                    },
                    superiorDarkvision: {
                        name: "Superior Darkvision",
                        shortDescription: "120ft",
                        description: "You darkvision has range of 120ft."
                    },
                    sunlightSensitivity: {
                        name: "Sunlight Sensitivity",
                        description: "You have disadvantage on attack rolls and Wis (Perception) checks that rely on sight when you, the target of your attack or whatever you are trying to perceive is in direct light"
                    },
                    lucky: {
                        name: "Lucky",
                        description: "When you roll 1 on attack roll, ability check or saving throw, you can reroll the die and must use the new roll"
                    },
                    brave: {
                        name: "Brave",
                        description: "You have advantage on saving throws against beign frightened"
                    },
                    halflingNimbleness: {
                        name: "Halfling Nimbleness",
                        description: "You can move throug the space of any creature that is of a size larger than yours."
                    },
                    naturalStealthy: {
                        name: "Natural Stealthy",
                        description: "You can attempt to hide even when you are obscured only by a creature that is at least one size larger than you"
                    },
                    stoutResilience: {
                        name: "Stout Resilience",
                        description: "You have advantage on saving throws againts poison, and you have resistance against poison damage"
                    },
                    gnomeCunning: {
                        name: "Gnome Cunning",
                        description: "You have advantage on all Intelligence, Wisdom and Charisma saving throws against magic."
                    },
                    speakWithSmallBeasts: {
                        name: "Speak with Small Beasts",
                        description: "Through sounds and gestures, you can communicate simple ideas with Small or smaller beasts."
                    },
                    menacing: {
                        name: "Menacing",
                        description: "You gain proficiency in Intimidation skill",
                        activate: function() {
                            skillsModel.skills.intimidation.haveProficiency = true;
                        },
                        deactivate: function() {
                            skillsModel.skills.intimidation.haveProficiency = false;
                        }
                    },
                    relentlessEndurance: {
                        name: "Relentless Endurance",
                        description: "When you are reduced to 0 hp, but not killed, you can drop to 1 hp. You can't use this feature again until you finish a long rest."
                    },
                    savageAttacks: {
                        name: "Savage Attacks",
                        description: "When you score a critical hit with a melee weapon attack, you can roll one of the weapon's damage dice one additional time and add it to the extra damage of the critical hit."
                    },
                    hellishResistance: {
                        name: "Hellish Resistance",
                        description: "You have resistance to fire damage"
                    },
                    highElfCantrip: {
                        name: "Cantrip",
                        description: "You know one cantrip of your choice from the wizard spell list. Intelligence is your spellcasting ability for it.",
                        activate: function() {
                            spellcastingModel.spells[0].knownCount++;
                        },
                        deactivate: function() {
                            spellcastingModel.spells[0].knownCount = Math.max(0, spellcastingModel.spells[0].knownCount - 1);
                        }
                    },
                    drowMagic: {
                        name: "Drow Magic",
                        description: "You know the dancing lights cantrip. When you reach 3rd level, you can cast faerie fire spell once per day. When you reach 5th level, you can also cast the darkness spell once per day. Charisma is your spellcastring ability for these spells."
                        // todo: add cantrips to the spellbook
                    },
                    naturalIllusionist: {
                        name: "Natural Illusionist",
                        description: "You know the minor illusion cantrip. Intelligence is your spellcasting ability for it",
                        activate: function() {
                            spellcastingModel.spells[0].knownCount++;
                            spellcastingModel.spells[0].spells.push(spellsProvider.minorIllusion);
                        },
                        deactivate: function() {
                            spellcastingModel.spells[0].knownCount = Math.max(0, spellcastingModel.spells[0].knownCount - 1);
                            spellcastingModel.spells[0].spells.remove(spellsProvider.minorIllusion);
                        }
                    },
                    artificersLore: {
                        name: "Artificer's Lore",
                        description: "Whenever you make an Intelligence (History) check related to magic items, alchemical objects, or technological devices you can add twice your proficiency bonus, instead of any proficiency bonus you normally apply.",
                        activate: function() {
                            skillsModel.skills.historyOfMagic = skillsProvider.historyOfMagic;
                        },
                        deactivate: function() {
                            delete skillsModel.skills.historyOfMagic;
                        }
                    },
                    halfElfScore: {
                        name: "Ability Score Increase",
                        description: "Your charisma score increased by 2, and two other ability scores of your choice increase by 1"
                    },
                    skillVersatility: {
                        name: "You gain proficiency in two skills of your choice"
                    },
                    infernalLegacy: {
                        name: "Infernal Legacy",
                        description: "You know the thaumaturgy cantrip. Once you reach 3rd level, you can cast the hellish rebuke spell once per day as a 2nd level spell. Once you reach 5th level you can also cast the darkness spell once per day. Charisma is your spellcasting ability for these spells."
                        // Todo: add cantrips
                    }
                };
            }
        ]);
})();