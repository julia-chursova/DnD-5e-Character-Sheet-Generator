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
			'weaponModel',
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
				weaponModel
			) {
				function serialize() {
					var object = {
						armor: armorModel.exportData(),
						character: characterModel.exportData(),
						feats: featsModel.exportData(),
						hitPoints: hitPointsModel.exportData(),
						inventory: inventoryModel.exportData(),
						//languages: languagesModel.exportData(),
						//money: moneyModel.exportData(),
						player: playerModel.exportData(),
						//proficiencies: proficienciesModel.exportData(),
						//race: raceModel.exportData(),
						//saveThrows: saveThrowModel.exportData(),
						//skills: skillsModel.exportData(),
						//speed: speedModel.exportData(),
						//spellcasting: spellcastingModel.exportData(),
						//stats: statsModel.exportData(),
						//weapons: weaponModel.exportData()
					}

					return btoa(JSON.stringify(object));
				}

				function deserialize() {
					if (!window.location.hash)
						return;

					var str = window.location.hash.substring(2);
					var data = JSON.parse(atob(str));

					armorModel.importData(data.armor);
					characterModel.importData(data.character);
					featsModel.importData(data.feats);
					hitPointsModel.importData(data.hitPoints);
					inventoryModel.importData(data.inventory);
					//languagesModel.importData(data.languages);
					//moneyModel.importData(data.money);
					playerModel.importData(data.player);
					//proficienciesModel.importData(data.proficiencies);
					//raceModel.importData(data.race);
					//saveThrowModel.importData(data.saveThrows);
					//skillsModel.importData(data.skills);
					//speedModel.importData(data.speed);
					//spellcastingModel.importData(data.spellcasting);
					//statsModel.importData(data.stats);
					//weaponModel.importData(data.weapons);
				}

				return {
					serialize: serialize,
					deserialize: deserialize
				}
			}
		]);
})();