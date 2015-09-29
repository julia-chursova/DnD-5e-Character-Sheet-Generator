(function() {
    'use strict';

    angular.module(appName)
        .factory('featsProvider', [
            'statsModel',
			'proficienciesModel',
			'armorTypeProvider',

            function(statsModel, proficienciesModel, armorTypes) {
                return {
                    alert: {
                        name: "Alert",
                        features: [
                            "+5 bonus to initiative.",
                            "You can't be surprised while you are conscious",
                            "Other creatures don't gain advantage on attack rolls against you as a result of beign hidden from you"
                        ]
                    },

                    athlete: {
                        name: "Athlete",
                        features: [
                            "Increase your Strength or Dexterity score by 1, to a maximum of 20",
                            "When you are prone, standing up uses only 5 ft. of your movement",
                            "Climbing doesn't halve your speed",
                            "You can make a running long jump or a running high jump after moving only 5 ft. on foot, rather than 10 ft."
                        ]
                    },

                    actor: {
                        name: "Actor",
                        features: [
                            "Increase your Charisma score by 1, to a maximum of 20",
                            "You have advantage on Charisma (Deception) and Charisma (Performance) checks when trying to pass yourself off a different person",
                            "Vou can mimic the speech of another person or the sounds made by other creatures. You must have heard the person speaking or heard the creature make the sound, for at least 1 minute. A successful Wisdom (Insight) check contested by your Charisma (Deception) check allows a tistener to determine that the effect is faked."
                        ]
                    },

                    charger: {
                        name: "Charger",
                        features: [
                            "When you use your action to Dash, you can use a bonus action to make one melee weapon attack or to shove a creature.",
                            "If you move at least 10 feet in a straight line immediately before taking this bonus action, you either gain a +5 bonus to the attack's damage roll (if you chose to make a melee attack and hit) or push the target up to 10 feet away from you (if you chose to shove and you succeed)."
                        ]
                    },

                    crossbowExpert: {
                        name: "Crossbow Expert",
                        features: [
                            "You ignore the loading quality of crossbows with which you are proficient.",
                            "Being within 5 feet of a hostile creature doesn't impose disadvantage on your ranged attack rolls.",
                            "When you use the Attack action and attack with a onehanded weapon, you can use a bonus action to attack with a loaded hand crossbow you are holding."
                        ]
                    },

                    defensiveDuelist: {
                        name: "Defensive Duelist",
                        prerequisite: "Dexterity 13 or higher",
                        applicable: function() {
                            return (statsModel.dexterity || 0) >= 13;
                        },
                        features: [
                            "When you are wielding a finesse weapon with which you are proficient and another creature hits you with a melee attack, you can use your reaction to add your proficiency bonus to your AC for that attack, potentially causing the attack to miss you."
                        ]
                    },

                    dualWielder: {
                        name: "Dual Wielder",
                        features: [
                            "You gain a +1 bonus to AC while you are wielding a separate melee weapon in each hand.",
                            "You can use two-weapon fighting even when the one-handed melee weapons you are wielding aren't light.",
                            "You can draw or stow two one-handed weapons when you would normally be able to draw or stow only one."
                        ]
                    },

                    dungeonDelver: {
                        name: "Dungeon Delver",
                        features: [
                            "You have advantage on Wisdom (Perception) and Intelligence (Investigation) checks made to detect the presence of secret doors",
                            "You have advantage on saving throws made to avoid or resist traps.",
                            "You have resistance to the damage dealt by traps.",
                            "You can search for traps while traveling at a normal pace, instead of only at a slow pace."
                        ]
                    },

                    durable: {
                        name: "Durable",
                        features: [
                            "Increase your Constitution score by 1, to a maximum of 20.",
                            "When you roll a Hit Die to regain hit points, the minimum number of hit points you regain from the roll equals twice your Constitution modifier (minimum of 2)."
                        ]
                    },

                    elementalAdept: {
                        name: "Elemental Adept",
                        prerequisite: "The ability to cast at least one spell",
                        applicable: function() {
                            // todo: implement
                        },
                        features: [
                            "When you gain this feat, choose one of the following damage types: acid, cold, fire, lightning, or thunder.",
                            "Spells you cast ignore resistance to damage of the chosen type. In addition, when you roll damage for a spell you cast that deals damage of that type, you can treat any 1 on a damage die as a 2."
                        ]
                    },

                    grappler: {
                        name: "Grappler",
                        prerequisite: "Strength 13 or higher",
                        applicable: function() {
                            return (statsModel.strength || 0) >= 13;
                        },
                        features: [
                            "You have advantage on attack rolls against a creature you are grappling.",
                            "You can use your action to try to pin a creature grappled by you. To do so, make another grapple check. lf you succeed, you and the creature are both restrained until the grapple ends.",
                            "Creatures that are one size larger than you don't automatically succeed on checks to escape your grapple."
                        ]
                    },

                    greatWeaponMaster: {
                        name: "Great Weapon Master",
                        features: [
                            "On your turn, when you score a criticai hit with a melee weapon or reduce a creature to 0 hit points with one, you can make one melee weapon attack as a bonus action.",
                            "Before you make a melee attack with a heavy weapon that you are proficient with, you can choose to take a -5 penalty to the attack roll. If the attack hits, you add +10 to the attack's damage."
                        ]
                    },

                    healer: {
                        name: "Healer",
                        features: [
                            "When you use a healer's kit to stabilize a dying creature, that creature also regains 1 hit point.",
                            "As an action, you can spend one use of a healer's kit to tend to a creature and restore 1d6 + 4 hit points to it, plus additional hit points equal to the creature's maximum number of Hit Dice. The creature can't regain hit points from this feat again until it finishes a short or long rest."
                        ]
                    },

					heavilyArmored: {
						name: "Heavily Armored",
						prerequisite: "Proficiency with medium armor",
						applicable: function() {
							return proficienciesModel.proficientWithArmor(armorTypes.medium);
						},
						features: [
							"Increase your strength score by 1 to a maximum of 20.",
							"You gain proficiency with heavy armor"
						]
					},

					heavyArmorMaster: {
						name: "Heavy Armor Master",
						prerequisite: "Proficiency with heavy armor",
						applicable: function() {
							return proficienciesModel.proficientWithArmor(armorTypes.heavy);
						},
						features: [
							"Increase your strength score by 1, to a maximum number of 20",
							"While you are wearing heavy armor, bludgeoning, piercing, and slashing damage that you take from nonmagical weapons is reduced by 3."
						]
					},

					inspiringLeader: {
						name: "Inspiring leader",
						prerequisite: "Charisma 13 or higher",
						applicable: function() {
							return (statsModel.charisma || 0) >= 13;
						}
					}
                }
            }
        ]);
})();