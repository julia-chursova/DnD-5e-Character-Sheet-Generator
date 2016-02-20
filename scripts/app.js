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
			    isEditMode: false,
                isLoadOpened: false
			}
		});
})();
(function(){
    'use strict';

    // ReSharper disable NativeTypePrototypeExtending
    Array.prototype.remove = function(element){
        var index = this.indexOf(element);

        if (index !== -1) {
            this.splice(index, 1);
        }
    };

    Array.prototype.where = function (condition) {
        var self = this;

        var result = [];
        for (var i = 0; i < self.length; i++)
            if (condition(self[i]))
                result.push(self[i]);

        return result;
    }

    
    Object.prototype.toArray = function () {
        var self = this;

        var result = [];
        Object.keys(self).forEach(function (key) {
            if (self.hasOwnProperty(key))
                result.push(self[key]);
        });

        return result;
    }
    // ReSharper enable NativeTypePrototypeExtending
    
})();
(function() {
    'use strict';

    angular.module(appName)
        .factory('helpers', function () {
            function isInteger(value) {
                var parsed = parseInt(value);

                return !isNaN(parsed) && isFinite(parsed);
            }

            return {
                isInteger: isInteger
            }
        });
})();
(function() {
	'use strict';

	angular.module(appName)
		.factory('serializer', [
            '$q',
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
			'abilitiesModel',

			function (
                $q,
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
				attacksModel,
				abilitiesModel
			) {
			    return {
			        serialize: serialize,
			        deserialize: deserialize,

			        saveModel: saveModel,
			        loadModel: loadModel,
                    deleteModel: deleteModel,

			        newModel: newModel,

			        getSavedCharlists: getSavedCharlists
			    };

				function importData(model, data) {
				    if (!data) {
				        return;
				    }

					model.importData(data);
				}

				function packModel() {
				    return {
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
				        //skills: skillsModel.exportData(),
				        speed: speedModel.exportData(),
				        spellcasting: spellcastingModel.exportData(),
				        stats: statsModel.exportData(),
				        attacks: attacksModel.exportData(),
				        abilities: abilitiesModel.exportData()
				    }
				}

				function unpackModel(data) {
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
				    importData(abilitiesModel, data.abilities);
				}

                function newModel() {
                    armorModel.init();
                    characterModel.init();
                    featsModel.init();
                    hitPointsModel.init();
                    inventoryModel.init();
                    languagesModel.init();
                    moneyModel.init();
                    playerModel.init();
                    proficienciesModel.init();
                    raceModel.init();
                    saveThrowModel.init();
                    skillsModel.init();
                    speedModel.init();
                    spellcastingModel.init();
                    statsModel.init();
                    attacksModel.init();
                    abilitiesModel.init();
                }

				function serialize() {
				    var object = packModel();

					return btoa(JSON.stringify(object));
				}

				function deserialize() {
					if (!window.location.hash)
						return;

					var str = window.location.hash.substring(2);
					var data = JSON.parse(atob(str));

					unpackModel(data);
				}

				function initDatabase() {
				    var db = new Dexie("DnD_5e_Charsheets");

				    db.version(1).stores({
				        charsheets: "name"
				    });

				    return db;
				}

				function saveModel() {
				    var def = $q.defer();
				    var db = initDatabase();

				    var model = packModel();
				    var name = model.character ? model.character.name : '';

				    model.name = name || 'Unnamed Hero';
				    model.lastModifiedDate = Date.now();

				    db.open();
				    db.charsheets
                        .put(model)
				        .then(def.resolve)
                        .catch(onLocalDBError)
				        .finally(db.close);

				    return def.promise;
				}

				function loadModel(name) {
				    var def = $q.defer();
				    var db = initDatabase();

				    db.open();
				    db.charsheets
                        .get(name)
                        .then(function (data) {
				            if (data) {
				                unpackModel(data);
				            }

				            def.resolve(data);
                        })
                        .catch(onLocalDBError)
                        .finally(db.close);

				    return def.promise;
				}

                function deleteModel(name) {
                    var def = $q.defer();
                    var db = initDatabase();

                    db.open();
                    db.charsheets
                        .delete(name)
                        .then(def.resolve)
                        .catch(onLocalDBError)
                        .finally(db.close);

                    return def.promise;
                }

                function getSavedCharlists() {
                    var def = $q.defer();
                    var db = initDatabase();

                    db.open();
                    db.charsheets
                        .toArray()
                        .then(function (data) {
                            var list = [];

                            for (var i = 0; i < data.length; i++) {
                                list.push(data[i].name);
                            }

                            def.resolve(list);
                        })
                        .catch(onLocalDBError)
                        .finally(db.close);

                    return def.promise;
                }

				function onLocalDBError(reason) {
				    alert('LocalDB failure: ' + reason);
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
(function() {
    'use strict';

    angular.module(appName)
        .controller('abilitiesController', [
            'abilitiesModel',
            'abilitiesProvider',

            function (abilitiesModel, abilitiesProvider) {
                var self = this;

                self.abilitiesModel = abilitiesModel;
                self.availableAbilities = abilitiesProvider;
            }
        ]);
})();
(function() {
    'use strict';

    angular.module(appName)
        .controller('appController', [
            '$rootScope',
            '$interval',
            'appState',
            'appComponents',
            'serializer',
            function($rootScope, $interval, appState, appComponents, serializer) {
                var self = this;

                var linkUpdatingInProgress = false;

                self.isEditMode = function() {
                    return appState.isEditMode;
                }

                self.isLoadOpened = function() {
                    return appState.isLoadOpened;
                }

                self.save = serializer.saveModel;
                self.load = serializer.loadModel;
                self.delete = function(name) {
                    serializer.deleteModel(name);
                    refreshSavedCharlists();
                }

                self.toggleEditing = function() {
                    appState.isEditMode = !appState.isEditMode;
                };

                self.toggleLoad = function() {
                    appState.isLoadOpened = !appState.isLoadOpened;
                    if (appState.isLoadOpened) {
                        refreshSavedCharlists();
                    }
                }

                self.getAvailableModules = appComponents.getAvailableModules;

                self.print = function() {
                    print();
                };

                self.updateLink = function() {
                    linkUpdatingInProgress = true;
                    window.location.hash = serializer.serialize();
                    linkUpdatingInProgress = false;
                }

                self.newDocument = function() {
                    serializer.newModel();
                }

                self.globalClick = function(event) {
                    $rootScope.$broadcast('global-click', event);
                }

                $rootScope.$on("$locationChangeSuccess", function() {
                    if (linkUpdatingInProgress)
                        return;

                    serializer.deserialize();
                });

                function refreshSavedCharlists() {
                    serializer.getSavedCharlists()
                        .then(function(data) {
                            self.savedCharlists = data;
                        });
                }

                $interval(self.save, 10000);
            }
        ]);
})();
(function () {
    'use strict';

    angular.module(appName)
        .controller('armorController', [
            'armorModel',
            'proficienciesModel',
            'armorTypeProvider',

            function (armorModel, proficienciesModel, armorTypeProvider) {
                var self = this;

                self.model = armorModel;
                self.armor = armorModel.armor;
                self.shield = armorModel.shield;
                self.armorClass = armorModel.armorClass;
                self.proficiencyModel = proficienciesModel;
                self.armorTypes = armorTypeProvider;
            }
        ]);
})();
(function () {
    'use strict';

	angular.module(appName)
		.controller('attacksController', [
			'attacksModel',
			'statsModel',
			'characterModel',
            'proficienciesModel',
            'weaponTypeProvider',

			function (attacksModel, statsModel, characterModel, proficienciesModel, weaponTypeProvider) {
				var self = this;

				self.attacks = attacksModel.attacks;
				self.stats = statsModel;
				self.character = characterModel;
			    self.proficienciesModel = proficienciesModel;
			    self.weaponTypes = weaponTypeProvider;
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
            'sizeProvider',
			'classProvider',
			'backgroundProvider',
            'featsProvider',

            function (
                characterModel,
                raceModel,
                statsModel,
                featsModel,

                raceProvider,
                sizeProvider,
                classProvider,
                backgroundProvider,
                featsProvider
            ) {
                var self = this;

                self.model = characterModel;
                self.raceModel = raceModel;
                self.stats = statsModel;
                self.availableRaces = raceProvider;
                self.availableSizes = sizeProvider;
                self.availableClasses = classProvider;
                self.availableBackgrounds = backgroundProvider;

                self.effectiveLevel = function () {
                    var level = self.model.effectiveLevel();

                    return level > 0 ? level : '-';
                };

                self.proficiencyBonus = function () {
                    var proficiencyBonus = self.model.proficiencyBonus();

                    return proficiencyBonus > 0 && self.model.effectiveLevel() > 0 ? proficiencyBonus : '-';
                }

                self.initiativeBonus = function () {
                    return self.model.initiativeBonus == 0 ? '' : self.model.initiativeBonus;
                };

                self.traitInitiativeBonus = function () {
                    return featsModel.haveFeat(featsProvider.alert) ? featsProvider.alert.bonus : '';
                }

                self.raceChanged = function() {
                    self.raceModel.raceChanged();
                }
            }]);
})();
(function () {
	'use strict';

	angular.module(appName)
		.controller('featsController', [
			'featsModel',
            'featsProvider',

			function (featsModel, featsProvider) {
				var self = this;

				self.feats = featsModel.feats;
			    self.availableFeats = featsProvider;
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

			function (skillsModel) {
			    var lineCount = 25;

				var self = this;

				self.skills = function() {
                    return skillsModel.skills.toArray().concat(new Array(lineCount - skillsModel.count()));
                }
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
        .controller('spellcastingController', [
            'spellcastingModel',
			'spellsProvider',

            function (spellcastingModel, spellsProvider) {
                var self = this;

                self.spells = spellcastingModel.spells;
	            self.availableSpells = spellsProvider.spellsByLevel;

	            self.simpleSpells = function() {
		            return spellcastingModel.spells.slice(0, 3);
	            }
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
(function () {
	'use strict';

	angular.module(appName)
		.controller('toolsController', [
			'proficienciesModel',
            'toolTypeProvider',

			function (proficienciesModel, toolTypeProvider) {
			    var self = this;

			    self.proficiencies = proficienciesModel.tools;
			    self.availableTools = toolTypeProvider;
			}
		]);
})();
(function() {
    'use strict';

    angular.module(appName)
        .factory('abilitiesProvider', [
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
                        name: "Skills Versatility",
                        description: "You gain proficiency in two skills of your choice"
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
(function () {
    'use strict';

    angular.module(appName)
        .factory('armorTypeProvider', function () {
            return {
                light: "Light",
                medium: "Medium",
                heavy: "Heavy"
            }
        });
})();
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
(function(){
    'use strict';

    angular.module(appName)
        .factory('languagesProvider', function() {
            return {
                common: "Common",
                dwarvish: "Dwarvish",
                elvish: "Elvish",
                giant: "Giant",
                gnomish: "Gnomish",
                goblin: "Goblin",
                halfling: "Halfling",
                orc: "Orc",

                abyssal: "Abyssal",
                celestial: "Celestial",
                draconic: "Draconic",
                deepSpeech: "Deep speech",
                infernal: "Infernal",
                primordial: "Primordrial",
                sylvan: "Sylvan",
                undercommon: "Undercommon"
            };
        });
})();
(function() {
    "use strict";

    angular.module(appName)
        .factory("raceProvider", [
            'sizeProvider',
            'abilitiesProvider',
            'languagesProvider',
            'armorTypeProvider',
            'toolTypeProvider',
            'weaponTypeProvider',

            function(
                sizeProvider,
                abilitiesProvider,
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
                            abilitiesProvider.darkvision,
                            abilitiesProvider.dwarvenResilience,
                            abilitiesProvider.stonecunning
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
                            abilitiesProvider.darkvision,
                            abilitiesProvider.keenSenses,
                            abilitiesProvider.feyAncestry,
                            abilitiesProvider.trance
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
                                    abilitiesProvider.highElfCantrip
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
                                    abilitiesProvider.maskOfTheWild
                                ]
                            },
                            {
                                name: "Drow",
                                chaBonus: 1,
                                abilities: [
                                    abilitiesProvider.superiorDarkvision,
                                    abilitiesProvider.sunlightSensitivity,
                                    abilitiesProvider.drowMagic
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
                            abilitiesProvider.lucky,
                            abilitiesProvider.brave,
                            abilitiesProvider.halflingNimbleness
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
                                    abilitiesProvider.naturalStealthy
                                ]
                            },
                            {
                                name: "Stout",
                                conBonus: 1,
                                abilities: [
                                    abilitiesProvider.stoutResilience
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
                            abilitiesProvider.darkvision,
                            abilitiesProvider.gnomeCunning
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
                                    abilitiesProvider.speakWithSmallBeasts,
                                    abilitiesProvider.naturalIllusionist
                                ]
                            },
                            {
                                name: "Rock",
                                conBonus: 1,
                                abilities: [
                                    abilitiesProvider.artificersLore
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
                            abilitiesProvider.darkvision,
                            abilitiesProvider.feyAncestry,
                            abilitiesProvider.halfElfScore,
                            abilitiesProvider.skillVersatility
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
                            abilitiesProvider.darkvision,
                            abilitiesProvider.menacing,
                            abilitiesProvider.relentlessEndurance
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
                            abilitiesProvider.darkvision,
                            abilitiesProvider.hellishResistance,
                            abilitiesProvider.infernalLegacy
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
(function () {
    'use strict';

    angular.module(appName)
        .factory('sizeProvider', function () {
            return {
                defaultSize: "Race Default",
                small: "Small",
                medium: "Medium"
            };
        });
})();
(function() {
    'use strict';
    angular.module(appName)
        .factory('skillsProvider', [
            'statsModel',
            'characterModel',

            function(statsModel, characterModel) {
                var packedSkills = [
                    {
                        modName: 'STR',
                        addFunc: statsModel.strModifier,
                        skills: {
                            athletics: 'Athletics'
                        }
                    },
                    {
                        modName: 'DEX',
                        addFunc: statsModel.dexModifier,
                        skills: {
                            acrobatics: 'Acrobatics',
                            sleightOfHand: 'Sleight of Hand',
                            stealth: 'Stealth'
                        }
                    },
                    {
                        modName: 'INT',
                        addFunc: statsModel.intModifier,
                        skills: {
                            arcana: 'Arcana',
                            history: 'History',
                            investigation: 'Investigation',
                            knowledgeNature: 'Knowledge Nature',
                            knowledgeReligion: 'Knowledge Religion'
                        }
                    },
                    {
                        modName: 'WIS',
                        addFunc: statsModel.wisModifier,
                        skills: {
                            animalHandling: 'Animal Handling',
                            insight: 'Insight',
                            medicine: 'Medicine',
                            perception: 'Perception',
                            survival: 'Survival'
                        }
                    },
                    {
                        modName: 'CHA',
                        addFunc: statsModel.chaModifier,
                        skills: {
                            deception: 'Deception',
                            intimidation: 'Intimidation',
                            performance: 'Performance',
                            persuation: 'Persuation'
                        }
                    }
                ];

                function transformGroup(group) {
                    var result = {};

                    for (var skill in group.skills) {
                        if (!group.skills.hasOwnProperty(skill))
                            continue;

                        result[skill] = {
                            name: group.skills[skill],
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
                        };
                    }

                    return result;
                }

                function transformResult() {
                    var result = {};

                    for (var i = 0; i < packedSkills.length; i++)
                        result = angular.extend(result, transformGroup(packedSkills[i]));

                    return result;
                }

                var originsOfStone = {
                    name: "Origins of Stone",
                    isCustom: true,
                    modName: "INT",
                    haveProficiency: true,
                    miscBonus: 0,
                    statsBonus: statsModel.intModifier,
                    proficiencyBonus: function() {
                        return characterModel.proficiencyBonus() * 2;
                    },
                    value: function() {
                        var skillScore = this.miscBonus + this.statsBonus();

                        if (this.haveProficiency)
                            skillScore += (this.proficiencyBonus() || 0);

                        return skillScore;
                    }
                };

                var historyOfMagic = {
                    name: "History of Magic",
                    isCustom: true,
                    modName: "INT",
                    haveProficiency: true,
                    miscBonus: 0,
                    statsBonus: statsModel.intModifier,
                    proficiencyBonus: function() {
                        return characterModel.proficiencyBonus() * 2;
                    },
                    value: function() {
                        var skillScore = this.miscBonus + this.statsBonus();

                        if (this.haveProficiency)
                            skillScore += (this.proficiencyBonus() || 0);

                        return skillScore;
                    }
                }

                return angular.extend({}, transformResult(), {
                    originsOfStone: originsOfStone,
                    historyOfMagic: historyOfMagic
                }, {
                    skillList: transformResult
                });
            }
        ]);
})();
(function () {
    'use strict';

    angular.module(appName)
        .factory('spellsProvider', [
            function () {
            	var self = this;

				// Fields
                self.spells = {
                    minorIllusion: {
                        name: "Minor Illusion",
                        level: 0
                    }
                };

	            self.spellsByLevel = [];

				// Ctor
	            (function init() {
		            var maxSpellLevel = 9;
		            for (var i = 0; i <= maxSpellLevel; i++) {
			            self.spellsByLevel.push([]);
		            }

		            for (var key in self.spells){
			            if (self.spells.hasOwnProperty(key)) {
				            var item = self.spells[key];
				            self.spellsByLevel[item.level].push(item);
			            }
		            };
	            })();

	            return self;
            }
        ]);
})();
(function () {
    'use strict';

    angular.module(appName)
        .factory('toolTypeProvider', function () {
            return {
                smith: "Smith",
                brewer: "Brewer",
                mason: "Mason",
                artisan: "Artisan",
                disguiseKit: "Disguise Kit",
                forgeryKit: "Forgery Kit",
                gamingSet: "Gaming Set",
                thievesTools: "Thieves' tools",
                musicalInstrument: "Musical Instrument",
                herbalismKit: "Herbalism Kit",
                landVehicles: "Land Vehicles",
                waterVehicles: "Water Vehicles",
                navigatorTools: "Navigator's Tools"
            }
        });
})();
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
        .factory('abilitiesModel', [
            function () {
                var self = this;

                // Init contains BOTH definition of fields and initialization for them
                self.init = function() {
                    self.abilities = [];

                    var maxAbilities = 10;

                    for (var i = 0; i < maxAbilities; i++)
                        self.abilities.push(null);
                }

                self.init();

                // Methods
                self.exportData = function () {
                    return {
                        abilities: self.abilities
                    }
                }

                self.importData = function (data) {
                    self.abilities = data.abilities;
                }

                return self;
            }
        ]);
})();
(function () {
    'use strict';

    angular.module(appName)
        .factory('armorModel', [
            'statsModel',
            'proficienciesModel',
            'helpers',

            function (statsModel, proficienciesModel, helpers) {
                var self = this;

                // Constants
                self.baseAC = 10;

                // Fields
                self.init = function () {
                    self.armor = {
                        name: '',
                        type: null,
                        armorClass: '',
                        weight: '',
                        stealsDisadvantage: false,
                        maxDexBonus: '',
                        isProficient: false,
                        minStrength: ''
                    };

                    self.shield = {
                        name: '',
                        armorClass: '',
                        weight: ''
                    };

                    self.miscBonus = '';
                }

                self.init();

                // Calculable properties
                self.shieldWeight = function () {
                    return self.shield ? self.shield.weight || 0 : 0;
                };

                self.armorWeight = function () {
                    return self.armor ? self.armor.weight || 0 : 0;
                };

                self.dexBonus = function () {
                    return self.armor && (self.armor.armorClass || 0) > 0 &&
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

                self.proficientWithArmor = function () {
                    return proficienciesModel.proficientWithArmor(self.armor.type);
                }

                self.reduceSpeed = function () {
                    return helpers.isInteger(self.armor.minStrength) && (statsModel.strength || 0) < (self.armor.minStrength || 0);
                }

                // Methods
                self.exportData = function () {
                    return {
                        armor: self.armor,
                        shield: self.shield,
                        miscBonus: self.miscBonus
                    }
                }

                self.importData = function (data) {
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
			'characterModel',
            'proficienciesModel',

			function(statsModel, characterModel, proficienciesModel) {
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
							baseDamage: item.baseDamage,
							isRanged: item.isRanged,
							range: item.range,
							ammo: item.ammo,
							type: item.type
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
					    self.type = item.type;
						self.baseDamage = item.baseDamage;
						self.isRanged = item.isRanged;
						self.range = item.range;
						self.ammo = item.ammo;

						self.attack = function () {
						    var proficiencyBonus = self.type && proficienciesModel.weapons[self.type]
                                ? characterModel.proficiencyBonus()
                                : 0;

						    return proficiencyBonus + (self.isRanged
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
			    self.init = function () {
			        var attacksCount = 5;

			        var attacks = [];
			        for (var i = 0; i < attacksCount; i++) {
			            attacks.push({
			                name: '',
			                baseDamage: '',
			                isRanged: false,
			                range: '',
			                type: null,
			                ammo: null
			            });
			        }

			        self.attacks = addCalculableFunctions(attacks);
			    }

			    self.init();

			    return self;
			}
		]);
})();
(function() {
    'use strict';

    angular.module(appName)
        .factory('characterModel', [
            'statsModel',
            'featsModel',
            'raceModel',

            'sizeProvider',
            'featsProvider',

            function(statsModel, featsModel, raceModel, sizeProvider, featsProvider) {
                var self = this;

                var maxClasses = 5;

                self.raceModel = raceModel;
                self.name = '';
                self.alignment = 5;
                self.isMale = true;
                self.selectedSize = sizeProvider.defaultSize;
                self.background = null;

                self.classes = [];

                self.initiativeBonus = 0;

                // Constructor
                self.init = function () {
                    self.classes = [];

                    for (var i = 0; i < maxClasses; i++) {
                        self.classes.push({
                            "class": null,
                            specialization: null,
                            level: ''
                        });
                    }
                }

                self.init();

                // Calculable properties
                self.effectiveLevel = function() {
                    var result = 0;

                    for (var i = 0; i < self.classes.length; i++)
                        result += (self.classes[i].level || 0);

                    return result;
                };

                self.initiative = function() {
                    var result = statsModel.dexModifier() + self.initiativeBonus;

                    if (featsModel.haveFeat(featsProvider.alert))
                        result += featsProvider.alert.bonus;

                    return result;
                };

                self.proficiencyBonus = function() {
                    return 1 + Math.ceil(self.effectiveLevel() / 4);
                };

                self.size = function() {
                    if (self.selectedSize && self.selectedSize !== sizeProvider.defaultSize)
                        return self.selectedSize;

                    if (self.raceModel.race && self.raceModel.race.size)
                        return self.raceModel.race.size;

                    return "";
                }

                // Methods
                self.removeClass = function(characterClass) {
                    self.classes.remove(characterClass);
                };

                self.exportData = function() {
                    return {
                        name: self.name,
                        alignment: self.alignment,
                        isMale: self.isMale,
                        background: self.background,
                        classes: self.classes,
                        initiativeBonus: self.initiativeBonus,
						selectedSize: self.selectedSize
                    }
                }

                self.importData = function(data) {
                    self.name = data.name;
                    self.alignment = data.alignment;
                    self.isMale = data.isMale;
                    self.background = data.background;
                    self.classes = data.classes;
                    self.initiativeBonus = data.initiativeBonus;
	                self.selectedSize = data.selectedSize;
                }

                return self;
            }
        ]);
})();
(function () {
    'use strict';

    angular.module(appName)
		.factory('featsModel', [
			function () {
			    var self = this;

			    self.init = function () {
			        self.feats = [];

			        var featsCount = 9;
			        for (var i = 0; i < featsCount; i++)
			            self.feats.push({});
			    }

			    self.init();

			    // Methods
                self.haveFeat = function(feat) {
                    return self.feats.indexOf(feat) >= 0;
                }

			    self.exportData = function () {
			        return {
			            feats: self.feats
			        }
			    }

			    self.importData = function (data) {
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
            'characterModel',
            'raceModel',
            'helpers',

			function (characterModel, raceModel, helpers) {
				var self = this;

			    self.init = function () {
			        self.baseHitPoints = '';
			        self.userDefinedBonus = '';
			        self.currentHitPoints = '';
			    }

			    self.init();

			    // Calculable Properties
				self.hitPointsBonus = function () {
				    return helpers.isInteger(self.userDefinedBonus)
                        ? self.userDefinedBonus
                        : (raceModel.race && raceModel.race.hpBonus ? raceModel.race.hpBonus(characterModel.effectiveLevel()) : 0);
                }

				self.maxHitPoints = function () {
				    return (self.baseHitPoints || 0) + (self.hitPointsBonus() || 0);
				}

                self.bonusDefined = function() {
                    return (raceModel.race && raceModel.race.hpBonus) || helpers.isInteger(self.userDefinedBonus);
                }

				// Methods
				self.exportData = function() {
					return {
						baseHitPoints: self.baseHitPoints,
						userDefinedBonus: self.userDefinedBonus,
					    currentHitPoints: self.currentHitPoints
					}
				}

				self.importData = function(data) {
					self.baseHitPoints = data.baseHitPoints;
					self.userDefinedBonus = data.userDefinedBonus;
				    self.currentHitPoints = data.currentHitPoints;
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

				// Ctor
                self.init = function () {
                    self.items = [];
                    self.potionsAndScrolls = [];
                    self.questItems = [];

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
                }

                self.init();

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
			var maxLanguages = 7;

	        self.init = function () {
	            self.languages = [];

	            for (var i = 0; i < maxLanguages; i++) {
	                self.languages.push('');
	            }
	        }

	        self.init();

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

			    self.init = function () {
			        self.copper = '';
			        self.silver = '';
			        self.electrum = '';
			        self.gold = '';
			        self.platinum = '';
			    }

			    self.init();

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

            self.init = function () {
                self.name = '';
                self.campaign = '';
                self.XP = '';
            }

            self.init();

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

			    self.init = function () {
			        self.weapons = {
			        };

			        self.armor = {
			        };

			        self.tools = [];

			        self.shieldProficiency = false;

			        var toolCount = 5;

			        for (var i = 0; i < toolCount; i++)
			            self.tools.push('');
			    }

			    self.init();

				// Computed properties
				self.proficientWithArmor = function (armorType) {
					return armorType && self.armor.hasOwnProperty(armorType) && self.armor[armorType];
				}

				// Methods
				self.exportData = function () {
					return {
					    weapons: self.weapons,
					    armor: self.armor,
                        tools: self.tools
					}
				}

				self.importData = function (data) {
				    self.weapons = data.weapons || {};
				    self.armor = data.armor || {};
				    self.tools = data.tools || [];
				}

				return self;
			}
		]);
})();
(function() {
	'use strict';

	angular.module(appName)
		.factory('raceModel', [
            'abilitiesModel',
            'spellcastingModel',
            'languagesModel',
            'proficienciesModel',

			function (abilitiesModel, spellcastingModel, languagesModel, proficienciesModel) {
                self.init = function() {
			        self.race = null;
                }

			    self.init();

			    // Events
			    self.raceChanged = function() {
			        if (!self.race)
			            return;

			        if (self.race.abilities) {
			            abilitiesModel.abilities.forEach(function(item) {
                            if (item && item.deactivate)
			                    item.deactivate();
			            });

			            abilitiesModel.abilities = angular.extend([], self.race.abilities);

			            self.race.abilities.forEach(function (item) {
                            if (item && item.activate)
			                    item.activate();
			            });
			        }

			        if (self.race.languages) {
			            languagesModel.languages = angular.extend([], self.race.languages);
			        }

			        if (self.race.armorProficiency) {
			            proficienciesModel.armor = { };

			            for (var i = 0; i < self.race.armorProficiency.length; i++) {
			                proficienciesModel.armor[race.armorProficiency[i]] = true;
			            }
			        }

			        if (race.weaponProficiency) {
			            proficienciesModel.weapons = {};

			            for (var i = 0; i < race.weaponProficiency.length; i++) {
			                proficienciesModel.weapons[race.weaponProficiency[i]] = true;
			            }
			        }

			        if (race.toolsProficiency) {
			            proficienciesModel.tools = angular.extend([], race.toolsProficiency);
			        }

			        proficienciesModel.shieldProficiency = race.shieldProficiency || false;
			    }

			    self.backgroundChanged = function() {
                    
                }

                // Methods
				self.exportData = function() {
					return self.race;
				}

				self.importData = function(data) {
					self.race = data;
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

			    self.init = function () {
			        self.isStrProficient = false;
			        self.isDexProficient = false;
			        self.isConProficient = false;
			        self.isIntProficient = false;
			        self.isWisProficient = false;
			        self.isChaProficient = false;
			    }

			    self.init();

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
			'skillsProvider',

			function (skillsProvider) {
			    var self = this;

				self.init = function() {
			        self.skills = skillsProvider.skillList();
				}

			    self.init();

			    // Calculable Properties
                self.count = function() {
                    return Object.keys(self.skills).length;
                }

				// Methods
				self.exportData = function() {
					return {
						skills: self.skills
					}
				}

				self.importData = function (data) {
				    self.skills = skillsProvider.skillList();
				    //self.skills = data.skills;
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
            'armorModel',

			function (raceModel, armorModel) {
				var self = this;

			    self.init = function () {
			        self.userDefinedSpeed = '';
			    }

			    self.init();

				// Calculable field
				self.speed = function () {
					if (self.userDefinedSpeed)
						return self.userDefinedSpeed;

				    var baseSpeed = 0;
				    if (raceModel.race)
				        baseSpeed = (raceModel.race.speed || 0);

				    if (armorModel.reduceSpeed())
				        baseSpeed = Math.max(baseSpeed - 10, 0);

					return baseSpeed;
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

			self.init = function () {
			    self.spells = [];

	            var maxSpellLevel = 9;
	            var maxSpellsInGroup = 6;

	            for (var i = 0; i <= maxSpellLevel; i++) {
	                var spells = [];
	                for (var spellInd = 0; spellInd < maxSpellsInGroup; spellInd++) {
	                    spells.push({});
	                }

	                self.spells.push({
	                    remaining: 0,
	                    maxPerDay: 0,
	                    knownCount: 0,
	                    spells: spells
	                });
	            }
			}

	        self.init();

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
            'helpers',

			function (raceModel, helpers) {
			    function getModifier(rawStatValue, racialBonus) {
			        return Math.floor(((parseInt(rawStatValue) || 0) + racialBonus - 10) / 2);
			    }

			    var self = this;

			    self.init = function () {
			        self.strength = '';
			        self.dexterity = '';
			        self.constitution = '';
			        self.intelligence = '';
			        self.wisdom = '';
			        self.charisma = '';

			        self.customRacialStrBonus = '';
			        self.customRacialDexBonus = '';
			        self.customRacialConBonus = '';
			        self.customRacialIntBonus = '';
			        self.customRacialWisBonus = '';
			        self.customRacialChaBonus = '';

			        self.strBonus = '';
			        self.dexBonus = '';
			        self.conBonus = '';
			        self.intBonus = '';
			        self.wisBonus = '';
			        self.chaBonus = '';
			    }

			    self.init();

			    // Calculable fields
			    self.racialStrBonus = function () {
			        if (helpers.isInteger(self.customRacialStrBonus))
			            return self.customRacialStrBonus;

			        return raceModel.race
						? (raceModel.race.strBonus || 0)
						: 0;
			    };

			    self.racialDexBonus = function () {
			        if (helpers.isInteger(self.customRacialDexBonus))
			            return self.customRacialDexBonus;

			        return raceModel.race
						? (raceModel.race.dexBonus || 0)
						: 0;
			    };

			    self.racialConBonus = function () {
			        if (helpers.isInteger(self.customRacialConBonus))
			            return self.customRacialConBonus;

			        return raceModel.race
						? (raceModel.race.conBonus || 0)
						: 0;
			    };

			    self.racialIntBonus = function () {
			        if (helpers.isInteger(self.customRacialIntBonus))
			            return self.customRacialIntBonus;

			        return raceModel.race
						? (raceModel.race.intBonus || 0)
						: 0;
			    };

			    self.racialWisBonus = function () {
			        if (helpers.isInteger(self.customRacialWisBonus))
			            return self.customRacialWisBonus;

			        return raceModel.race
						? (raceModel.race.wisBonus || 0)
						: 0;
			    };

			    self.racialChaBonus = function () {
			        if (helpers.isInteger(self.customRacialChaBonus))
			            return self.customRacialChaBonus;

			        return raceModel.race
			            ? (raceModel.race.chaBonus || 0)
			            : 0;
			    };

			    self.strModifier = function () {
			        return getModifier(self.strength, self.racialStrBonus()) + (parseInt(self.strBonus) || 0);
			    };

			    self.dexModifier = function () {
			        return getModifier(self.dexterity, self.racialDexBonus()) + (parseInt(self.dexBonus) || 0);
			    };

			    self.conModifier = function () {
			        return getModifier(self.constitution, self.racialConBonus()) + (parseInt(self.conBonus) || 0);
			    };

			    self.intModifier = function () {
			        return getModifier(self.intelligence, self.racialIntBonus()) + (parseInt(self.intBonus) || 0);
			    };

			    self.wisModifier = function () {
			        return getModifier(self.wisdom, self.racialWisBonus()) + (parseInt(self.wisBonus) || 0);
			    };

			    self.chaModifier = function () {
			        return getModifier(self.charisma, self.racialChaBonus()) + (parseInt(self.chaBonus) || 0);
			    };

			    // Methods
			    self.exportData = function () {
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

			    self.importData = function (data) {
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