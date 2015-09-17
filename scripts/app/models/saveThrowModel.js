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