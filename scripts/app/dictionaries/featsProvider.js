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
                        ],
                        bonus: 5
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
                        },
                        features: [
                            "Spend 10 minutes inspiring your companions, shoring up their resolve to fight. When you do so, choose up to six friendly creatures (which can include yourself) within 30 feet of you who can see or hear you and who can understand you. Each creature can gain temporary hit points equal to your levei + your Charisma modifier. A creature can't gain temporary hit points from this feat again until it has finished a short or long rest."
                        ]
                    },

                    keenMind: {
                        name: "Keen Mind",
                        features: [
                            "Increase your intelligence score by 1, to a maximum of 20.",
                            "You always know which way is north.",
                            "You always know the number of hours left before the next sunrise ar sunset.",
                            "You can accurately recall anything you have seen or heard within the past month."
                        ]
                    },

                    lightlyArmored: {
                        name: "Lightly Armored",
                        features: [
                            "Increase your Strength or Dexterity score by 1, to a maximum of 20",
                            "You gain proficiency with light armor"
                        ]
                    },

                    linguist: {
                        name: "Linguist",
                        features: [
                            "Increase your Intelligence score by 1, to a maximum of 20.",
                            "You learn three languages of your choice.",
                            "You can ably create written ciphers. Others can't decipher a code you create unless you teach them, they succeed on an Intelligence check (DC equal to your 1ntelligence score + your proficiency bonus), or they use magic to decipher it."
                        ]
                    },

                    lucky: {
                        name: "Lucky",
                        features: [
                            "You have 3 luck points. ",
                            "Whenever you make an attack roll, an ability check or a saving throw, you can spend one luck point to roll an additional d20. ",
                            "You can choose to spend one of your luck points after you roll the die, but before the outcome is determined.",
                            "You choose which of the d20s is used for the attack roll, ability check, or saving throw.",
                            "You can also spend one luck point when an attack roll is made against you.",
                            "Roll a d20, and then choose whether the attack uses the attacker's roll or yours.",
                            "If more than one creature spends a luck point to influence the outcome of a roll, the points cancel each other out; no additional dice are rolled.",
                            "You regain your expended luck points when you finish a long rest."
                        ]
                    },

                    mageSlayer: {
                        name: "Mage Slayer",
                        features: [
                            "When a creature within 5 feet of you casts a spell, you can use your reaction to make a melee weapon attack against that creature.",
                            "When you damage a creature that is concentrating on a spell, that creature has disadvantage on the saving throw it makes to maintain its concentration.",
                            "You have advantage on saving throws against spells cast by creatures within 5 feet of you."
                        ]
                    },

                    magicInitiate: {
                        name: "Magic Initiate",
                        features: [
                            "Learn 2 cantrips from bard, cleric, druid, sorcerer, warlock or wizard's spell list",
                            "Learn 1st level spell from that same list (you must finish a long rest before you can cast it again"
                        ]
                    },

                    martialAdept: {
                        name: "Martial Adept",
                        features: [
                            "You learn two maneuvers of your choice from among those available to the Battle Master archetype in the fighter c1ass. If a maneuver you use requires your target to make a saving throw to resist the maneuver's effects, the saving throw DC equals 8 + your proficiency bonus +your Strength or Dexterity modifier (your choice).",
                            "If you already have superiority dice, you gain one more: otherwise, you have one superiority die, which is a d6. This die is used to fuel your maneuvers. A superiority die is expended when you use it. You regain your expended superiority dice when you finish a short or long rest."
                        ]
                    },

                    mediumArmorMaster: {
                        name: "Medium Armor Master",
                        prerequisite: "Proficiency with medium armor",
                        applicable: function() {
                            return proficienciesModel.proficientWithArmor(armorTypes.medium);
                        },
                        features: [
                            "Wearing medium armor doesn't impose disadvantage on your Dexterity (Stealth) checks.",
                            "When you wear medium armor, you can add 3, rather than 2, to your AC if you have a Dexterity of 16 or higher."
                        ]
                    },

                    mobile: {
                        name: "Mobile",
                        features: [
                            "Your speed increases by 10 feet.",
                            "When you use the Dash action, difficult terrain doesn't cost you extra movement on that turn",
                            "When you make a melee attack against a creature, you don't provoke opportunity attacks from that creature for the rest of the turn, whether you hit or not. "
                        ]
                    },

                    moderatelyArmored: {
                        name: "Moderately Armored",
                        prerequisite: "Proficiency with light armor",
                        applicable: function() {
                            return proficienciesModel.proficientWithArmor(armorTypes.light);
                        },
                        features: [
                            "Increase your Strength or Dexterity score by 1, to a maximum of 20.",
                            "You gain proficiency with medium armor and shields."
                        ]
                    },

                    mountedCombat: {
                        name: "Mounted Combat",
                        features: [
                            "You have advantage on melee attack rolls against any unmounted creature that is smaller than your mount.",
                            "You can force an attack targeted at your mount to target you instead.",
                            "If your mount is subjected to an effect that allows it to make a Dexterity saving throw to take only half damage, it instead takes no damage if it succeeds on the saving throw, and only half damage if it fails."
                        ]
                    },

                    observant: {
                        name: "Observant",
                        features: [
                            "Increase your Intelligence or Wisdom score by 1, to a maximum of 20.",
                            "If you can see a creature's mouth while it is speaking a language you understand, you can interpret what it's saying by reading its lips.",
                            "You have a +5 bonus to your passive Wisdom (Perception) and passive Intelligence (Investigation) scores."
                        ]
                    },

                    polearmMaster: {
                        name: "Polearm Master",
                        features: [
                            "When you take the Attack action and attack with only a glaive, halberd, or quarterstaff, you can use a bonus action to make a melee attack with the opposite end of the weapon. The weapon's damage die for this attack is a d4, and the attack deals bludgeoning damage.",
                            "While you are wielding a glaive, halberd, pike, or quarterstaff, other creatures provoke an opportunity attack from you when they enter your reach."
                        ]
                    },

                    resilient: {
                        name: "Resilient",
                        features: [
                            "Increase the chosen ability score by 1, to a maximum of 20.",
                            "You gain proficiency in saving throws using the chosen ability."
                        ]
                    },

                    ritualCaster: {
                        name: "Ritual Caster",
                        prerequisite: "Intelligence or Wisdom 13 or higher",
                        applicable: function() {
                            return (statsModel.intelligence || 0) >= 13 || (statsModel.wisdom || 0) >= 13;
                        },
                        features: [
                            "You have learned a number of spells that you can cast as rituais. These spells are written in a ritual book, which you must have in hand while casting one of them.",
                            "You acquire a ritual book holding two 1st-level spells of your choice. Choose one of the following classes: bard, c1erie, druid, soreerer, warlock, or wizard. You must choose your spells from that c1ass's spelllist, and the spells you choose must have the ritual tag.",
                            "If you come across a spell in written form, such as a magical spell scroll or a wizard's spellbook, you might be able to add it to your ritual book. The spell must be on the spelllist for the class you choose, the spell's level can be no higher than half your level (rounded up), and it must have the ritual tag."
                        ]
                    },

                    savageAttacker: {
                        name: "Savage Attacker",
                        features: [
                            "Once per turn when you roll damage for a melee weapon attack, you can reroll the weapon's damage dice and use either total"
                        ]
                    },

                    sentinel: {
                        name: "Sentinel",
                        features: [
                            "When you hit a creature with an opportunity attack, the creature's speed becomes O for the rest of the turn.",
                            "Creatures within 5 feet of you provoke opportunity attacks from you even if they take lhe Disengage action before leaving your reach.",
                            "When a creature within 5 feet of you makes an attack against a target other than you (and that target doesn't have this feat), you can use your reaction to make a melee weapon attack against the attacking creature"
                        ]
                    },

                    sharpshooter: {
                        name: "Sharpshooter",
                        features: [
                            "Attacking at long range doesn't impose disadvantage on your ranged weapon attack rolls.",
                            "Your ranged weapon attacks ignore half cover and three-quarters cover.",
                            "Before you make an attack with a ranged weapon that you are proficient with, you can choose lo take a -5 penally to the attack roll. If the attack hits, you add +10 to the attack's damage."
                        ]
                    },

                    shieldMaster: {
                        name: "Shield Master",
                        features: [
                            "If you take the Attack action on your turn, you can use a bonus action to try to shove a creature within 5 feet of you with your shield.",
                            "If you aren't incapacilated, you can add your shield's AC bonus to any Dexterity saving throw you make against a spell or other harmful effect that targets only you.",
                            "If you are subjected to an effect that allows you to make a Dexterity saving throw to take only half damage, you can use your reaclion to take no damage if you succeed on the saving throw, interposing your shield between yourself and the source of the effect."
                        ]
                    },

                    skilled: {
                        name: "Skilled",
                        features: [
                            "You gain proficiency in any combinalion of three skills or tools of your choice"
                        ]
                    },

                    spellSniper: {
                        name: "Spell Sniper",
                        prerequisite: "The ability to cast at least one spell",
                        features: [
                            "When you cast a spell that requires you to make an attack roll, the spell's range is doubled.",
                            "Your ranged spell attacks ignore half cover and three-quarters cover.",
                            "You learn one cantrip that requires an attack roll. Choose the cantrip from the bard, cleric, druid, sorcerer, warlock, or wizard spell list."
                        ]
                    },

                    tavernBrawler: {
                        name: "Tavern Brawler",
                        features: [
                            "Increase your Strength or Constitution score by 1, to a maximum of 20.",
                            "You are proficient with improvised weapons and unarmed strikes",
                            "Your unarmed strike uses a d4 for damage.",
                            "When you hit a creature with an unarmed strike or an improvised weapon on your turn, you can use a bonus action to attempt to grapple the target."
                        ]
                    },

                    tough: {
                        name: "Tough",
                        features: [
                            "Your hit point maximum increases by an amount equal to twice your level when you gain this feal. Whenever you gain a level thereafter, your hit point maximum increases by an addilional 2 hit points."
                        ]
                    },

                    warCaster: {
                        name: "War Caster",
                        prerequisite: "The ability to cast at least one spell",
                        applicable: function() {
                            // todo: implement
                        },
                        features: [
                            "You have advantage on Constitution saving throws that you make to maintain your concentration on a spell when you lake damage.",
                            "You can perform the components of spells even when you have weapons or a shield in one or both hands.",
                            "When a hoslile creature's movement provokes an opportunily attack from you, you can use your reaction to cast a spell at the creature, rather than making an opportunity attack. The spell must have a casling time of 1 action and must target only that creature."
                        ]
                    },

                    weaponMaster: {
                        name: "Weapon Master",
                        features: [
                            "Increase your Strength or Dexterity score by 1, to a maximum of 20.",
                            "You gain proficiency with four weapons of your choice."
                        ]
                    }
                }
            }
        ]);
})();