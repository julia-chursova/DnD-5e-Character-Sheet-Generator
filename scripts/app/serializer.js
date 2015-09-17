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

						player: playerModel.exportData()
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

					playerModel.importData(data.player);
				}

				return {
					serialize: serialize,
					deserialize: deserialize
				}
			}
		]);
})();