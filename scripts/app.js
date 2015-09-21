(function () {
    'use strict';

    angular.module(appName, [
        'ngDraggable',
        'acute.select'
    ]);
})();
(function () {
	'use strict';

	angular.module(appName)
		.factory('appComponents', function () {
			var allModules = [];

			(function init() {
				allModules = [
					{
						name: 'Armor',
						template: 'templates/components/armor.html'
					},
					{
						name: 'Armor Class',
						template: 'templates/components/armorClass.html'
					},
					{
						name: 'Character',
						template: 'templates/components/character.html'
					},
                    {
                        name: 'New Character',
                        template: 'templates/components/character.html'
                    },
					{
						name: 'Death Saves',
						template: 'templates/components/deathSaves.html'
					},
					{
						name: 'Feats',
						template: 'templates/components/feats.html'
					},
					{
						name: 'Hit Points',
						template: 'templates/components/hitPoints.html'
					},
					{
						name: 'Initiative',
						template: 'templates/components/initiative.html'
					},
					{
						name: 'Inventory',
						template: 'templates/components/inventory.html'
					},
					{
						name: 'Languages',
						template: 'templates/components/languages.html'
					},
					{
						name: 'Logo',
						template: 'templates/components/logo.html'
					},
					{
						name: 'Money',
						template: 'templates/components/money.html'
					},
					{
						name: 'Player',
						template: 'templates/components/player.html'
					},
					{
						name: 'Portrait',
						template: 'templates/directiveDefinition/portraitComponent.html'
					},
					{
						name: 'Potions and Scrolls',
						template: 'templates/components/potionsAndScrolls.html'
					},
					{
						name: 'Proficiencies',
						template: 'templates/components/proficiencies.html'
					},
					{
						name: 'Quest Items',
						template: 'templates/components/questItems.html'
					},
					{
						name: 'Save Throws',
						template: 'templates/components/saveThrows.html'
					},
					{
						name: 'Shield',
						template: 'templates/components/shield.html'
					},
					{
						name: 'Skills',
						template: 'templates/components/skills.html'
					},
					{
						name: 'Speed',
						template: 'templates/components/speed.html'
					},
					{
						name: 'Spellcasting',
						template: 'templates/components/spellcasting.html'
					},
					{
						name: 'Stats',
						template: 'templates/components/stats.html'
					},
					{
						name: 'Attacks',
						template: 'templates/components/attacks.html'
					}
				];

				allModules.sort(function (a, b) {
					return a.name === b.name
						? 0
						: a.name < b.name
						? -1 : 1;
				});
			})();

			function getAvailableModules() {
				return allModules;
			}

			return {
				spellcastingAvailable: false,
				getAvailableModules: getAvailableModules()
			}
		});
})();
(function() {
	'use strict';

	angular.module(appName)
		.factory('appState', function() {
			return {
				isEditMode: false
			}
		});
})();
(function(){
    'use strict';

    Array.prototype.remove = function(element){
        var index = this.indexOf(element);

        if (index != -1) {
            this.splice(index, 1);
        }
    };
})();
(function() {
	'use strict';

	angular.module(appName)
		.factory('serializer', [
			'armorModel',
			'characterModel',
			'featsModel',
			'hitPointsModel',
			'inventoryModel',
			'languagesModel',
			'moneyModel',
			'playerModel',
			'proficienciesModel',
			'raceModel',
			'saveThrowModel',
			'skillsModel',
			'speedModel',
			'spellcastingModel',
			'statsModel',
			'attacksModel',
			function(
				armorModel,
				characterModel,
				featsModel,
				hitPointsModel,
				inventoryModel,
				languagesModel,
				moneyModel,
				playerModel,
				proficienciesModel,
				raceModel,
				saveThrowModel,
				skillsModel,
				speedModel,
				spellcastingModel,
				statsModel,
				attacksModel
			) {
				function importData(model, data) {
					if (!data)
						return;

					model.importData(data);
				}

				function serialize() {
					var object = {
						armor: armorModel.exportData(),
						character: characterModel.exportData(),
						feats: featsModel.exportData(),
						hitPoints: hitPointsModel.exportData(),
						inventory: inventoryModel.exportData(),
						languages: languagesModel.exportData(),
						money: moneyModel.exportData(),
						player: playerModel.exportData(),
						proficiencies: proficienciesModel.exportData(),
						race: raceModel.exportData(),
						saveThrows: saveThrowModel.exportData(),
						skills: skillsModel.exportData(),
						speed: speedModel.exportData(),
						spellcasting: spellcastingModel.exportData(),
						stats: statsModel.exportData(),
						attacks: attacksModel.exportData()
					}

					return btoa(JSON.stringify(object));
				}

				function deserialize() {
					if (!window.location.hash)
						return;

					var str = window.location.hash.substring(2);
					var data = JSON.parse(atob(str));

					importData(armorModel, data.armor);
					importData(characterModel, data.character);
					importData(featsModel, data.feats);
					importData(hitPointsModel, data.hitPoints);
					importData(inventoryModel, data.inventory);
					importData(languagesModel, data.languages);
					importData(moneyModel, data.money);
					importData(playerModel, data.player);
					importData(proficienciesModel, data.proficiencies);
					importData(raceModel, data.race);
					importData(saveThrowModel, data.saveThrows);
					importData(skillsModel, data.skills);
					importData(speedModel, data.speed);
					importData(spellcastingModel, data.spellcasting);
					importData(statsModel, data.stats);
					importData(attacksModel, data.attacks);
				}

				return {
					serialize: serialize,
					deserialize: deserialize
				}
			}
		]);
})();
(function () {
    'use strict';

    angular.module(appName)
        .directive('portraitComponent', function () {
            return {
                restrict: 'AE',
                templateUrl: 'templates/components/portrait.html',
                link: function (scope, element, attrs) {
                	var canvas = element.find("canvas")[0];
                	var canvasContainer = canvas.parentElement;

                	canvas.width = canvas.style.width = canvasContainer.clientWidth;
                	canvas.height = canvas.style.height = canvasContainer.clientHeight;

                    scope.initUpload = function(){
                        element.find("input")[0].click();
                    };

                    scope.upload = function (event) {
                        scope.clear();

                        var reader = new FileReader();
                        var image;

                        reader.onload = function (e) {
                            image = new Image();
                            image.src = e.target.result;

                            image.onload = function () {
                            	var widthRatio = canvas.width / image.width;
                            	var heightRatio = canvas.height / image.height;

	                            var actualWidth, actualHeight;
								if (widthRatio < heightRatio) {
									actualWidth = image.width * widthRatio;
									actualHeight = image.height * widthRatio;
								} else {
									actualWidth = image.width * heightRatio;
									actualHeight = image.height * heightRatio;
								}

								var startX = (canvas.width - actualWidth) / 2;
	                            var startY = (canvas.height - actualHeight) / 2;

                                canvas.getContext("2d").drawImage(image, startX, startY, actualWidth, actualHeight);
                            };
                        };

                        reader.readAsDataURL(event.currentTarget.files[0]);
                    };

                    scope.clear = function () {
                        canvas.getContext("2d").clearRect(0, 0, canvas.width, canvas.height);
                    };
                }
            }
        });
})();
(function () {
    'use strict';

    angular.module(appName)
        .controller('appController', [
            '$rootScope',
			'appState',
			'appComponents',
			'serializer',
            function ($rootScope, appState, appComponents, serializer) {
                var self = this;

	            var linkUpdatingInProgress = false;

				self.isEditMode = function() {
					return appState.isEditMode;
				}

                self.editLayout = function () {
                    appState.isEditMode = true;
                };

                self.finishEdit = function () {
                	appState.isEditMode = false;
                };

	            self.getAvailableModules = appComponents.getAvailableModules;

                self.print = function () {
                    print();
                };

				self.updateLink = function() {
					linkUpdatingInProgress = true;
					window.location.hash = serializer.serialize();
					linkUpdatingInProgress = false;
				}

	            $rootScope.$on("$locationChangeSuccess", function() {
		            if (linkUpdatingInProgress)
			            return;

		            serializer.deserialize();
	            });

                self.globalClick = function (event) {
                    $rootScope.$broadcast('global-click', event);
                }
            }]);
})();
(function () {
    'use strict';

    angular.module(appName)
        .controller('armorController', [
            'armorModel',
            function (armorModel) {
                var self = this;

                self.model = armorModel;
                self.armor = armorModel.armor;
                self.shield = armorModel.shield;
                self.armorClass = armorModel.armorClass;
            }
        ]);
})();
(function () {
    'use strict';

	angular.module(appName)
		.controller('attacksController', [
			'attacksModel',
			'statsModel',
			function(attacksModel, statsModel) {
				var self = this;

				self.attacks = attacksModel.attacks;
				self.stats = statsModel;
			}
		]);
})();
(function () {
    'use strict';

    angular.module(appName)
        .controller('characterController', [
            'characterModel',
			'raceModel',
            'statsModel',
            'featsModel',
            'raceProvider',
			'classProvider',
			'backgroundProvider',
            function (characterModel, raceModel, statsModel, featsModel, raceProvider, classProvider, backgroundProvider) {
                var self = this;

                self.model = characterModel;
	            self.raceModel = raceModel;
                self.stats = statsModel;
                self.availableRaces = raceProvider;
                self.availableClasses = classProvider;
                self.availableBackgrounds = backgroundProvider;

                self.effectiveLevel = function () {
                    var level = self.model.effectiveLevel();

                    return level > 0 ? level : '-';
                };

				self.proficiencyBonus = function() {
					var proficiencyBonus = self.model.proficiencyBonus();

					return proficiencyBonus > 0 && self.model.effectiveLevel() > 0 ? proficiencyBonus : '-';
				}

                self.initiativeBonus = function () {
                    return self.model.initiativeBonus == 0 ? '' : self.model.initiativeBonus;
                };

                self.traitInitiativeBonus = function () {
                    return featsModel.haveAlertFeat() ? '5' : '';
                }
            }]);
})();
(function () {
	'use strict';

	angular.module(appName)
		.controller('featsController', [
			'featsModel',
			function (featsModel) {
				var self = this;

				self.model = featsModel;
			}
		]);
})();
(function() {
	'use strict';

	angular.module(appName)
		.controller('hitPointsController', [
			'hitPointsModel',
			function(hitPointsModel) {
				var self = this;

				self.model = hitPointsModel;

				self.maxHitPoints = function() {
					return self.model.maxHitPoints() === 0 ? '' : self.model.maxHitPoints();
				}
			}
		]);
})();
(function () {
    'use strict';

    angular.module(appName)
        .controller('inventoryController', [
            'inventoryModel',
            function (inventoryModel) {
                var self = this;

                self.model = inventoryModel;
            }]);
})();
(function () {
    'use strict';

    angular.module(appName)
        .controller('languagesController', [
            'languagesModel',
            'languagesProvider',
            function (languagesModel, languagesProvider) {
                var self = this;

                self.languages = languagesModel.languages;
                self.availableLanguages = languagesProvider;

                self.pendingLanguage = null;

                self.addPendingLanguage = function () {
                    if (self.pendingLanguage)
                        self.languages.push(self.pendingLanguage);

                    self.pendingLanguage = null;
                };

                self.removeLanguage = function (language) {
                    self.languages.remove(language);
                };
            }]);
})();
(function () {
	'use strict';

	angular.module(appName)
		.controller('moneyController', [
			'moneyModel',
			function (moneyModel) {
				var self = this;

				self.model = moneyModel;
			}
		]);
})();
(function () {
    'use strict';

    angular.module(appName)
        .controller('playerController', [
            'playerModel',
            function (playerModel) {
                var self = this;

                self.model = playerModel;
            }]);
})();
(function () {
	'use strict';

	angular.module(appName)
		.controller('proficienciesController', [
			'proficienciesModel',
			function (proficienciesModel) {

			}
		]);
})();
(function() {
	'use strict';

	angular.module(appName)
		.controller('saveThrowController', [
			'saveThrowModel',
			'characterModel',
			'statsModel',
			function(saveThrowModel, characterModel, statsModel) {
				var self = this;

				self.saveThrows = saveThrowModel;
				self.character = characterModel;
				self.stats = statsModel;
			}
		]);
})();
(function () {
	'use strict';

	angular.module(appName)
		.controller('skillsController', [
			'skillsModel',
			function(skillsModel) {
				var self = this;

				self.model = skillsModel.skills;
			}
		]);
})();
(function() {
	'use strict';

	angular.module(appName)
		.controller('speedController', [
			'speedModel',
			function(speedModel) {
				var self = this;

				self.model = speedModel;
			}
		]);
})();
(function () {
    'use strict';

    angular.module(appName)
        .controller('statsController', [
            'statsModel',
            function (statsModel) {
                function getPrintableBonus(bonus) {
                    return bonus == 0 ? '' : bonus;
                }

                function printableModifier(modifier) {
                    return modifier > 0 ? '+' + modifier : modifier;
                }

                var self = this;

                self.stats = statsModel;

                self.racialStrBonus = function () {
                	return getPrintableBonus(statsModel.racialStrBonus());
                };

                self.racialDexBonus = function () {
                	return getPrintableBonus(statsModel.racialDexBonus());
                };

                self.racialConBonus = function () {
                	return getPrintableBonus(statsModel.racialConBonus());
                };

                self.racialIntBonus = function () {
                	return getPrintableBonus(statsModel.racialIntBonus());
                };

                self.racialWisBonus = function () {
                	return getPrintableBonus(statsModel.racialWisBonus());
                };

                self.racialChaBonus = function () {
                	return getPrintableBonus(statsModel.racialChaBonus());
                };


                self.printableStrModifier = function () {
                    return printableModifier(statsModel.strModifier());
                };

                self.printableDexModifier = function () {
                    return printableModifier(statsModel.dexModifier());
                };

                self.printableConModifier = function () {
                    return printableModifier(statsModel.conModifier());
                };

                self.printableIntModifier = function () {
                    return printableModifier(statsModel.intModifier());
                };

                self.printableWisModifier = function () {
                    return printableModifier(statsModel.wisModifier());
                };

                self.printableChaModifier = function () {
                    return printableModifier(statsModel.chaModifier());
                };
            }]);
})();
(function() {
	'use strict';

	angular.module(appName)
		.factory('abilityProvider', [
			function() {
				return [
					{
						name: 'Darkvision',
						description: 'You can see in dim light within 60ft of you as if it were bright light, and in darkness if it were dim light. You can\'t discern colors, only shades of gray'
					},
					{
						name: 'Dwarven Resilience',
						description: 'Advantage against save throws against poison, resist against poison damage'
					},
					{
						name: 'Stonecunning',
						description: 'Whenever you make an Intelligence (History) check related to the origin of stonework, you add doubled proficiency bonus to the check.'
					},
					{
						name: 'Keen Senses',
						description: 'Proficiency in Perception skill'
					},
					{
						name: 'Fey Ancestry',
						description: 'Advantage on saving throws against beign charmed'
					},
					{
						name: "Trance",
						description: "You don't need to sleep. Instead, you meditate deepely for 4 hours."
					},
					{
						name: "Mask of the Wild",
						description: "You can attempt to hide even when you are only lightly obscured by foliage, heavy rain, falling snow, mist or other natural pfenomena."
					},
					{
						name: "Superior Darkvision",
						description: "You darkvision has range of 120ft."
					},
					{
						name: "Sunlight Sensitivity",
						description: "You have disadvantage on attack rolls and Wis (Perception) checks that rely on sight when you, the target of your attack or whatever you are trying to perceive is in direct light"
					},
					{
						name: "Lucky",
						description: "When you roll 1 on attack roll, ability check or saving throw, you can reroll the die and must use the new roll"
					},
					{
						name: "Brave",
						description: "You have advantage on saving throws against beign frightened"
					},
					{
						name: "Halfling Nimbleness",
						description: "You can move throug the space of any creature that is of a size larger than yours."
					},
					{
						name: "Natural Stealthy",
						description: "You can attempt to hide even when you are obscured only by a creature that is at least one size larger than you"
					},
					{
						name: "Stout Resilience",
						description: "You have advantage on saving throws againts poison, and you have resistance against poison damage"
					},
					{
						name: "Gnome Cunning",
						description: "You have advantage on all Intelligence, Wisdom and Charisma saving throws against magic."
					},
					{
						name: "Speak with Small Beasts",
						description: "Through sounds and gestures, you can communicate simple ideas with Small or smaller beasts."
					},
					{
						name: "Artificer's Lore",
						description: "Whenever you make an Intelligence (History) check related to magic items, alchemical objects or technological devices, you can add twice your proficiency bonus."
					},
					{
						name: "Menacing",
						description: "You gain proficiency in Intimidation skill"
					},
					{
						name: "Relentless Endurance",
						description: "When you are reduced to 0 hp, but not killed, you can drop to 1 hp. You can't use this feature again until you finish a long rest."
					},
					{
						name: "Savage Attacks",
						description: "When you score a critical hit with a melee weapon attack, you can roll one of the weapon's damage dice one additional time and add it to the extra damage of the critical hit."
					},
					{
						name: "Hellish resistance",
						description: "You have resistance to fire damage"
					}
				];
			}
		]);
})();
(function () {
	'use strict';

	angular.module(appName)
		.factory('backgroundProvider', [
			function () {
				return [
					'Adventurer (like you)'
				];
			}
		]);
})();
(function () {
	'use strict';
	angular.module(appName)
        .factory('classProvider', function () {
        	return [
				{
					name: ''
				},
                {
                	name: 'Barbarian',
					hitDie: 12,
                	specializationName: 'Path',
                	specializations: [
		                {
		                	name: 'Berserker'
		                },
		                {
		                	name: 'Totem Warrior'
		                }
                	]
                },
                {
                	name: 'Bard',
					hitDie: 8,
                	specializationName: 'College',
                	specializations: [
		                {
		                	name: 'Lore'
		                },
		                {
		                	name: 'Valor'
		                }
                	]
                },
                {
                	name: 'Cleric'
                },
                {
                	name: 'Druid'
                },
                {
                	name: 'Fighter'
                },
                {
                	name: 'Monk'
                },
                {
                	name: 'Mystic'
                },
                {
                	name: 'Paladin'
                },
                {
                	name: 'Ranger'
                },
                {
                	name: 'Rogue'
                },
                {
                	name: 'Sorcerer'
                },
                {
                	name: 'Warlock'
                },
                {
                	name: 'Wizard'
                }
        	];
        });
})();

(function(){
    'use strict';

    angular.module(appName)
        .factory('languagesProvider', function(){
            return [
                'Common',
                'Dwarvish',
                'Elvish',
                'Giant',
                'Gnomish',
                'Goblin',
                'Halfling',
                'Orc',

                'Abyssal',
                'Celestial',
                'Draconic',
                'Deep speech',
                'Infernal',
                'Primordrial',
                'Sylvan',
                'Undercommon'
            ];
        });
})();
(function() {
	"use strict";

	angular.module(appName)
		.factory("raceProvider", function() {
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
					size: "Medium",
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
							hpBonus: function(characterLevel) {
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
					size: "Medium",
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
					size: "Small",
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
					size: "Medium",
					speed: 30,
					languages: ["Common"]
				},
				{
					name: "Dragonborn",
					strBonus: 2,
					chaBonus: 1,
					size: "Medium",
					speed: 30,
					// todo: draconic ancestry
					// todo: add gragonborn block
					languages: ["Common", "Draconic"]
				}, 
				{
					name: "Gnome",
					intBonus: 2,
					size: "Small",
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
					size: "Medium",
					speed: 30,
					abilities: ["Darkvision", "Fey Ancestry"],
					// todo: proficiency in two skills of your choice
					languages: ["Common", "Elvish"]//todo: +1 additional language of your choise
				},
				{
					name: "Half-Orc",
					strBonus: 2,
					conBonus: 1,
					size: "Medium",
					speed: 30,
					// todo: rewrite menacing
					abilities: ["Darkvision", "Menacing", "Relentless Endurance"],
					languages: ["Common", "Orc"]
				},
				{
					name: "Tiefling",
					intBonus: 1,
					chaBonus: 2,
					size: "Medium",
					speed: 30,
					abilities: ["Darkvision", "Hellish resistance"],
					// todo: add cantrips
					languages: ["Common", "Infernal"]
				}
			];

			return transformData(data);
		});
})();
(function () {
    'use strict';

    angular.module(appName)
        .directive('cloakField', [
            '$rootScope',
            function ($rootScope) {
                return {
                    restrict: 'AE',
                    transclude: true,
                    templateUrl: 'templates/directives/cloakField.html',
                    scope: {
                        model: '='
                    },
                    link: function (scope, element, attr) {
                        var event;

                        scope.inEditMode = false;

                        scope.enableEditMode = function (evt) {
                            scope.inEditMode = true;

                            event = evt;
                        };

                        scope.disableEditMode = function (evt) {
                            if (evt.keyCode == 13)
                                scope.inEditMode = false;
                        };

                        scope.stopEvent = function (evt) {
                            event = evt;
                        };

                        $rootScope.$on('global-click', function (evt, args) {
                            if (!event || event != args)
                                scope.inEditMode = false;

                            event = null;
                        });
                    }
                }
            }
        ])
    ;
})();
(function () {
	'use strict';

	angular.module(appName)
		.directive('layout', [
			'appState',
			function(appState) {
				return {
					restrict: 'EA',
					templateUrl: 'templates/directives/layout.html',
					transclude: true,
					scope: {},
					controller: function($scope) {
						$scope.blocks = [];
						$scope.appState = appState;

						this.addBlock = function(block) {
							$scope.blocks.push(block);
						}

						$scope.addDraggableItem = function (columnItems, $data, index) {
							var data;
							if ($data.type === 'block') {
								var columns = [];
								for (var i = 0; i < $data.columns.length; i++) {
									columns.push({
										width: $data.columns[i],
										items: []
									});
								}

								data = {
									type: 'block',
									data: {
										columns: columns
									}
								};
							} else {
								data = $data;
							}

							if (typeof index !== 'undefined') {
								columnItems.splice(index, 0, data);
							} else {
								columnItems.push(data);
							}
						};

						$scope.removeDraggableItem = function(columnItems, item) {
							var index = columnItems.indexOf(item);

							if (index > -1)
								columnItems.splice(index, 1);
						}
					}
				};
			}
		])
		.directive('layoutBlock', function() {
			return {
				restrict: 'E',
				template: '<div style="display: none" ng-transclude></div>',
				require: ['?^^layout', '?^^layoutColumn'],
				transclude: true,
				scope: {},
				link: function(scope, element, attrs, parents) {
					var layoutParent = parents[0];
					var columnParent = parents[1];

					if (columnParent) {
						columnParent.addItem({
							type: 'block',
							data: scope
						});
					} else {
						layoutParent.addBlock(scope);
					}
				},
				controller: function($scope) {
					$scope.columns = [];

					this.addColumn = function(column) {
						$scope.columns.push(column);
					}
				}
			}
		})
		.directive('layoutColumn', function() {
			return {
				restrict: 'E',
				template: '<div style="display: none" ng-transclude></div>',
				require: '^^layoutBlock',
				transclude: true,
				scope: {
					width: '=width'
				},
				link: function(scope, element, attrs, layoutBlock) {
					layoutBlock.addColumn(scope);
				},
				controller: function($scope) {
					$scope.items = [];

					this.addItem = function(item) {
						$scope.items.push(item);
					}
				}
			}
		})
		.directive('component', function() {
			return {
				restrict: 'E',
				require: '^^layoutColumn',
				scope: {
					template: '=template'
				},
				link: function(scope, element, attrs, layoutColumn) {
					layoutColumn.addItem({
						template: scope.template,
						type: 'component'
					});
				}
			}
		});
})();
(function () {
    'use strict';

    angular.module(appName)
        .factory('armorModel', [
            'statsModel',
            function (statsModel) {
                var self = this;

				// Constants
                self.baseAC = 10;

                self.armorTypes = [
                    'Light',
                    'Medium',
                    'Heavy'
                ];

				// Fields
                self.armor = {
                    name: '',
                    type: '',
                    armorClass: 4,
                    weight: 5,
                    stealsDisadvantage: false,
                    maxDexBonus: 2
                };

                self.shield = {
                    name: '',
                    armorClass: 2,
                    weight: 6
                };

                self.miscBonus = '';

				// Calculable properties
                self.shieldWeight = function () {
                    return self.shield ? self.shield.weight || 0 : 0;
                };

                self.armorWeight = function () {
                    return self.armor ? self.armor.weight || 0 : 0;
                };

	            self.dexBonus = function() {
					return self.armor &&(self.armor.armorClass || 0) > 0 &&
					(self.armor.maxDexBonus === 0 || self.armor.maxDexBonus)
                        ? Math.min(self.armor.maxDexBonus, statsModel.dexModifier())
                        : statsModel.dexModifier();
	            };

                self.armorClass = function () {
                    var result = self.baseAC;

                    if (self.armor)
                        result += (self.armor.armorClass || 0);

                    if (self.shield)
                        result += (self.shield.armorClass || 0);

                    if (self.miscBonus)
                        result += (self.miscBonus || 0);

	                result += self.dexBonus();

                    return result;
                };

				// Methods
				self.exportData = function() {
					return {
						armor: self.armor,
						shield: self.shield,
						miscBonus: self.miscBonus
					}
				}

				self.importData = function(data) {
					self.armor = data.armor;
					self.shield = data.shield;
					self.miscBonus = data.miscBonus;
				}

                return self;
            }
        ]);
})();
(function () {
    'use strict';

	angular.module(appName)
		.factory('attacksModel', [
			'statsModel',
			function(statsModel) {
				var self = this;

				// Fields
				self.attacks = [];

				// Methods
				function purifyDataStructures (data) {
					var result = [];

					if (!data)
						return result;

					function copyData(item) {
						return {
							name: item.name,
							baseAttack: item.baseAttack,
							baseDamage: item.baseDamage,
							isRanged: item.isRanged,
							range: item.range,
							ammo: item.ammo
						};
					}

					for (var i = 0; i < data.length; i++)
						result.push(copyData(data[i]));

					return result;
				}

				function addCalculableFunctions (data) {
					var result = [];

					if (!data)
						return result;

					function createItem(item) {
						var self = this;

						self.name = item.name;
						self.baseAttack = item.baseAttack;
						self.baseDamage = item.baseDamage;
						self.isRanged = item.isRanged;
						self.range = item.range;
						self.ammo = item.ammo;

						self.attack = function() {
							return (self.baseAttack || 0) + (self.isRanged
								? statsModel.dexModifier()
								: statsModel.strModifier());
						};

						self.damage = function() {
							return (self.baseDamage || 0) + ' + ' + (self.isRanged
								? statsModel.dexModifier()
								: statsModel.strModifier());
						};

						return self;
					}

					for (var i = 0; i < data.length; i++) {
						result.push(new createItem(data[i]));
					}

					return result;
				}

				self.exportData = function() {
					return {
						attacks: purifyDataStructures(self.attacks)
					}
				};

				self.importData = function(data) {
					self.attacks = addCalculableFunctions(data.attacks);
				};

				// Ctor
				(function () {
					var attacksCount = 5;

					var attacks = [];
					for (var i = 0; i < attacksCount; i++) {
						attacks.push({
							name: '',
							baseAttack: '',
							baseDamage: '',
							range: '',
							ammo: null
						});
					}

					self.attacks = addCalculableFunctions(attacks);
				})();

				return self;
			}
		]);
})();
(function () {
    'use strict';

    angular.module(appName)
        .factory('characterModel', [
            'statsModel',
            'featsModel',
			'raceModel',
            function (statsModel, featsModel, raceModel) {
            	var self = this;

            	var maxClasses = 5;

                // Fields
                self.raceModel = raceModel;
                self.name = '';
                self.alignment = 5;
                self.isMale = true;
	            self.background = null;

                self.classes = [];

                self.initiativeBonus = 0;

				// Constructor
	            (function init() {
		            for (var i = 0; i < maxClasses; i++) {
			            self.classes.push({
				            "class": null,
				            specialization: null,
				            level: ''
			            });
		            }
	            })();

                self.proficiencyBonus = function() {
	                return 1 + Math.ceil(self.effectiveLevel() / 4);
                };

                // Calculable properties
                self.effectiveLevel = function () {
                    var result = 0;

	                for (var i = 0; i < self.classes.length; i++)
		                result += (self.classes[i].level || 0);

                    return result;
                };

                self.initiative = function () {
                    var result = statsModel.dexModifier() + self.initiativeBonus;

                    if (featsModel.haveAlertFeat())
                        result += 5;

                    return result;
                };

                // Methods
                self.removeClass = function (characterClass) {
                    self.classes.remove(characterClass);
                };

				self.exportData = function() {
					return {
						name: self.name,
						alignment: self.alignment,
						isMale: self.isMale,
						background: self.background,
						classes: self.classes,
						initiativeBonus: self.initiativeBonus
					}
				}

				self.importData = function(data) {
					self.name = data.name;
					self.alignment = data.alignment;
					self.isMale = data.isMale;
					self.background = data.background;
					self.classes = data.classes;
					self.initiativeBonus = data.initiativeBonus;
				}

                return self;
            }]);
})();
(function () {
	'use strict';

	angular.module(appName)
		.factory('featsModel', [
			function () {
				var self = this;

				// Fields
				self.feats = [];

				// Ctor
				(function init() {
					self.feats.push({
						name: 'Advanced sitemaker',
						prereq: 'Create charlist',
						description: 'This is feat for those who can create interactive charlists'
					});
				})();

				// Calculable properties
				self.haveAlertFeat = function() {
					return true;
				}

				// Methods
				self.exportData = function() {
					return {
						feats: self.feats
					}
				}

				self.importData = function(data) {
					self.feats = data.feats;
				}

				return self;
			}
		]);
})();
(function () {
	'use strict';

	angular.module(appName)
		.factory('hitPointsModel', [
			function () {
				var self = this;

				self.baseHitPoints = '';
				self.hitPointsBonus = '';

				self.maxHitPoints = function () {
					return (self.hitPointsBonus || 0) + (self.baseHitPoints || 0);
				}

				// Methods
				self.exportData = function() {
					return {
						baseHitPoints: self.baseHitPoints,
						hitPointsBonus: self.hitPointsBonus
					}
				}

				self.importData = function(data) {
					self.baseHitPoints = data.baseHitPoints;
					self.hitPointsBonus = data.hitPointsBonus;
				}

				return self;
			}
		]);
})();
(function () {
    'use strict';

    angular.module(appName)
        .factory('inventoryModel', [
            'armorModel',
            function (armorModel) {
            	var self = this;

				// Constants
            	var maxCommonItems = 15;
            	var maxPotionsAndScrolls = 10;
	            var maxQuestItems = 10;

				// Fields
	            self.items = [];
	            self.potionsAndScrolls = [];
	            self.questItems = [];

				// Ctor
	            (function init() {
		            var i;
		            for (i = 0; i < maxCommonItems; i++) {
			            self.items.push({});
		            };

		            for (i = 0; i < maxPotionsAndScrolls; i++) {
			            self.potionsAndScrolls.push({});
		            }

		            for (i = 0; i < maxQuestItems; i++) {
			            self.questItems.push({});
		            }
	            })();

				// Calculable properties
                self.inventoryWeight = function () {
                    var result = armorModel.armorWeight() + armorModel.shieldWeight();

	                var i;
                    for (i = 0; i < self.items.length; i++) {
                        result += (self.items[i].weight || 0) * (self.items[i].quantity || 0);
                    }

					for (i = 0; i < self.potionsAndScrolls.length; i++) {
						result += (self.potionsAndScrolls[i].weight || 0) * (self.potionsAndScrolls[i].quantity || 0);
					}

					for (i = 0; i < self.questItems.length; i++) {
						result += (self.questItems[i].weight || 0) * (self.questItems[i].quantity || 0);
					}

                    return result;
                };

				// Methods
				self.exportData = function() {
					return {
						items: self.items,
						potionsAndScrolls: self.potionsAndScrolls,
						questItems: self.questItems
					}
				}

				self.importData = function(data) {
					self.items = data.items;
					self.potionsAndScrolls = data.potionsAndScrolls;
					self.questItems = data.questItems;
				}

                return self;
            }
        ]);
})();
(function () {
    'use strict';

	angular.module(appName)
		.factory('languagesModel', function () {
			var self = this;

			// Constants
			var maxLanguages = 15;

			// Fields
			self.languages = [];

			// Ctor
			(function init() {
				for (var i = 0; i < maxLanguages; i++) {
					self.languages.push('');
				}
			})();

			// Methods
			self.exportData = function() {
				return {
					languages: self.languages
				}
			}

			self.importData = function(data) {
				self.languages = data.languages;
			}

			return self;
		});
})();
(function () {
	'use strict';

	angular.module(appName)
		.factory('moneyModel', [
			function () {
				var self = this;

				// Fields
				self.copper = '';
				self.silver = '';
				self.electrum = '';
				self.gold = '';
				self.platinum = '';

				// Calculable fields
				self.total = function () {
					return (self.copper || 0) +
						(self.silver || 0) * 10 +
						(self.electrum || 0) * 50 +
						(self.gold || 0) * 100 +
						(self.platinum || 0) * 1000;
				}

				// Methods
				self.exportData = function() {
					return {
						copper: self.copper,
						silver: self.silver,
						electrum: self.electrum,
						gold: self.gold,
						platinum: self.platinum
					}
				}

				self.importData = function(data) {
					self.copper = data.copper;
					self.silver = data.silver;
					self.electrum = data.electrum;
					self.gold = data.gold;
					self.platinum = data.platinum;
				}

				return self;
			}
		]);
})();
(function () {
    'use strict';

    angular.module(appName)
        .factory('playerModel', function () {
            var self = this;

			// Fields
            self.name = '';
            self.campaign = '';
            self.XP = '';

			// Methods
			self.exportData = function() {
				return {
					name: self.name,
					campaign: self.campaign,
					XP: self.XP
				}
			}

			self.importData = function(data) {
			    self.name = data.name;
			    self.campaign = data.campaign;
			    self.XP = data.XP;
		    }

		    return self;
        });
})();
(function () {
	'use strict';

	angular.module(appName)
		.factory('proficienciesModel', [
			function () {
				var self = this;

				self.exportData = function() {
					return {
						
					}
				}

				self.importData = function(data) {
					
				}

				return self;
			}
		]);
})();
(function() {
	'use strict';

	angular.module(appName)
		.factory('raceModel', [
			function () {
				// Absolutely useless. We need it to fix circular dependency.
				self.race = null;

				self.exportData = function() {
					return self.race;
				}

				self.importData = function(data) {
					self.race = data.race;
				}

				return self;
			}
		]);
})();
(function () {
	'use strict';

	angular.module(appName)
		.factory('saveThrowModel', [
			'statsModel',
			'characterModel',
			function (statsModel, characterModel) {
				var self = this;

				// Fields
				self.isStrProficient = false;
				self.isDexProficient = false;
				self.isConProficient = false;
				self.isIntProficient = false;
				self.isWisProficient = false;
				self.isChaProficient = false;

				// Calculable fields
				function calculateSaveThrow(isProficient, baseModifier) {
					var result = baseModifier;

					if (isProficient)
						result += characterModel.proficiencyBonus();

					return result;
				}

				self.strSave = function () {
					return calculateSaveThrow(self.isStrProficient, statsModel.strModifier());
				}

				self.dexSave = function () {
					return calculateSaveThrow(self.isDexProficient, statsModel.dexModifier());
				}

				self.conSave = function () {
					return calculateSaveThrow(self.isConProficient, statsModel.conModifier());
				}

				self.intSave = function () {
					return calculateSaveThrow(self.isIntProficient, statsModel.intModifier());
				}

				self.wisSave = function () {
					return calculateSaveThrow(self.isWisProficient, statsModel.wisModifier());
				}

				self.chaSave = function () {
					return calculateSaveThrow(self.isChaProficient, statsModel.chaModifier());
				}

				// Methods
				self.exportData = function() {
					return {
						isStrProficient: self.isStrProficient,
						isDexProficient: self.isDexProficient,
						isConProficient: self.isConProficient,
						isIntProficient: self.isIntProficient,
						isWisProficient: self.isWisProficient,
						isChaProficient: self.isChaProficient
					}
				}

				self.importData = function(data) {
					self.isStrProficient = data.isStrProficient;
					self.isDexProficient = data.isDexProficient;
					self.isConProficient = data.isConProficient;
					self.isIntProficient = data.isIntProficient;
					self.isWisProficient = data.isWisProficient;
					self.isChaProficient = data.isChaProficient;
				}

				return self;
			}
		]);

})();
(function () {
	'use strict';

	angular.module(appName)
		.factory('skillsModel', [
			'statsModel',
			'characterModel',
			function (statsModel, characterModel) {
				var skills = [
					{
						modName: 'STR', 
						addFunc: statsModel.strModifier, 
						skills: [
						  'Athletics'
						]
					},
					{
						modName: 'DEX', 
						addFunc: statsModel.dexModifier, 
						skills: [
							'Acrobatics',
							'Sleight of Hand',
							'Stealth'
						]
					},
					{
						modName: 'INT',
						addFunc: statsModel.intModifier,
						skills: [
							'Arcana',
							'History',
							'Investigation',
							'Knowledge Nature',
							'Knowledge Religion'
						]
					},
					{
						modName: 'WIS',
						addFunc: statsModel.wisModifier,
						skills: [
							'Animal Handling',
							'Insight',
							'Medicine',
							'Perception',
							'Survival'
						]
					},
					{
						modName: 'CHA',
						addFunc: statsModel.chaModifier,
						skills: [
							'Deception',
							'Intimidation',
							'Performance',
							'Persuation'
						]
					}
				];

				function transformGroup(group) {
					var result = [];

					for (var i = 0; i < group.skills.length; i++) {
						result.push({
							name: group.skills[i],
							modName: group.modName,
							haveProficiency: false,
							miscBonus: 0,
							statsBonus: group.addFunc,
							proficiencyBonus: function() {
								return this.haveProficiency ? characterModel.proficiencyBonus() : '';
							},
							value: function() {
								var skillScore = this.miscBonus + group.addFunc();

								if (this.haveProficiency)
									skillScore += characterModel.proficiencyBonus();

								return skillScore;
							}
						});
					}

					return result;
				}

				function transformResult() {
					var result = [];

					for (var i = 0; i < skills.length; i++) {
						result = result.concat(transformGroup(skills[i]));
					}

					result.sort(function (a, b) { return a.name.toLowerCase() > b.name.toLowerCase(); });

					return result;
				}

				// Fields
				self.skills = transformResult();

				// Methods
				self.exportData = function() {
					return {
						skills: self.skills
					}
				}

				self.importData = function(data) {
					self.skills = data.skills;
				}

				return self;
			}
		]);
})();
(function () {
	'use strict';

	angular.module(appName)
		.factory('speedModel', [
			'raceModel',
			function (raceModel) {
				var self = this;

				// Fields
				self.userDefinedSpeed = '';


				// Calculable field
				self.speed = function () {
					if (self.userDefinedSpeed)
						return self.userDefinedSpeed;

					if (raceModel.race)
						return raceModel.race.speed || 0;

					return 0;
				}

				// Methods
				self.exportData = function () {
					return {
						userDefinedSpeed: self.userDefinedSpeed
					}
				}

				self.importData = function (data) {
					self.userDefinedSpeed = data.userDefinedSpeed;
				}

				return self;
			}
		]);
})();
(function() {
	'use strict';

	angular.module(appName)
		.factory('spellcastingModel', function() {
			var self = this;

			// Fields
			self.spells = [];

			// Ctor
			(function init() {
				var maxSpellLevel = 9;
				for (var i = 0; i <= maxSpellLevel; i++) {
					self.spells.push([]);
				}
			})();

			// Methods
			self.exportData = function() {
				return {
					spells: self.spells
				}
			}

			self.importData = function(data) {
				self.spells = data.spells;
			}

			return self;
		});
})();
(function () {
	'use strict';

	angular.module(appName)
        .factory('statsModel', [
			'raceModel',
			function (raceModel) {
				function getModifier(statValue) {
					return Math.floor(((statValue || 0) - 10) / 2);
				}

				var self = this;

				// Fields
				self.strength = '';
				self.dexterity = '';
				self.constitution = '';
				self.intelligence = '';
				self.wisdom = '';
				self.charisma = '';

				self.strBonus = '';
				self.dexBonus = '';
				self.conBonus = '';
				self.intBonus = '';
				self.wisBonus = '';
				self.chaBonus = '';

				// Calculable fields
				self.racialStrBonus = function () {
					return raceModel.race
						? (raceModel.race.strBonus || 0)
						: 0;
				};

				self.racialDexBonus = function () {
					return raceModel.race
						? (raceModel.race.dexBonus || 0)
						: 0;
				};

				self.racialConBonus = function () {
					return raceModel.race
						? (raceModel.race.conBonus || 0)
						: 0;
				};

				self.racialIntBonus = function () {
					return raceModel.race
						? (raceModel.race.intBonus || 0)
						: 0;
				};

				self.racialWisBonus = function () {
					return raceModel.race
						? (raceModel.race.wisBonus || 0)
						: 0;
				};

				self.racialChaBonus = function () {
					return raceModel.race
						? (raceModel.race.chaBonus || 0)
						: 0;
				};

				self.strModifier = function () {
					return getModifier(self.strength) + (parseInt(self.strBonus) || 0);
				};

				self.dexModifier = function () {
					return getModifier(self.dexterity) + (parseInt(self.dexBonus) || 0);
				};

				self.conModifier = function () {
					return getModifier(self.constitution) + (parseInt(self.conBonus) || 0);
				};

				self.intModifier = function () {
					return getModifier(self.intelligence) + (parseInt(self.intBonus) || 0);
				};

				self.wisModifier = function () {
					return getModifier(self.wisdom) + (parseInt(self.wisBonus) || 0);
				};

				self.chaModifier = function () {
					return getModifier(self.charisma) + (parseInt(self.chaBonus) || 0);
				};

				// Methods
				self.exportData = function() {
					return {
						strength: self.strength,
						dexterity: self.dexterity,
						constitution: self.constitution,
						intelligence: self.intelligence,
						wisdom: self.wisdom,
						charisma: self.charisma,

						strBonus: self.strBonus,
						dexBonus: self.dexBonus,
						conBonus: self.conBonus,
						intBonus: self.intBonus,
						wisBonus: self.wisBonus,
						chaBonus: self.chaBonus
					}
				}

				self.importData = function(data) {
					self.strength = data.strength;
					self.dexterity = data.dexterity;
					self.constitution = data.constitution;
					self.intelligence = data.intelligence;
					self.wisdom = data.wisdom;
					self.charisma = data.charisma;

					self.strBonus = data.strBonus;
					self.dexBonus = data.dexBonus;
					self.conBonus = data.conBonus;
					self.intBonus = data.intBonus;
					self.wisBonus = data.wisBonus;
					self.chaBonus = data.chaBonus;
				}

				return self;
			}]);
})();