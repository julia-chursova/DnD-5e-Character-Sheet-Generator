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

                    newModel: newModel
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
				    var name = model.characterModel ? model.characterModel.name : '';

				    model.name = /* todo: temp; replace by namename || */'UnnamedHero';
				    model.lastModifiedDate = Date.now();

				    db.open();
				    db.charsheets.clear()
				        .then(function() {
				            db.charsheets.put(model, name) 
				                .then(def.resolve)
                                .catch(onLocalDBError)
				                .finally(db.close);
				        })
				        .catch(onLocalDBError);

				    return def.promise;
				}

				function loadModel() {
				    var def = $q.defer();
				    var db = initDatabase();

				    db.open();
				    db.charsheets
                        .toCollection()
                        .first()
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

				function onLocalDBError(reason) {
				    alert('LocalDB failure: ' + reason);
				}
			}
		]);
})();