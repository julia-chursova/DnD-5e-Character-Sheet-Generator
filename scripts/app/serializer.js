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