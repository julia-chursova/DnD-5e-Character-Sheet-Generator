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