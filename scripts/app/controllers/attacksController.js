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